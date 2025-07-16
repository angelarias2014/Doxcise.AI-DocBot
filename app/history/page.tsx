import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/app/(utils)/db";
import { AIOutput } from "@/app/(utils)/schema";
import { eq, desc } from "drizzle-orm";
import { formatDistanceToNow } from "date-fns";
import Header from "../(components)/Header";
import { Sparkles, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

function safeParse(str: string | null) {
  try {
    return JSON.parse(str || "");
  } catch {
    return {};
  }
}

const HistoryPage = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-xl">
        Please sign in to view your history.
      </div>
    );
  }

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-xl">
        No email found for your account.
      </div>
    );
  }

  const entries = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .orderBy(desc(AIOutput.id));

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #0f172a, #1e3a8a, #000000)",
      }}
      className="min-h-screen text-white"
    >
      <Header />
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
          <Sparkles className="text-cyan-400" size={32} />
          Your Generation History
        </h1>

        {entries.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            You haven't generated anything yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {entries.map((entry) => {
              const formObj = safeParse(entry.formData);
              const output = safeParse(entry.aiResponse);

              return (
                <div
                  key={entry.id}
                  className="bg-white/5 border border-cyan-400/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md hover:border-cyan-400/70 hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold text-lg capitalize">
                      <FileText size={20} />
                      {entry.templateSlug.replace(/-/g, " ")}
                    </div>
                    <div className="text-sm text-gray-400">
                      {entry.createdAt
                        ? formatDistanceToNow(new Date(entry.createdAt), {
                          addSuffix: true,
                        })
                        : "Unknown time"}
                    </div>
                  </div>

                  <div className="mb-3 text-gray-300 text-sm">
                    <strong className="text-cyan-200">Input:</strong>{" "}
                    {Object.entries(formObj)
                      .map(([k, v]) => `${k}: ${v}`)
                      .join(", ")
                      .slice(0, 160)}
                    ...
                  </div>

                  <div className="text-white text-sm">
                    <strong className="text-green-400">Output:</strong>{" "}
                    <details className="mt-1 cursor-pointer">
                      <summary className="text-blue-300 underline">
                        View Output
                      </summary>
                      <pre className="whitespace-pre-wrap mt-2 text-gray-100 text-sm bg-black/30 p-4 rounded-lg border border-white/10">
                        {typeof output === "string"
                          ? output
                          : JSON.stringify(output, null, 2)}
                      </pre>
                    </details>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
