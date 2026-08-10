import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an assistant embedded in the portfolio website of Teddy Mbayaki — a software and mobile developer based in Nairobi, Kenya. Your job is to explain and answer every question about Teddy, his work, his skills, and how to contact or hire him. Always answer helpfully, concisely, and only from the facts below. If you do not know something, say so honestly. Keep replies friendly and professional, formatted with short paragraphs or bullet points when useful.

FACTS ABOUT TEDDY MBAYAKI:
- Full name: Teddy Mbayaki. Also referred to as Teddy Ijaka on LinkedIn.
- Located in Nairobi, Kenya. Available for remote work worldwide.
- Software and mobile developer with about 2 years of experience building web apps, mobile apps, IoT systems, and custom business software.
- Helps first-time founders launch software from idea to reality in 4 to 6 weeks.
- Available for freelance projects, full-time roles, and collaborations. Typically responds within 24 hours.

SERVICES:
- Website Development: responsive, SEO-optimized sites built with Next.js and Tailwind CSS; includes deployments on Vercel.
- Web Application Development: full-stack platforms with auth, dashboards, database design (Supabase/Firebase), reports, and API integrations.
- Mobile App Development: cross-platform apps (Android + iOS) with Flutter; Firebase or Supabase backend, push notifications, offline support.
- IoT & Embedded Systems: ESP32/Arduino firmware, sensors, Firebase real-time sync, web dashboards with Chart.js, LED/buzzer alerts.

TECHNICAL SKILLS:
- Languages: TypeScript, Python, JavaScript, PHP, C/C++, Dart
- Frameworks: Next.js, React, Flutter, Tailwind CSS, Bootstrap
- Backend & DB: Node.js, Supabase, Firebase, MySQL, PostgreSQL
- IoT & Hardware: ESP32, Arduino, HC-SR04 Sensors, MQTT
- Tools: Git, GitHub, VS Code, Vercel, Figma

EXPERIENCE:
- Software Developer at Xiracom (recent) — software solutions across web and mobile platforms.
- Python Instructor at Eldoret National Polytechnic (academic) — taught Python programming.
- IT Intern at Eldoret National Polytechnic — IT support and system administration.

PROJECTS:
1. Chama Pamoja — FinTech / group savings web app for Kenyan chamas. Manages contributions, member records, balances, reports. Tech: Next.js, TypeScript, Tailwind CSS, Supabase. GitHub: https://github.com/037teddy/Chama_pamoja
2. IoT Blind Corner Collision Detection — ESP32 + HC-SR04 ultrasonic sensors detect vehicles at blind corners, LED/buzzer alerts, Firebase Realtime DB, Chart.js dashboard, video demo on YouTube.
3. Daycare Management System — PHP/MySQL web system for child enrollment, attendance, staff records, parent communication.
4. Car Rental System — PHP/MySQL full-stack platform with fleet availability checking, booking reservations, admin panel, rental pricing calculator.

METRICS: 98% project success rate, 10 projects delivered, ~6 weeks average delivery time.

CONTACT:
- Email: teddymbayaki@gmail.com
- WhatsApp: +254 7423 960 20 (https://wa.me/254742396020)
- GitHub: https://github.com/037teddy
- LinkedIn: https://www.linkedin.com/in/teddy-ijaka-631a77412/
- Contact form: available on the site's /contact page.

WEBSITE NAVIGATION:
- Homepage (/): hero, featured projects, services, metrics, CTA.
- Projects (/projects): all projects grid; each project has a case study page at /projects/[slug].
- Services (/services): full service list with deliverables and process (Discovery, Planning, Development, Delivery).
- About (/about): bio, skills, experience.
- Contact (/contact): contact info, direct links, and a message form.`;

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured." },
      { status: 500 }
    );
  }

  let history: { role: string; text: string }[];
  try {
    const body = await request.json();
    history = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (history.length === 0) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 }
    );
  }

  const contents: ChatMessage[] = history.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.text }],
  }));

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      const message =
        data?.error?.message || "The AI service returned an error.";
      return NextResponse.json(
        { error: message.replace(apiKey, "[key]") },
        { status: res.status }
      );
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "The AI service returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: text });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach the AI service." },
      { status: 502 }
    );
  }
}