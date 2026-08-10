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
      {/* Hero */}
      <section
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="md:col-span-7 slide-in-left" style={{ position: "relative", minWidth: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 100,
                border: "1px solid var(--border)",
                background: "rgba(108,99,255,0.08)",
                fontSize: "clamp(11px, 2vw, 13px)",
                color: "var(--accent)",
                fontWeight: 500,
                marginBottom: "clamp(16px, 4vw, 28px)",
                animation: "fadeUp 0.8s ease forwards",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent-2)",
                  display: "inline-block",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              Available for projects · Nairobi, Kenya
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 6vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-1px",
                lineHeight: 1.2,
                marginBottom: "clamp(16px, 4vw, 20px)",
                color: "var(--text)",
                animation: "fadeUp 0.8s ease forwards 0.1s both",
              }}
            >
              Hi, I&apos;m Teddy.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 6s ease infinite",
                  backgroundSize: "200% 200%",
                }}
              >
                I build software
              </span>{" "}
              that solves real problems.
            </h1>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "clamp(24px, 5vw, 36px)",
                maxWidth: 560,
                animation: "fadeUp 0.8s ease forwards 0.2s both",
              }}
            >
              Software and mobile developer with 2 years of experience. I help first-time founders launch software from the idea stage to reality in 4 to 6 weeks, so they can focus on their customers. Based in Nairobi, working with clients worldwide.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                width: "100%",
                animation: "fadeUp 0.8s ease forwards 0.3s both",
              }}
            >
              <Link
                href="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px clamp(16px, 4vw, 28px)",
                  borderRadius: 10,
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  textDecoration: "none",
                  minHeight: 44,
                  flex: "1 1 auto",
                  minWidth: 140,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(79, 70, 229, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                View My Work <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px clamp(16px, 4vw, 28px)",
                  borderRadius: 10,
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text)",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  textDecoration: "none",
                  minHeight: 44,
                  flex: "1 1 auto",
                  minWidth: 140,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.backgroundColor = "rgba(79, 70, 229, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:col-span-5 flex justify-center">
            <div style={{ position: "relative" }} className="group">
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: 24,
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  opacity: 0.15,
                  filter: "blur(8px)",
                  transition: "opacity 0.3s ease",
                }}
                className="group-hover:opacity-25"
              />
              <img
                src="/images/teddy.jpg"
                alt="Teddy Mbayaki"
                style={{
                  width: 320,
                  height: 380,
                  objectFit: "cover",
                  borderRadius: 20,
                  border: "4px solid var(--surface)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                  position: "relative",
                  zIndex: 1,
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                className="group-hover:scale-[1.02] group-hover:border-[var(--accent)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills ticker */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 0",
          overflow: "hidden",
          background: "#ffffff",
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
              6 Wks
            </div>
            <h3 style={{ fontSize: "clamp(16px, 3vw, 18px)", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
              Avg. Delivery Time
            </h3>
            <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Most projects move from kickoff to a shippable first version in about six weeks. This includes discovery, design decisions, development, and testing. Timeline depends on scope and complexity; we lock in a delivery window after the initial scoping so you can plan launches and marketing around a clear date.
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
          background: "#ffffff",
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
                  background: "#ffffff",
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
          background: "var(--surface)",
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
