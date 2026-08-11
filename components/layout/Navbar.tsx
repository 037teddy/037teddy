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
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--border)",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", minWidth: 0 }}>
          <span
            style={{
              fontSize: "clamp(16px, 5vw, 20px)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "var(--text)",
            }}
          >
            Teddy
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{ gap: 4, alignItems: "center" }}
          className="hidden sm:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                color:
                  pathname === link.href ? "var(--accent)" : "var(--text-muted)",
                background:
                  pathname === link.href ? "rgba(108,99,255,0.1)" : "transparent",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.backgroundColor = "rgba(108,99,255,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "var(--text-muted)";
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
              marginLeft: 8,
              padding: "8px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              background: "var(--accent)",
              color: "#fff",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(79, 70, 229, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            cursor: "pointer",
            padding: 4,
          }}
          className="block sm:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "#ffffff",
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
                color:
                  pathname === link.href ? "var(--accent)" : "var(--text-muted)",
                borderBottom: "1px solid var(--border)",
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
              background: "var(--accent)",
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
