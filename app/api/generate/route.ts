import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables.")
}

const genAI = new GoogleGenerativeAI(apiKey)

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash"
    })
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    return NextResponse.json({ output: text }, { status: 200 })
  } catch (error) {
    console.error("Gemini API Error:", error)
    return NextResponse.json({ error: "Something went wrong while generating content." }, { status: 500 })
  }
}
