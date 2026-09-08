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
    <div style={{ background: "linear-gradient(180deg, #110b06 0%, #1f1309 100%)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px, 9vw, 96px) clamp(16px, 5vw, 24px) clamp(64px, 10vw, 96px)" }}>
        <div className="slide-up" style={{ marginBottom: "clamp(32px, 8vw, 56px)", maxWidth: 680 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "8px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f3c45e", border: "1px solid rgba(231, 165, 31, 0.45)", background: "rgba(231, 165, 31, 0.08)", marginBottom: 18 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#e7a51f", display: "inline-block" }} />
            Portfolio
          </div>
          <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.96, margin: "0 0 16px", color: "#f5f5f5" }}>
            Projects
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.76)", lineHeight: 1.7, margin: 0 }}>
            A selection of software projects spanning web apps, mobile applications, IoT systems, and custom business tools.
          </p>
        </div>

        <div className="slide-up" style={{ marginBottom: 18 }}>
          <h2 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
            Featured Work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>

        {others.length > 0 && (
          <div className="slide-up" style={{ marginTop: "clamp(32px, 8vw, 60px)" }}>
            <h2 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
              Other Projects
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
