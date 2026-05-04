// src/app/api/generate-skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { GenerateSkillsRequest } from "@/types/resume";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const body: GenerateSkillsRequest = await req.json();
    const { jobTitle } = body;

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 400,
      messages: [
        {
          role: "user",
          content: `List 10 highly relevant, in-demand skills for a "${jobTitle || "professional"}" resume in 2024–2025.
Return ONLY a valid JSON array of short skill strings — no markdown, no preamble.
Keep each skill under 3 words. Mix technical and soft skills where appropriate.
Example: ["Figma", "React", "TypeScript", "User Research"]`,
        },
      ],
    });

    const text = message.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    const clean = text.replace(/```json|```/g, "").trim();
    const result: string[] = JSON.parse(clean);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error generating skills:", error);
    return NextResponse.json({
      result: ["Communication", "Problem Solving", "Leadership", "Data Analysis", "Project Management"],
    });
  }
}
