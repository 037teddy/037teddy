"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const suggestions = [
  "What services do you offer?",
  "Tell me about your projects",
  "What's your experience?",
  "How can I contact you?",
  "Can you build my app idea?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I'm Teddy's assistant. Ask me anything about Teddy — his skills, projects, services, experience, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [open, messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = { role: "user", text: trimmed };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            err instanceof Error
              ? `Sorry, I couldn't reach the AI service: ${err.message}`
              : "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 60,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 24px rgba(79, 70, 229, 0.35)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 16px 32px rgba(79, 70, 229, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(79, 70, 229, 0.35)";
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 92,
            right: 24,
            zIndex: 60,
            width: "min(92vw, 380px)",
            height: "min(70vh, 520px)",
            borderRadius: 16,
            border: "1px solid var(--border)",
            background: "#ffffff",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.18)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "fadeUp 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 18px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Bot size={20} />
            </div>
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                Teddy Assistant
                <Sparkles size={13} />
              </div>
              <div style={{ fontSize: 11, opacity: 0.9 }}>
                Ask me anything about Teddy
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "var(--surface-2)",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "85%",
                  padding: "10px 14px",
                  borderRadius: 12,
                  fontSize: 13,
                  lineHeight: 1.6,
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  background:
                    m.role === "user" ? "var(--accent)" : "#ffffff",
                  color: m.role === "user" ? "#fff" : "var(--text)",
                  border:
                    m.role === "user" ? "none" : "1px solid var(--border)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div
                style={{
                  maxWidth: "85%",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontSize: 13,
                  alignSelf: "flex-start",
                  background: "#ffffff",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                Typing
                <span
                  style={{
                    display: "inline-flex",
                    gap: 3,
                    marginLeft: 4,
                    animation: "pulse 1.2s ease-in-out infinite",
                  }}
                >
                  <span>·</span>
                  <span>·</span>
                  <span>·</span>
                </span>
              </div>
            )}
          </div>

          {/* Suggestions (only before first user message) */}
          {messages.filter((m) => m.role === "user").length === 0 && (
            <div
              style={{
                padding: "0 12px 8px",
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
                background: "var(--surface-2)",
              }}
            >
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  disabled={loading}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 100,
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid var(--border)",
                    background: "#ffffff",
                    color: "var(--accent)",
                    transition: "all 0.2s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            style={{
              padding: 12,
              borderTop: "1px solid var(--border)",
              background: "#ffffff",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Teddy..."
              style={{
                flexGrow: 1,
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--text)",
                fontSize: 13,
                outline: "none",
                minHeight: 40,
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                opacity: loading || !input.trim() ? 0.6 : 1,
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}