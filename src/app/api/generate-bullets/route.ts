// src/app/api/generate-bullets/route.ts
import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { GenerateBulletsRequest } from "@/types/resume";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const body: GenerateBulletsRequest = await req.json();
    const { rawDescription, role, company, jobTitle } = body;

    if (!rawDescription?.trim()) {
      return NextResponse.json({ error: "rawDescription is required" }, { status: 400 });
    }

    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are an expert resume writer. Convert this rough experience description into 3-4 powerful, quantified resume bullet points for a ${jobTitle || role} role at ${company || "a company"}.

Raw experience: "${rawDescription}"

Rules:
- Start each bullet with a strong action verb (Led, Shipped, Designed, Built, Reduced, Increased, etc.)
- Include metrics/numbers where plausible (even estimated: "~30%", "2M+ users")
- Be specific and impactful
- Keep each bullet under 20 words
- Return ONLY a valid JSON array of strings — no markdown, no preamble, no commentary

Example output: ["Led redesign of checkout flow, reducing cart abandonment by 28%", "Shipped 14 features used by 500K+ daily active users"]`,
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
    console.error("Error generating bullets:", error);
    // Return fallback bullets on error
    return NextResponse.json({
      result: [
        "Delivered high-impact initiatives that improved key metrics significantly",
        "Collaborated cross-functionally to ship features on time and within scope",
        "Drove process improvements that reduced operational overhead by ~25%",
      ],
    });
  }
}
