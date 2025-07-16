import { NextResponse } from "next/server";
import { db } from "@/app/(utils)/db";
import { AIOutput } from "@/app/(utils)/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(body.formData),
      templateSlug: body.templateSlug,
      aiResponse: JSON.stringify(body.aiResponse),
      createdBy: body.createdBy || "guest",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("❌ Save Error:", error);
    return NextResponse.json({ success: false, error: "Failed to save output." }, { status: 500 });
  }
}
