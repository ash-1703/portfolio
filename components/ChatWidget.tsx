"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {

  const localApi = "/portfolio/api/insight";

  const apiUrl =
    (process.env.NEXT_PUBLIC_INSIGHT_API_URL as string | undefined) ||
    (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")
      ? "https://insight-agent-full.fly.dev/ask"
      : localApi);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I’m Ash's AI twin. Ask me about her projects, skills, or experience." }
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Persist session locally so chat survives page changes
  useEffect(() => {
    const saved = localStorage.getItem("ai_chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("ai_chat", JSON.stringify(messages));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);

    try {
      // If calling Fly.io directly, send {question} instead of {messages}
      const isFlyDirect = apiUrl.includes("fly.dev");
      const payload = isFlyDirect 
        ? { question: text }
        : { messages: next };
      
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        const hint = text.startsWith("<!DOCTYPE") || text.startsWith("<")
          ? "Got an HTML error page (likely a 404). On localhost, open /portfolio/, not /."
          : text.slice(0, 120);
        setMessages((m) => [
          ...m,
          { role: "assistant", content: `Request failed (${res.status}). ${hint}` },
        ]);
        return;
      }

      if (!contentType.includes("application/json")) {
        const text = await res.text().catch(() => "");
        const hint = text.startsWith("<!DOCTYPE") || text.startsWith("<")
          ? "Received HTML instead of JSON (are you on the correct /portfolio path?)."
          : "Unexpected response type.";
        setMessages((m) => [
          ...m,
          { role: "assistant", content: `Unexpected response. ${hint}` },
        ]);
        return;
      }

      const data = await res.json().catch(() => null);
      if (data?.reply) {
        setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      } else if (data?.answer) {
        // Fly.io returns {answer}
        setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "Hmm, I didn't get a reply from the agent." },
        ]);
      }
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Error: ${e?.message ?? "Something went wrong"}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 btn shadow-xl"
        aria-expanded={open}
        aria-controls="insight-chat"
      >
        {open ? "Close Chat" : "Chat with my AI Twin"}
      </button>

      {/* Panel */}
      {open && (
        <div
          id="insight-chat"
          className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-md h-[70vh] sm:h-[60vh] rounded-2xl border border-white/10 bg-[var(--card)]/90 backdrop-blur shadow-2xl flex flex-col"
        >
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="font-semibold">Insight Agent</div>
            <button onClick={() => setOpen(false)} className="text-slate-200 hover:text-white">×</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-2 leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-brand-500 text-black"
                    : "bg-white/5 text-slate-100 border border-white/10"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="w-24 h-8 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            )}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about projects, skills, resume..."
                className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-brand-400/60"
                disabled={loading}
              />
              <button onClick={sendMessage} disabled={loading} className="btn">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
