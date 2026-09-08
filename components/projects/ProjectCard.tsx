"use client";

import Link from "next/link";
import { ArrowRight, GitBranch, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="slide-up"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 18px 40px rgba(0, 0, 0, 0.18)",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "rgba(255, 77, 184, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div style={{ height: "clamp(150px, 40vw, 210px)", background: "rgba(255,255,255,0.02)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease" }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1.06)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        ) : (
          <>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,77,184,0.15), rgba(124,58,237,0.12))" }} />
            <span style={{ fontSize: 50, position: "relative", zIndex: 1, animation: "float 3s ease-in-out infinite" }}>
              {project.category.includes("IoT") ? "⚡" : project.category.includes("FinTech") ? "💰" : project.category.includes("Mobile") ? "📱" : "🖥️"}
            </span>
          </>
        )}
        {project.slug === "iot-blind-corner-detection" && (
          <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(15, 23, 42, 0.8)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "5px 8px", borderRadius: 8, display: "flex", alignItems: "center", gap: 4, zIndex: 2 }}>
            🎬 Video Demo
          </div>
        )}
      </div>

      <div style={{ padding: "20px 20px 22px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", padding: "4px 10px", borderRadius: 999, background: "rgba(231, 165, 31, 0.12)", color: "#f3c45e", border: "1px solid rgba(231, 165, 31, 0.24)" }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8, color: "#f5f5f5" }}>{project.title}</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: 18, flexGrow: 1 }}>{project.shortDescription}</p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} style={{ fontSize: 11, padding: "4px 8px", borderRadius: 8, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span style={{ fontSize: 11, padding: "4px 8px", borderRadius: 8, background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link href={`/projects/${project.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 16px", borderRadius: 10, background: "linear-gradient(135deg, #e7a51f, #b86f08)", color: "#1a1007", fontSize: 13, fontWeight: 800, textDecoration: "none", flexGrow: 1 }}>
            View Case Study <ArrowRight size={14} />
          </Link>

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "rgba(255,255,255,0.04)" }} aria-label={`Open GitHub for ${project.title}`}>
              <GitBranch size={15} />
            </a>
          )}

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "rgba(255,255,255,0.04)" }} aria-label={`Open live project ${project.title}`}>
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
