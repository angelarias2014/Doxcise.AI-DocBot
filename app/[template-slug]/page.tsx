"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import templates from "@/app/(data)/template";
import SlugHeader from "@/app/(components)/SlugHeader";
import { useUser } from "@clerk/nextjs";

// Dynamic import for Viewer (disable SSR)
const OutputEditor = dynamic(() => import("@/app/(components)/OutputEditor"), {
  ssr: false,
});

const SlugPage = () => {

  const { user } = useUser()

  const params = useParams();
  const currentSlug = Array.isArray(params["template-slug"])
    ? params["template-slug"][0]
    : params["template-slug"];

  const template = templates.find((t) => t.slug === currentSlug);

  const [aiOutput, setAiOutput] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-xl text-red-400 font-bold">Tool not found!</p>
          <p className="text-gray-400 mt-2">The requested template could not be located.</p>
        </div>
      </div>
    );
  }

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    const prompt = `${template.aiPrompt}\n\nUser Inputs:\n${Object.entries(
      formData
    )
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}`;

    try {
      const res = await fetch("../api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.output) {
        setAiOutput(data.output);
        await SaveInDb(formData, template.slug, data)
      } else {
        setAiOutput("No response from AI.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAiOutput("Error fetching AI response.");
    } finally {
      setIsGenerating(false);
    }
  };

  const SaveInDb = async (formData: any, slug: any, data: any) => {
    try {
      const res = await fetch("../api/save-output", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          templateSlug: slug,
          aiResponse: data.output,
          createdBy: user?.primaryEmailAddress?.emailAddress || "guest",
        }),
      });

      const result = await res.json();
      console.log("✅ DB Save:", result);
    } catch (err) {
      console.error("❌ SaveInDb error:", err);
    }
  };


  return (
    <>
      <SlugHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* 📝 Input Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-6">
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 p-8 rounded-3xl border border-cyan-400/40 backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-400/60"
              >
                {/* Header Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {template.name}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pl-13">
                    {template.desc}
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {template.form.map((field, index) => (
                    <div key={field.name} className="group">
                      <label className="block text-white font-medium mb-2 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 opacity-60"></span>
                        {field.label}
                        {field.required === "true" && (
                          <span className="text-red-400 ml-1">*</span>
                        )}
                      </label>
                      {field.field === "textarea" ? (
                        <textarea
                          className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300 resize-none hover:bg-white/15"
                          rows={4}
                          required={field.required === "true"}
                          value={formData[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                          placeholder={`Enter ${field.label.toLowerCase()}...`}
                        />
                      ) : (
                        <input
                          type="text"
                          className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 transition-all duration-300 hover:bg-white/15"
                          required={field.required === "true"}
                          value={formData[field.name] || ""}
                          onChange={(e) =>
                            handleChange(field.name, e.target.value)
                          }
                          placeholder={`Enter ${field.label.toLowerCase()}...`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* 📄 AI Output */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 p-8 rounded-3xl border border-cyan-400/40 backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-400/60 min-h-[500px]">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI Output
                </h2>
                {aiOutput && (
                  <div className="ml-auto flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Ready
                  </div>
                )}
              </div>

              {/* Output Content */}
              <div className="relative">
                {aiOutput ? (
                  <div className="prose prose-invert max-w-none">
                    <OutputEditor content={aiOutput} />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center mb-4 opacity-50">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg mb-2">
                      AI response will appear here
                    </p>
                    <p className="text-gray-500 text-sm">
                      Fill out the form and click "Generate" to get started
                    </p>
                  </div>
                )}

                {/* Loading Overlay */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-cyan-400 font-medium">Generating your content...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlugPage;