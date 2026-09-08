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
    <div style={{ background: "linear-gradient(180deg, #110b06 0%, #1f1309 100%)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px, 9vw, 96px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)" }}>
        <div className="slide-up" style={{ marginBottom: "clamp(40px, 8vw, 72px)", maxWidth: 640 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "8px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f3c45e", border: "1px solid rgba(231, 165, 31, 0.45)", background: "rgba(231, 165, 31, 0.08)", marginBottom: 18 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e7a51f", display: "inline-block" }} />
            Services
          </div>
          <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.96, margin: "0 0 16px", color: "#f5f5f5" }}>
            What I Build
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.76)", lineHeight: 1.7, margin: 0 }}>
            From simple websites to complex IoT systems, I take projects from idea to deployed product. Based in Nairobi, working with clients worldwide.
          </p>
        </div>

        <div className="slide-up" style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: "clamp(64px, 10vw, 96px)" }}>
          {services.map((s, i) => (
            <div
              className="interactive-card"
              key={i}
              style={{
                padding: "clamp(22px, 5vw, 34px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 22,
                background: "rgba(255,255,255,0.02)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(20px, 5vw, 32px)",
                alignItems: "start",
                transition: "all 0.25s ease",
              }}
            >
              <div>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,77,184,0.12)", color: "#ff7ccd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
                  {s.tagline}
                </div>
                <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, letterSpacing: "-0.05em", margin: "0 0 12px", color: "#f5f5f5" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.74)", lineHeight: 1.7, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>
                  What you get
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {s.deliverables.map((d, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: j < s.deliverables.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", fontSize: 14, color: "rgba(255,255,255,0.76)" }}>
                      <span style={{ color: "#ff7ccd", fontSize: 16 }}>✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="slide-up" style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, letterSpacing: "-0.05em", marginBottom: 24, color: "#f5f5f5", textAlign: "center" }}>
            How I Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
            {process.map((p) => (
              <div key={p.step} style={{ padding: "24px 20px", borderRadius: 18, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: "rgba(255, 124, 205, 0.28)", marginBottom: 10, letterSpacing: "-0.08em" }}>{p.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#f5f5f5" }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="slide-up" style={{ padding: "48px 28px", borderRadius: 24, border: "1px solid rgba(255, 124, 205, 0.25)", background: "rgba(255, 77, 184, 0.06)", textAlign: "center" }}>
          <h3 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, letterSpacing: "-0.05em", marginBottom: 12, color: "#f5f5f5" }}>
            Ready to start your project?
          </h3>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", maxWidth: 520, margin: "0 auto 26px", lineHeight: 1.7 }}>
            Tell me what you&apos;re building and I&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px", borderRadius: 12, background: "linear-gradient(135deg, #e7a51f, #b86f08)", color: "#1a1007", fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 16px 26px rgba(231,165,31,0.22)" }}>
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
