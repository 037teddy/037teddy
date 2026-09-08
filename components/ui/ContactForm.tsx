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

    const whatsappUrl = `https://wa.me/254742396020?text=${encodeURIComponent(lines.join("\n"))}`;

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
      <div style={{ padding: "clamp(28px, 5vw, 44px)", borderRadius: 24, border: "1px solid rgba(52,211,153,0.18)", background: "rgba(52,211,153,0.08)", textAlign: "center", boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(52,211,153,0.12)", color: "#8ef0c7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <CheckCircle size={28} />
        </div>
        <h3 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 800, marginBottom: 8, color: "#f5f5f5" }}>Message Sent!</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: "0 0 18px" }}>
          WhatsApp should have opened with your details pre-filled. If it didn&apos;t, tap the button below to open it — then press <strong>Send</strong>. I&apos;ll get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} style={{ marginTop: 8, padding: "10px 18px", fontSize: 13, fontWeight: 700, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#f5f5f5", cursor: "pointer" }}>
          Send another message
        </button>
        {whatsappUrl && (
          <button onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")} style={{ marginTop: 12, padding: "10px 18px", fontSize: 13, fontWeight: 700, borderRadius: 10, border: "none", background: "linear-gradient(135deg, #e7a51f, #b86f08)", color: "#1a1007", cursor: "pointer" }}>
            Open WhatsApp
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "clamp(24px, 5vw, 34px)", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: 18, boxShadow: "0 18px 40px rgba(0,0,0,0.16)" }}>
      <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 800, letterSpacing: "-0.05em", color: "#f5f5f5", marginBottom: 4 }}>Contact Form</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Full Name</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f5f5f5", fontSize: 14, outline: "none", minHeight: 44 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Email Address</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f5f5f5", fontSize: 14, outline: "none", minHeight: 44 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Phone Number</label>
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 000 0000" style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f5f5f5", fontSize: 14, outline: "none", minHeight: 44 }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Project Type</label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Mobile App", "Website", "Custom Project"].map((type) => {
            const isSelected = projectType === type;
            return (
              <button key={type} type="button" onClick={() => setProjectType(type)} style={{ padding: "9px 14px", borderRadius: 10, border: isSelected ? "1px solid rgba(231,165,31,0.8)" : "1px solid rgba(255,255,255,0.08)", background: isSelected ? "rgba(231, 165, 31, 0.12)" : "rgba(255,255,255,0.03)", color: isSelected ? "#f3c45e" : "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Project Details</label>
        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me a little about your project..." rows={5} style={{ width: "100%", resize: "vertical", minHeight: 120, padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "#f5f5f5", fontSize: 14, outline: "none", fontFamily: "inherit" }} />
      </div>

      <button type="submit" disabled={status === "submitting"} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 20px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #e7a51f, #b86f08)", color: "#1a1007", fontSize: 14, fontWeight: 800, cursor: status === "submitting" ? "wait" : "pointer", opacity: status === "submitting" ? 0.8 : 1, minHeight: 46, boxShadow: "0 16px 26px rgba(231,165,31,0.2)" }}>
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Send size={15} />
      </button>
    </form>
  );
}
