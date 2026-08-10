import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GitBranch, ExternalLink, CheckCircle2 } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Teddy Mbayaki`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 96px" }}>
      {/* Back */}
      <Link
        href="/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 14,
          color: "var(--text-muted)",
          textDecoration: "none",
          marginBottom: 40,
        }}
      >
        <ArrowLeft size={14} /> All Projects
      </Link>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.5,
              padding: "4px 12px",
              borderRadius: 100,
              background: "rgba(108,99,255,0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(108,99,255,0.2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-1.5px",
          marginBottom: 16,
          color: "var(--text)",
        }}
      >
        {project.title}
      </h1>

      <p
        style={{
          fontSize: 18,
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: 36,
          maxWidth: 640,
        }}
      >
        {project.shortDescription}
      </p>

      {/* Links */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <GitBranch size={15} /> GitHub Repository
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>

      {/* Cover media area */}
      {project.slug === "iot-blind-corner-detection" ? (
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
            marginBottom: 56,
            background: "#000",
            aspectRatio: "16/9",
            maxHeight: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/A_sH3e5ilWw"
            title="IoT Blind Corner Collision Detection"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              maxHeight: 480,
              display: "block",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            height: "clamp(240px, 50vh, 480px)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
            marginBottom: 56,
            background: "var(--surface-2)",
          }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Overview */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16, color: "var(--text)" }}>
          Project Overview
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
          {project.fullDescription}
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 48,
        }}
      >
        {/* Problem */}
        <div
          style={{
            padding: "24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            background: "var(--surface)",
          }}
        >
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
            Problem
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div
          style={{
            padding: "24px",
            border: "1px solid rgba(0,212,170,0.2)",
            borderRadius: 12,
            background: "rgba(0,212,170,0.04)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "var(--accent-2)",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Solution
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
            {project.solution}
          </p>
        </div>
      </div>

      {/* Features */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 20, color: "var(--text)" }}>
          Key Features
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
          {project.features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                padding: "14px 16px",
                border: "1px solid var(--border)",
                borderRadius: 10,
                background: "var(--surface)",
              }}
            >
              <CheckCircle2 size={16} style={{ color: "var(--accent-2)", marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 20, color: "var(--text)" }}>
          Technology Stack
        </h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-muted)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges & Lessons */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 64,
        }}
      >
        <section
          style={{
            padding: "24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            background: "var(--surface)",
          }}
        >
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
            Challenges
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {project.challenges.map((c, i) => (
              <li
                key={i}
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  paddingBottom: 10,
                  marginBottom: 10,
                  borderBottom: i < project.challenges.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section
          style={{
            padding: "24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            background: "var(--surface)",
          }}
        >
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: "var(--text)" }}>
            Lessons Learned
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {project.lessons.map((l, i) => (
              <li
                key={i}
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  paddingBottom: 10,
                  marginBottom: 10,
                  borderBottom: i < project.lessons.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {l}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* CTA */}
      <div
        style={{
          padding: "40px",
          borderRadius: 16,
          border: "1px solid rgba(108,99,255,0.2)",
          background: "rgba(108,99,255,0.06)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: 10,
            color: "var(--text)",
          }}
        >
          Need something similar?
        </h3>
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 24 }}>
          I design and build systems like this — from web and mobile apps to IoT dashboards.
          Let&apos;s talk about your project.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 28px",
            borderRadius: 8,
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
          }}
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
}
