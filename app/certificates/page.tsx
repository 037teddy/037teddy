import type { Metadata } from "next";
import { ExternalLink, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates | Teddy Mbayaki",
  description: "Professional certificates earned by Teddy Mbayaki.",
};

const certificates = [
  {
    title: "AI Fluency",
    issuer: "FlyRank AI",
    date: "Issued September 2026",
    image: "/images/certificates/ai-fluency.jpg",
    id: "FR-D11-D74C7-95815",
    description: "Certificate of completion for the FlyRank AI internship program.",
    pdf: false,
  },
  {
    title: "Front-end AI Engineering",
    issuer: "FlyRank AI",
    date: "Issued August 2026",
    image: "/images/certificates/ai-engineering.jpg",
    id: "FR-D11-BEBCC-D290F",
    description: "Certificate of completion for front-end AI engineering work at FlyRank AI.",
    pdf: false,
  },
  ...[
    "certificate-2oujy9qfuxp2-1788000874.pdf",
    "certificate-4pb8x6w7vqxu-1788008324.pdf",
    "certificate-5mr292if4haq-1788000454.pdf",
    "certificate-6p7yp2hyeqo2-1788000210.pdf",
    "certificate-7qq9smwxiguj-1788001381.pdf",
    "certificate-9vnpu9arpta6-1786295538.pdf",
    "certificate-b5sweoiedcw4-1788005289.pdf",
    "certificate-c5mp3767yva8-1788033117.pdf",
    "certificate-cmzcrs4hwz32-1788007604.pdf",
    "certificate-cs26vbtw4etr-1788004933.pdf",
    "certificate-eh9qciefwbe9-1788002119.pdf",
    "certificate-g5kdwo8tf48k-1788007457.pdf",
    "certificate-kygnpup72ewi-1788001095.pdf",
    "certificate-mn9k56yeo5oe-1787998557.pdf",
    "certificate-mouvxd4dbnm6-1788007344.pdf",
    "certificate-ntba8akqb683-1788007985.pdf",
    "certificate-sf8nm5m6shy9-1787999799.pdf",
    "certificate-upwd7i7nuahw-1788001668.pdf",
    "certificate-viirnpmaivja-1788004724.pdf",
    "certificate-wo8zegh26ccf-1788026765.pdf",
  ].map((fileName, index) => ({
    title: `Professional Certificate ${String(index + 1).padStart(2, "0")}`,
    issuer: "Claude learning program",
    date: "PDF certificate",
    image: `/images/certificates/${fileName}`,
    id: fileName.replace(".pdf", ""),
    description: "Additional professional certificate uploaded as a PDF.",
    pdf: true,
  })),
];

export default function CertificatesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #110b06 0%, #1f1309 100%)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px, 9vw, 96px) clamp(16px, 5vw, 24px) 96px" }}>
        <header className="slide-up" style={{ maxWidth: 700, marginBottom: "clamp(36px, 8vw, 64px)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, padding: "8px 16px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f3c45e", border: "1px solid rgba(231,165,31,0.45)", background: "rgba(231,165,31,0.08)", marginBottom: 18 }}>
            <Award size={14} />
            Credentials
          </div>
          <h1 style={{ fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.96, color: "#fff7e8", margin: "0 0 18px" }}>
            Certificates
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7, color: "rgba(255,247,232,0.72)", margin: 0 }}>
            A selection of recent professional credentials in AI fluency and front-end AI engineering.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {certificates.map((certificate, index) => (
            <article key={certificate.title} className="slide-up interactive-card" style={{ animationDelay: `${index * 0.12}s`, overflow: "hidden", borderRadius: 20, border: "1px solid rgba(226,164,54,0.22)", background: "rgba(112,72,23,0.16)", boxShadow: "0 18px 45px rgba(0,0,0,0.2)" }}>
              <a href={certificate.image} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, minHeight: 190, background: "linear-gradient(135deg, rgba(231,165,31,0.16), rgba(17,11,6,0.5))", padding: 12, textDecoration: "none" }} aria-label={`Open ${certificate.title} certificate full size`}>
                {certificate.pdf ? <><FileText size={42} color="#e7a51f" /><span style={{ color: "#f3c45e", fontWeight: 700 }}>Open PDF</span></> : <img src={certificate.image} alt={`${certificate.title} certificate`} style={{ display: "block", width: "100%", aspectRatio: "1.5 / 1", objectFit: "cover", borderRadius: 10 }} />}
              </a>
              <div style={{ padding: "22px 22px 24px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e7a51f", marginBottom: 8 }}>{certificate.issuer}</div>
                <h2 style={{ fontSize: 22, lineHeight: 1.15, fontWeight: 800, letterSpacing: "-0.04em", color: "#fff7e8", margin: "0 0 10px" }}>{certificate.title}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,247,232,0.7)", margin: "0 0 16px" }}>{certificate.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, color: "rgba(255,247,232,0.52)", fontSize: 12 }}>
                  <span>{certificate.date}</span>
                  <a href={certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#f3c45e", textDecoration: "none", fontWeight: 700 }}><ExternalLink size={13} /> View</a>
                </div>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(226,164,54,0.16)", fontSize: 11, color: "rgba(255,247,232,0.48)" }}>Certificate ID: {certificate.id}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
