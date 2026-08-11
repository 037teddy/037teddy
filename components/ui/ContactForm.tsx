"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Website");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const lines = [
      "New project inquiry from teddy-portfolio.com:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${projectType}`,
      "",
      `Message: ${message}`,
    ];

    const whatsappUrl = `https://wa.me/254742396020?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    setWhatsappUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  if (status === "success") {
    return (
      <div
        style={{
          padding: "clamp(24px, 5vw, 48px) clamp(24px, 5vw, 32px)",
          borderRadius: 16,
          border: "1px solid rgba(13, 148, 136, 0.2)",
          background: "rgba(13, 148, 136, 0.04)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(13, 148, 136, 0.1)",
            color: "var(--accent-2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <CheckCircle size={28} />
        </div>
        <h3 style={{ fontSize: "clamp(18px, 4vw, 20px)", fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
          WhatsApp should have opened with your details pre-filled. If it didn&apos;t, tap the button below to open it — then press <strong>Send</strong>. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          style={{
            marginTop: 24,
            padding: "10px 18px",
            fontSize: "clamp(12px, 2vw, 13px)",
            fontWeight: 600,
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "#ffffff",
            color: "var(--text)",
            cursor: "pointer",
            minHeight: 44,
          }}
        >
          Send another message
        </button>
        {whatsappUrl && (
          <button
            onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
            style={{
              marginTop: 8,
              padding: "10px 18px",
              fontSize: "clamp(12px, 2vw, 13px)",
              fontWeight: 600,
              borderRadius: 8,
              border: "none",
              background: "var(--accent-2)",
              color: "#fff",
              cursor: "pointer",
              minHeight: 44,
            }}
          >
            Open WhatsApp
          </button>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "clamp(24px, 5vw, 36px) clamp(24px, 5vw, 32px)",
        borderRadius: 16,
        border: "1px solid var(--border)",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 4vw, 20px)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ fontSize: "clamp(18px, 4vw, 20px)", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
        Contact Form
      </h2>

      {/* Full Name */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 600, color: "var(--text-muted)" }}>
          Full Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Full name"
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text)",
            fontSize: "clamp(13px, 2vw, 14px)",
            outline: "none",
            minHeight: 44,
          }}
        />
      </div>

      {/* Email */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 600, color: "var(--text-muted)" }}>
          Email Address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text)",
            fontSize: "clamp(13px, 2vw, 14px)",
            outline: "none",
            minHeight: 44,
          }}
        />
      </div>

      {/* Phone Number */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: "clamp(11px, 2vw, 12px)", fontWeight: 600, color: "var(--text-muted)" }}>
          Phone Number
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+254 700 000 0000"
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text)",
            fontSize: 14,
            outline: "none",
          }}
        />
      </div>

      {/* Project Type selection */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)" }}>
          Project Type
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Mobile App", "Website", "Custom Project"].map((type) => {
            const isSelected = projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setProjectType(type)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: isSelected ? "1px solid var(--accent)" : "1px solid var(--border)",
                  background: isSelected ? "rgba(79, 70, 229, 0.08)" : "var(--surface-2)",
                  color: isSelected ? "var(--accent)" : "var(--text-muted)",
                  transition: "all 0.2s",
                }}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Description */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)" }}>
          Project Description
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project..."
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text)",
            fontSize: 14,
            outline: "none",
            resize: "vertical",
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "14px",
          borderRadius: 8,
          background: "var(--accent)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          transition: "opacity 0.2s",
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Sending..." : "Send"}
        <Send size={15} />
      </button>
    </form>
  );
}
