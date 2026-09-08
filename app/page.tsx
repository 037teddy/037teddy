"use client";

import Link from "next/link";
import { ArrowRight, Zap, Smartphone, Globe, Cpu } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const skills = [
  "Next.js", "React", "TypeScript", "Python", "Flutter",
  "ESP32", "Firebase", "Tailwind CSS", "PHP", "MySQL",
  "Arduino", "Node.js", "Git", "Vercel",
];

const services = [
  {
    icon: <Globe size={22} />,
    title: "Web Development",
    desc: "Modern, responsive websites and web apps built with Next.js and React.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps using Flutter and React Native.",
  },
  {
    icon: <Cpu size={22} />,
    title: "IoT & Embedded Systems",
    desc: "Hardware-software projects using ESP32, Arduino, and cloud dashboards.",
  },
  {
    icon: <Zap size={22} />,
    title: "Business Systems",
    desc: "Custom dashboards, management systems, and automation tools.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #110b06 0%, #2b1a08 52%, #120b06 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at top left, rgba(231, 165, 31, 0.2), transparent 30%), radial-gradient(circle at bottom right, rgba(255, 247, 232, 0.04), transparent 25%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "104px 18px 60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="hero-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div className="hero-copy" style={{ maxWidth: 620 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(231, 165, 31, 0.1)",
                  border: "1px solid rgba(231, 165, 31, 0.5)",
                  borderRadius: 999,
                  padding: "8px 16px",
                  color: "#f3c45e",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 28,
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e7a51f", display: "inline-block" }} />
                Full-stack developer • frontend engineer • AI enthusiast
              </div>

              <h1
                style={{
                  fontSize: "clamp(52px, 7vw, 118px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.06em",
                  fontWeight: 900,
                  color: "#f5f5f5",
                  margin: 0,
                }}
              >
                Hi, I&apos;m Teddy.
              </h1>

              <h2
                style={{
                  margin: "26px 0 18px",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: "#e7a51f",
                }}
              >
                I build Modern Web Solutions
              </h2>

              <p
                style={{
                  margin: "0 0 30px",
                  maxWidth: 540,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 18,
                  lineHeight: 1.7,
                }}
              >
                Building modern web experiences and intelligent applications with clean UI, scalable architecture, and AI-powered solutions.
              </p>

              <div className="mobile-hero-portrait">
                <img src="/images/teddy.png" alt="Teddy Mbayaki" />
              </div>

              <div className="hero-actions" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 26 }}>
                <Link
                  href="/projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "linear-gradient(135deg, #e7a51f, #b86f08)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 12,
                    padding: "16px 26px",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    boxShadow: "0 18px 30px rgba(255,77,184,0.25)",
                  }}
                >
                  <ArrowRight size={16} />
                  View Projects
                </Link>

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    borderRadius: 12,
                    padding: "16px 24px",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Contact Me
                </Link>
              </div>

            </div>

            <div className="hero-portrait-wrap" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                className="hero-portrait-frame"
                style={{
                  position: "relative",
                  width: "min(440px, 85vw)",
                  padding: "16px 16px 12px",
                  borderRadius: 28,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.32)",
                }}
              >
                <img
                  className="hero-portrait"
                  src="/images/teddy.png"
                  alt="Teddy Mbayaki"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "min(72vh, 620px)",
                    objectFit: "cover",
                    borderRadius: 24,
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 0",
          overflow: "hidden",
          background: "rgba(255,255,255,0.025)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 32,
            animation: "scroll 20s linear infinite",
            width: "max-content",
          }}
        >
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-dim)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {s}
              <span style={{ color: "var(--accent)", opacity: 0.4 }}>·</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Stats Section */}
      <section style={{ padding: "clamp(48px, 10vw, 96px) clamp(16px, 5vw, 24px)", maxWidth: 1100, margin: "0 auto", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 8vw, 56px)" }}>
          <div
            style={{
              fontSize: "clamp(10px, 2vw, 12px)",
              fontWeight: 600,
              letterSpacing: 2,
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 8,
              animation: "fadeUp 0.8s ease forwards",
            }}
          >
            Proven Results
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "var(--text)",
              animation: "fadeUp 0.8s ease forwards 0.1s both",
            }}
          >
            Project Metrics & Delivery
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          <div
            style={{
              padding: "36px 28px",
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              animation: "fadeUp 0.8s ease forwards 0.1s",
            }}
          >
            <div
              style={{
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 800,
                color: "var(--accent)",
                marginBottom: 8,
                fontVariantNumeric: "tabular-nums",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              98%
            </div>
            <h3 style={{ fontSize: "clamp(16px, 3vw, 18px)", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
              Success Rate
            </h3>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Across all completed projects, 98% have been delivered on time and within scope. This reflects a consistent focus on clear communication, realistic timelines, and iterative feedback so that what we build matches what you need. The rare exceptions are always documented and followed by a resolution plan.
            </p>
          </div>

          <div
            style={{
              padding: "36px 28px",
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              animation: "fadeUp 0.8s ease forwards 0.2s",
            }}
          >
            <div
              style={{
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 800,
                color: "var(--accent)",
                marginBottom: 8,
                fontVariantNumeric: "tabular-nums",
                animation: "float 3s ease-in-out infinite 0.1s",
              }}
            >
              10
            </div>
            <h3 style={{ fontSize: "clamp(16px, 3vw, 18px)", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
              Total Projects
            </h3>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              10 projects have been delivered to date, ranging from MVPs and mobile apps to web platforms and backend systems. Each project is treated as a product: we define goals, milestones, and success metrics early so progress is measurable and aligned with your business objectives.
            </p>
          </div>

          <div
            style={{
              padding: "36px 28px",
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              animation: "fadeUp 0.8s ease forwards 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 800,
                color: "var(--accent)",
                marginBottom: 8,
                fontVariantNumeric: "tabular-nums",
                animation: "float 3s ease-in-out infinite 0.2s",
              }}
            >
              Flexible
            </div>
            <h3 style={{ fontSize: "clamp(16px, 3vw, 18px)", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
              Delivery Approach
            </h3>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Every project follows a clear process from discovery through development and testing. Delivery is planned around the scope, complexity, and priorities we agree on together.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: "clamp(48px, 10vw, 96px) clamp(16px, 5vw, 24px)", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(32px, 8vw, 48px)",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: 600,
                letterSpacing: 2,
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 8,
                animation: "fadeUp 0.8s ease forwards",
              }}
            >
              Selected Work
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "var(--text)",
                animation: "fadeUp 0.8s ease forwards 0.1s both",
              }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "clamp(12px, 2vw, 14px)",
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              animation: "fadeUp 0.8s ease forwards 0.2s both",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          padding: "clamp(48px, 10vw, 96px) clamp(16px, 5vw, 24px)",
          background: "rgba(255,255,255,0.025)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(32px, 8vw, 56px)" }}>
            <div
              style={{
                fontSize: "clamp(10px, 2vw, 12px)",
                fontWeight: 600,
                letterSpacing: 2,
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: 8,
                animation: "fadeUp 0.8s ease forwards",
              }}
            >
              What I Do
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                color: "var(--text)",
                animation: "fadeUp 0.8s ease forwards 0.1s both",
              }}
            >
              Services
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "clamp(16px, 4vw, 20px)",
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="fade-in"
                style={{
                  padding: "clamp(20px, 4vw, 28px) clamp(18px, 4vw, 24px)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.035)",
                  animation: `fadeUp 0.8s ease forwards ${0.1 + i * 0.1}s`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(255,77,184,0.12)",
                    color: "#ff7ccd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--text)",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Trust Banner */}
      <section
        style={{
          padding: "64px 24px",
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 2,
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Trusted by founders worldwide
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(24px, 6vw, 64px)",
              flexWrap: "wrap",
            }}
          >
            {["United States", "United Kingdom", "Australia", "Canada"].map((country) => (
              <span
                key={country}
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: "-0.5px",
                }}
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 24px" }}>
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              marginBottom: 16,
              color: "var(--text)",
            }}
          >
            Have a project in mind?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              marginBottom: 36,
              lineHeight: 1.7,
            }}
          >
            I&apos;m open to freelance projects, full-time roles, and collaborations.
            Let&apos;s build something great together.
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
            Let&apos;s talk now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
