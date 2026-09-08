"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/certificates", label: "Certificates" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(17, 11, 6, 0.94)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 18px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", minWidth: 0 }}>
          <span
            style={{
              fontSize: "clamp(18px, 5vw, 24px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              color: "#f7f0f5",
            }}
          >
            Teddy
            <span style={{ color: "#e7a51f" }}>.</span>
          </span>
        </Link>

        <div
          style={{ gap: 6, alignItems: "center" }}
          className="hidden sm:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                color: pathname === link.href ? "#f3bc38" : "rgba(255,247,232,0.8)",
                background: pathname === link.href ? "rgba(255, 77, 184, 0.12)" : "transparent",
                borderBottom: pathname === link.href && isHome ? "2px solid #e7a51f" : "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              marginLeft: 10,
              padding: "8px 18px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 18px rgba(255,77,184,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: isHome ? "#fff" : "var(--text)",
            cursor: "pointer",
            padding: 4,
          }}
          className="block sm:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "#1b1008",
            padding: "12px 16px 16px",
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "none",
                color: pathname === link.href ? "#f3bc38" : "rgba(255,247,232,0.8)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: 16,
              padding: "12px 20px",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              background: "#d8940b",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
}
