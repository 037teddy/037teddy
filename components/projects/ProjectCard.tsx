"use client";

import Link from "next/link";
import { ArrowRight, GitBranch, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="fade-in hover:shadow-lg transition-all duration-300"
      style={{
        background: "#ffffff",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.08)";
      }}
    >
      {/* Cover image area */}
      <div
        style={{
          height: "clamp(150px, 40vw, 200px)",
          background: "var(--surface-2)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        ) : (
          <>
            {/* Placeholder gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,170,0.1) 100%)",
              }}
            />
            <span
              style={{
                fontSize: 48,
                position: "relative",
                zIndex: 1,
                animation: "float 3s ease-in-out infinite",
              }}
            >
              {project.category.includes("IoT")
                ? "⚡"
                : project.category.includes("FinTech")
                ? "💰"
                : project.category.includes("Mobile")
                ? "📱"
                : "🖥️"}
            </span>
          </>
        )}
        {project.slug === "iot-blind-corner-detection" && (
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              background: "rgba(15, 23, 42, 0.8)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              padding: "4px 8px",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: 4,
              zIndex: 2,
            }}
          >
            🎬 Video Demo
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px 24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                padding: "3px 10px",
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

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            marginBottom: 8,
            color: "var(--text)",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: 20,
            flexGrow: 1,
          }}
        >
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 6,
                background: "var(--surface-2)",
                color: "var(--text-dim)",
                border: "1px solid var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span
              style={{
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 6,
                background: "var(--surface-2)",
                color: "var(--text-dim)",
                border: "1px solid var(--border)",
              }}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link
            href={`/projects/${project.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            View Case Study <ArrowRight size={14} />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              <GitBranch size={15} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
