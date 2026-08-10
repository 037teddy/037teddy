"use client";
import Link from "next/link";
import { GitBranch, Mail, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "#ffffff",
        padding: "40px 16px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
            marginBottom: 32,
          }}
          className="sm:grid-cols-3 sm:gap-32"
        >
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div
              style={{
                fontSize: "clamp(16px, 5vw, 20px)",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                marginBottom: 12,
              }}
            >
              Teddy<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Software & mobile developer based in Nairobi, Kenya. Building
              useful products from idea to launch.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Navigate
              </div>
              {[
                { href: "/projects", label: "Projects" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    marginBottom: 8,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Connect
              </div>
              {[
                {
                  href: "https://github.com/037teddy",
                  label: "GitHub",
                  icon: <GitBranch size={14} />,
                },
                {
                  href: "mailto:teddymbayaki@gmail.com",
                  label: "Email",
                  icon: <Mail size={14} />,
                },
                {
                  href: "https://www.linkedin.com/in/teddy-ijaka-631a77412/",
                  label: "LinkedIn",
                  icon: <Link2 size={14} />,
                },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    marginBottom: 8,
                  }}
                >
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} Teddy Mbayaki. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
