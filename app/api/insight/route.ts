import { NextRequest } from "next/server";

export const runtime = "nodejs"; // ensure edge isn’t used (so we can call arbitrary APIs)

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json(); // [{role:"user"|"assistant"|"system", content:string}, ...]
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 });
    }

    const res = await fetch(process.env.INSIGHT_AGENT_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INSIGHT_AGENT_KEY ? { "Authorization": `Bearer ${process.env.INSIGHT_AGENT_KEY}` } : {}),
      },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: `Agent error: ${text}` }), { status: 500 });
    }

    // Expecting JSON { reply: string } or { choices:[{message:{content}}] } (OpenAI-like)
    const data = await res.json().catch(() => ({}));
    const reply =
      data?.reply ??
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn’t parse the agent response.";

    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message ?? "Unknown error" }), { status: 500 });
  }
}
