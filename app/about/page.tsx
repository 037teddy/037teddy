import { Code2, Cpu, Smartphone, Database } from "lucide-react";

export const metadata = {
  title: "About | Teddy Mbayaki",
  description: "Learn about Teddy Mbayaki — software and mobile developer based in Nairobi, Kenya.",
};

const skills = {
  "Languages": ["TypeScript", "Python", "JavaScript", "PHP", "C/C++", "Dart"],
  "Frameworks": ["Next.js", "React", "Flutter", "Tailwind CSS", "Bootstrap"],
  "Backend & DB": ["Node.js", "Supabase", "Firebase", "MySQL", "PostgreSQL"],
  "IoT & Hardware": ["ESP32", "Arduino", "HC-SR04 Sensors", "MQTT"],
  "Tools": ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
};

const experience = [
  {
    role: "Python Instructor",
    company: "Eldoret National Polytechnic",
    period: "Academic",
    desc: "Taught Python programming to students, covering fundamentals through practical applications.",
  },
  {
    role: "IT Intern",
    company: "Eldoret National Polytechnic",
    period: "Internship",
    desc: "Hands-on IT support and system administration experience.",
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #110b06 0%, #1f1309 100%)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px, 9vw, 96px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)" }}>
        <div className="slide-up about-hero" style={{ marginBottom: "clamp(40px, 8vw, 64px)", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 32, alignItems: "center" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 999,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#f3c45e",
                border: "1px solid rgba(231, 165, 31, 0.45)",
                background: "rgba(231, 165, 31, 0.08)",
                marginBottom: 20,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e7a51f", display: "inline-block" }} />
              About Me
            </div>
            <h1
              style={{
                fontSize: "clamp(38px, 6vw, 68px)",
                fontWeight: 900,
                letterSpacing: "-0.06em",
                lineHeight: 0.96,
                margin: "0 0 20px",
                color: "#f5f5f5",
              }}
            >
              Building software,
              <span style={{ display: "block", color: "#e7a51f" }}>solving problems.</span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.76)", lineHeight: 1.7, margin: 0 }}>
              I&apos;m Teddy Mbayaki, a software and mobile developer based in Nairobi, Kenya. I work across the full stack — from web and mobile applications to IoT systems and business automation tools.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "min(360px, 90%)" }}>
              <div style={{ position: "absolute", inset: -18, borderRadius: 28, background: "linear-gradient(135deg, rgba(255,77,184,0.2), rgba(124,58,237,0.2))", filter: "blur(20px)" }} />
              <img
                className="about-portrait"
                src="/images/teddy.png"
                alt="Teddy Mbayaki"
                style={{
                  width: "100%",
                  height: "min(50vh, 440px)",
                  objectFit: "cover",
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>

        <section className="slide-up" style={{ marginBottom: "clamp(40px, 8vw, 64px)" }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: "-0.05em", color: "#f5f5f5", marginBottom: 24 }}>
            Areas of Focus
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: <Code2 size={22} />, title: "Web Applications", desc: "Full-stack web platforms built with Next.js, React, and modern tooling." },
              { icon: <Smartphone size={22} />, title: "Mobile Apps", desc: "Cross-platform mobile applications using Flutter and React Native." },
              { icon: <Cpu size={22} />, title: "IoT Systems", desc: "Hardware-software projects with ESP32, Arduino, and cloud dashboards." },
              { icon: <Database size={22} />, title: "Business Systems", desc: "Custom dashboards, management tools, and workflow automation." },
            ].map((item, i) => (
              <div
                className="interactive-card"
                key={i}
                style={{
                  padding: "22px 20px",
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  transition: "all 0.25s ease",
                }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,77,184,0.12)", color: "#ff7ccd", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#f5f5f5" }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="slide-up" style={{ marginBottom: 60 }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: "-0.05em", color: "#f5f5f5", marginBottom: 22 }}>
            Technical Skills
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>
                  {category}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {items.map((s) => (
                    <span key={s} style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600 }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="slide-up">
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: "-0.05em", color: "#f5f5f5", marginBottom: 22 }}>
            Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  padding: "22px 24px",
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 6 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#ff7ccd" }}>{exp.role}</div>
                    <div style={{ fontSize: 15, color: "#f5f5f5", fontWeight: 600 }}>{exp.company}</div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", paddingTop: 2 }}>{exp.period}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
