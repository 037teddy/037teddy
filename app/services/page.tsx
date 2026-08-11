import Link from "next/link";
import { Globe, Smartphone, Cpu, BarChart3, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Teddy Mbayaki",
  description: "Software development services by Teddy Mbayaki — web apps, mobile apps, IoT systems, and business tools.",
};

const services = [
  {
    icon: <Globe size={28} />,
    title: "Website Development",
    tagline: "Modern, fast, and professional websites",
    desc: "I build responsive websites and landing pages optimized for speed, SEO, and conversions. From portfolio sites to full product landing pages — built with Next.js and Tailwind CSS.",
    deliverables: [
      "Responsive design (mobile + desktop)",
      "SEO-optimized page structure",
      "Fast page load with Next.js",
      "Contact forms and CTA sections",
      "Vercel deployment",
    ],
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Web Application Development",
    tagline: "Full-stack web platforms with real functionality",
    desc: "Custom web applications with dashboards, user management, data entry, reports, and more. Built with Next.js, TypeScript, and integrated with databases like Supabase or Firebase.",
    deliverables: [
      "Authentication and user roles",
      "Database design and integration",
      "Admin dashboard",
      "Data entry forms and reports",
      "API integrations",
    ],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile App Development",
    tagline: "Cross-platform apps for iOS and Android",
    desc: "Mobile applications built with Flutter for smooth, native-feeling experiences on both Android and iOS from a single codebase.",
    deliverables: [
      "Cross-platform (Android + iOS)",
      "Firebase or Supabase backend",
      "Push notifications",
      "Offline support",
      "App Store / Play Store guidance",
    ],
  },
  {
    icon: <Cpu size={28} />,
    title: "IoT & Embedded Systems",
    tagline: "Hardware meets software",
    desc: "IoT projects using ESP32, Arduino, and connected sensors with real-time web dashboards. Ideal for monitoring systems, automation, and smart environment projects.",
    deliverables: [
      "ESP32 / Arduino firmware",
      "Sensor integration",
      "Firebase real-time data sync",
      "Web dashboard with Chart.js",
      "Alert systems (LED, buzzer, push)",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We discuss your idea, goals, and requirements in detail." },
  { step: "02", title: "Planning", desc: "I map out the system architecture, tech stack, and scope." },
  { step: "03", title: "Development", desc: "I build the project with regular updates and check-ins." },
  { step: "04", title: "Delivery", desc: "You receive the finished product, deployed and ready to use." },
];

export default function ServicesPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div style={{ marginBottom: "clamp(40px, 8vw, 72px)", maxWidth: 600 }}>
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
          Services
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 52px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: 16,
            color: "var(--text)",
          }}
        >
          What I Build
        </h1>
        <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
          From simple websites to complex IoT systems, I take projects from idea to
          deployed product. Based in Nairobi, working with clients worldwide.
        </p>
      </div>

      {/* Services */}
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 4vw, 24px)", marginBottom: "clamp(64px, 10vw, 96px)" }}>
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "clamp(24px, 5vw, 36px) clamp(20px, 5vw, 32px)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              background: "#ffffff",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(20px, 5vw, 32px)",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(108,99,255,0.12)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {s.icon}
              </div>
              <div style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 600, color: "var(--text-dim)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                {s.tagline}
              </div>
              <h2 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 12, color: "var(--text)" }}>
                {s.title}
              </h2>
              <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
            <div>
              <div style={{ fontSize: "clamp(10px, 2vw, 12px)", fontWeight: 600, color: "var(--text-dim)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
                What you get
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.deliverables.map((d, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 0",
                      borderBottom: j < s.deliverables.length - 1 ? "1px solid var(--border)" : "none",
                      fontSize: 14,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent-2)", fontSize: 16 }}>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <section style={{ marginBottom: 96 }}>
        <h2
          style={{
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.8px",
            marginBottom: 40,
            color: "var(--text)",
            textAlign: "center",
          }}
        >
          How I Work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          {process.map((p) => (
            <div
              key={p.step}
              style={{
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--surface)",
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "rgba(108,99,255,0.2)",
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: 12,
                  letterSpacing: "-1px",
                }}
              >
                {p.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        style={{
          padding: "48px",
          borderRadius: 16,
          border: "1px solid rgba(108,99,255,0.2)",
          background: "rgba(108,99,255,0.06)",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.8px", marginBottom: 12, color: "var(--text)" }}>
          Ready to start your project?
        </h3>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
          Tell me what you&apos;re building and I&apos;ll get back to you within 24 hours.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 32px",
            borderRadius: 10,
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
          }}
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
