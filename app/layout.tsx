import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "Teddy Mbayaki | Software & Mobile Developer",
  description:
    "Software and mobile developer based in Nairobi, Kenya. Building web apps, mobile apps, IoT systems, and custom software solutions.",
  keywords: [
    "software developer Kenya",
    "mobile app developer Nairobi",
    "web developer Kenya",
    "Next.js developer",
  ],
  openGraph: {
    title: "Teddy Mbayaki | Software & Mobile Developer",
    description:
      "Software and mobile developer based in Nairobi, Kenya. Building web apps, mobile apps, IoT systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body style={{ backgroundColor: "#ffffff" }}>
        <Navbar />
        <main style={{ paddingTop: 64, backgroundColor: "#ffffff", minHeight: "100vh" }}>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
