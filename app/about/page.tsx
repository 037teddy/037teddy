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
    role: "Software Developer",
    company: "Xiracom",
    period: "Recent",
    desc: "Developed software solutions for clients across web and mobile platforms.",
  },
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
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        style={{ marginBottom: "clamp(40px, 8vw, 64px)" }}
      >
        <div className="md:col-span-8">
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
            About Me
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              marginBottom: 24,
              color: "var(--text)",
            }}
          >
            Building software,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              solving problems
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            I&apos;m Teddy Mbayaki, a software and mobile developer based in Nairobi, Kenya.
            I work across the full stack — from web and mobile applications to IoT systems and
            business automation tools.
          </p>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--text-muted)", lineHeight: 1.7 }}>
            My background includes professional software development at Xiracom, teaching Python
            at Eldoret National Polytechnic, running a cyber café, and building independent
            software projects. I enjoy working on systems that have real-world impact.
          </p>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div style={{ position: "relative" }} className="group">
            <div
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: 20,
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                opacity: 0.1,
                filter: "blur(6px)",
              }}
            />
            <img
              src="/images/teddy.jpg"
              alt="Teddy Mbayaki"
              style={{
                width: "100%",
                maxWidth: 240,
                height: 280,
                objectFit: "cover",
                borderRadius: 16,
                border: "3px solid var(--surface)",
                boxShadow: "0 15px 30px -10px rgba(0,0,0,0.08)",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Focus areas */}
      <section style={{ marginBottom: "clamp(40px, 8vw, 64px)" }}>
        <h2
          style={{
            fontSize: "clamp(20px, 4vw, 22px)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: "clamp(16px, 4vw, 24px)",
            color: "var(--text)",
          }}
        >
          Areas of Focus
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(12px, 3vw, 16px)",
          }}
        >
          {[
            { icon: <Code2 size={20} />, title: "Web Applications", desc: "Full-stack web platforms built with Next.js, React, and modern tooling." },
            { icon: <Smartphone size={20} />, title: "Mobile Apps", desc: "Cross-platform mobile applications using Flutter and React Native." },
            { icon: <Cpu size={20} />, title: "IoT Systems", desc: "Hardware-software projects with ESP32, Arduino, and cloud dashboards." },
            { icon: <Database size={20} />, title: "Business Systems", desc: "Custom dashboards, management tools, and workflow automation." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "22px 20px",
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--surface)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgba(108,99,255,0.12)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: "var(--text)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: 24,
            color: "var(--text)",
          }}
        >
          Technical Skills
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {category}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-muted)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: 24,
            color: "var(--text)",
          }}
        >
          Experience
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {experience.map((exp, i) => (
            <div
              key={i}
              style={{
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--surface)",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500 }}>
                    {exp.company}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "var(--surface-2)",
                    color: "var(--text-dim)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
