import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects | Teddy Mbayaki",
  description: "Software projects by Teddy Mbayaki — web apps, mobile apps, IoT systems, and business tools.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div style={{ marginBottom: "clamp(32px, 8vw, 56px)" }}>
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
          Portfolio
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
          Projects
        </h1>
        <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.6 }}>
          A selection of software projects spanning web apps, mobile applications,
          IoT systems, and custom business tools.
        </p>
      </div>

      {/* Featured */}
      <div style={{ marginBottom: 16 }}>
        <h2
          style={{
            fontSize: "clamp(11px, 2vw, 13px)",
            fontWeight: 600,
            letterSpacing: 1.5,
            color: "var(--text-dim)",
            textTransform: "uppercase",
            marginBottom: "clamp(16px, 4vw, 24px)",
          }}
        >
          Featured Work
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "clamp(16px, 4vw, 24px)",
          }}
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <div style={{ marginTop: "clamp(40px, 8vw, 64px)" }}>
          <h2
            style={{
              fontSize: "clamp(11px, 2vw, 13px)",
              fontWeight: 600,
              letterSpacing: 1.5,
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: "clamp(16px, 4vw, 24px)",
            }}
          >
            Other Projects
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "clamp(16px, 4vw, 24px)",
            }}
          >
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
