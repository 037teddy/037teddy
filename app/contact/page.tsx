import { Mail, GitBranch, MessageSquare, Link2 } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)", backgroundColor: "#ffffff" }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Info & Links */}
        <div className="lg:col-span-6">
          <div style={{ marginBottom: "clamp(24px, 6vw, 40px)" }}>
            <div
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: 600,
                letterSpacing: 2,
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Get in Touch
            </div>
            <h1
              style={{
                fontSize: "clamp(28px, 6vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              Let&apos;s work together
            </h1>
            <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480 }}>
              Have a project in mind? Looking for a developer to join your team? Or just want to
              connect? Reach out and I&apos;ll respond within 24 hours.
            </p>
          </div>

          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2vw, 12px)", marginBottom: "clamp(24px, 6vw, 40px)" }}>
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "teddymbayaki@gmail.com",
                href: "mailto:teddymbayaki@gmail.com",
                desc: "Best for project inquiries",
              },
              {
                icon: <MessageSquare size={20} />,
                label: "WhatsApp",
                value: "+254 7423 960 20",
                href: "https://wa.me/254742396020",
                desc: "Quick questions and follow-ups",
              },
              {
                icon: <GitBranch size={20} />,
                label: "GitHub",
                value: "github.com/037teddy",
                href: "https://github.com/037teddy",
                desc: "View my code and projects",
              },
              {
                icon: <Link2 size={20} />,
                label: "LinkedIn",
                value: "linkedin.com/in/teddy-ijaka-631a77412",
                href: "https://www.linkedin.com/in/teddy-ijaka-631a77412/",
                desc: "Professional network",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:border-[var(--accent)] transition-all duration-200"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  background: "#ffffff",
                  textDecoration: "none",
                  minHeight: 44,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(108,99,255,0.1)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{item.desc}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Availability note */}
          <div
            style={{
              padding: "20px 24px",
              borderRadius: 12,
              border: "1px solid rgba(0,212,170,0.2)",
              background: "rgba(0,212,170,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent-2)",
                  display: "inline-block",
                  boxShadow: "0 0 0 3px rgba(0,212,170,0.2)",
                }}
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-2)" }}>
                Currently Available
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
              I&apos;m open to freelance projects, full-time opportunities, and technical
              collaborations. Based in Nairobi, Kenya — available for remote work worldwide.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
