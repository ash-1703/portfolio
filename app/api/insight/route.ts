import { NextRequest } from "next/server";

export const runtime = "nodejs"; // ensure edge isn’t used (so we can call arbitrary APIs)

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json(); // [{role:"user"|"assistant"|"system", content:string}, ...]
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), { status: 400 });
    }

    // Derive a 'question' for backends that expect a single prompt (e.g., FastAPI expecting {question})
    const lastUser = [...messages].reverse().find((m: any) => m?.role === "user");
    const question = lastUser?.content ?? messages[messages.length - 1]?.content ?? "";

    const res = await fetch(process.env.INSIGHT_AGENT_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INSIGHT_AGENT_KEY ? { "Authorization": `Bearer ${process.env.INSIGHT_AGENT_KEY}` } : {}),
      },
      // Send both shapes for compatibility: backends that want {question} and those that accept {messages}
      body: JSON.stringify({ question, messages }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: `Agent error: ${text}` }), { status: 500 });
    }

    // Accept multiple response shapes: { reply }, { answer }, OpenAI-like { choices[0].message.content }, { output }, etc.
    const data = await res.json().catch(() => ({}));
    const reply =
      data?.reply ??
      data?.answer ??
      data?.output ??
      data?.message ??
      data?.choices?.[0]?.message?.content ??
      "Sorry, I couldn’t parse the agent response.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message ?? "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
