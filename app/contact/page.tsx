import { Mail, GitBranch, MessageSquare, Link2 } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div style={{ background: "linear-gradient(180deg, #110b06 0%, #1f1309 100%)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px, 9vw, 96px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 slide-up">
            <div style={{ marginBottom: "clamp(24px, 6vw, 40px)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "8px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f3c45e", border: "1px solid rgba(231, 165, 31, 0.45)", background: "rgba(231, 165, 31, 0.08)", marginBottom: 18 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e7a51f", display: "inline-block" }} />
                Get in Touch
              </div>
              <h1 style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.96, margin: "0 0 18px", color: "#f5f5f5" }}>
                Let&apos;s work together
              </h1>
              <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.76)", lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
                Have a project in mind? Looking for a developer to join your team? Or just want to connect? Reach out and I&apos;ll respond within 24 hours.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: "clamp(24px, 6vw, 34px)" }}>
              {[
                { icon: <Mail size={20} />, label: "Email", value: "teddymbayaki@gmail.com", href: "mailto:teddymbayaki@gmail.com", desc: "Best for project inquiries" },
                { icon: <MessageSquare size={20} />, label: "WhatsApp", value: "+254 7423 960 20", href: "https://wa.me/254742396020", desc: "Quick questions and follow-ups" },
                { icon: <GitBranch size={20} />, label: "GitHub", value: "github.com/037teddy", href: "https://github.com/037teddy", desc: "View my code and projects" },
                { icon: <Link2 size={20} />, label: "LinkedIn", value: "linkedin.com/in/teddy-ijaka-631a77412", href: "https://www.linkedin.com/in/teddy-ijaka-631a77412/", desc: "Professional network" },
              ].map((item) => (
                <a
                  key={item.label}
                  className="interactive-card"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)",
                    textDecoration: "none",
                    minHeight: 52,
                    transition: "all 0.25s ease",
                  }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,77,184,0.12)", color: "#ff7ccd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f5" }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.68)" }}>{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ padding: "20px 22px", borderRadius: 18, border: "1px solid rgba(34, 197, 94, 0.25)", background: "rgba(34, 197, 94, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", display: "inline-block", boxShadow: "0 0 0 4px rgba(52,211,153,0.18)" }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#9ee7c8" }}>Currently Available</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
                I&apos;m open to freelance projects, full-time opportunities, and technical collaborations. Based in Nairobi, Kenya — available for remote work worldwide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 slide-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
