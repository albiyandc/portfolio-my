"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const profile = {
  name: "Albiyan Dikha Chandra",
  short: "ADC",
  initials: "ADC",
  status: "Available for internship",
  location: "Indonesia",
  email: "albiyandc65@gmail.com",
  whatsapp: "https://wa.me/6281220301650",
  github: "https://github.com/albiyandc",
  linkedin: "https://www.linkedin.com/in/albiyandc",
  intro:
    "Saya membangun website yang rapi, cepat, dan mudah dipakai. Fokus saya ada di frontend, backend ringan, dan pengalaman pengguna yang terasa jelas sejak halaman pertama.",
  about:
    "Portofolio ini dibuat sebagai rumah digital untuk menampilkan project, skill, dan perjalanan belajar saya. Saya percaya bahwa kode yang baik adalah kode yang bisa dibaca manusia, bukan hanya mesin.",
};

const roles = ["Web Developer", "Business Process Interest"];

const infoItems = [
  { label: "Based in", value: "Indonesia - Telkom University", icon: <SchoolIcon /> },
  { label: "Role", value: "Web Developer", icon: <WebIcon /> },
  { label: "Field", value: "Information System", icon: <DeveloperGuideIcon /> },
  { label: "Stack", value: "Next.js / Laravel", icon: <CodeXmlIcon /> },
];

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "WhatsApp", href: profile.whatsapp, Icon: WhatsAppIcon },
];

const stackCategories = [
  {
    num: "01",
    name: "Frontend",
    items: [
      { name: "JavaScript", Icon: JsIcon },
      { name: "TypeScript", Icon: TsIcon },
      { name: "Next.js", Icon: NextIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "Figma", Icon: FigmaIcon },
    ],
  },
  {
    num: "02",
    name: "Backend",
    items: [
      { name: "PHP", Icon: PhpIcon },
      { name: "Laravel", Icon: LaravelIcon },
      { name: "MySQL", Icon: MysqlIcon },
      { name: "Supabase", Icon: SupabaseIcon },
    ],
  },
  {
    num: "03",
    name: "DevOps / Cloud",
    items: [
      { name: "Git", Icon: GitIcon },
      { name: "GitHub", Icon: GitHubIcon },
      { name: "Visual Studio Code", Icon: VsCodeIcon },
    ],
  },
];

const projects = [
  {
    name: "BantuBeasiswa",
    type: "Programmer",
    description:
      "Platform agregator beasiswa untuk wilayah 3T dengan pencarian berbasis wilayah dan aksesibilitas WCAG.",
    stack: ["Next.js", "React", "MySQL", "Figma", "Git/GitHub"],
    status: "Work in Progress",
    href: "/project/bantubeasiswa",
  },
  {
    name: "Trashmana",
    type: "Project Manager",
    description:
      "Sistem manajemen sampah untuk pelaporan, penjemputan, operasional bank sampah, dan marketplace daur ulang.",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Tailwind CSS", "Leaflet.js"],
    status: "Beta",
    href: "/project/trashmana",
  },
];

const experience = [
  {
    role: "Web Developer – Projek Akademik",
    company: "",
    period: "2024 - Sekarang",
    description:
      "Terlibat dalam pengembangan aplikasi web fullstack, mencakup implementasi fitur frontend dan backend. Merancang struktur database untuk mendukung alur kerja multi-user, serta berpartisipasi aktif dalam kolaborasi tim menggunakan version control dan praktik development yang terstruktur.",
  },
  {
    role: "Mahasiswa – Sistem Informasi",
    company: "Telkom University",
    period: "2023 - Sekarang",
    description:
      "Mengambil beban akademik reguler dengan fokus pada mata kuliah praktis di bidang web development dan business process. Aktif mengikuti pembelajaran berbasis proyek dan studi kasus real-world untuk memperdalam pemahaman tentang pengembangan sistem informasi modern.",
  },
];

const education = [
  {
    title: "Software Development",
    place: "Self-directed Learning",
    period: "Ongoing",
  },
  {
    title: "Web Fundamentals",
    place: "Practice-based Projects",
    period: "Completed",
  },
];

const certifications = [
  "Responsive Web Design",
  "JavaScript Fundamentals",
  "Git & GitHub Workflow",
];

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

function useNameScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number>(0);

  const play = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    cancelAnimationFrame(raf.current);

    let frame = 0;
    const totalFrames = 14;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);

      if (progress >= 1) {
        setDisplay(text);
        return;
      }

      setDisplay(
        Array.from(text, (char, index) => {
          if (char === " ") return " ";

          const revealPoint = index / text.length;
          return progress > revealPoint
            ? char
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join(""),
      );

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return { display, play };
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.47 14.84L2 22l5.3-1.52A9.96 9.96 0 1 0 12.04 2Zm0 17.96a8 8 0 0 1-4.08-1.12l-.3-.18-3.15.9.92-3.06-.2-.32a7.86 7.86 0 1 1 6.81 3.78Zm4.38-5.9c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19a7.22 7.22 0 0 1-1.34-1.67c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z" />
    </svg>
  );
}

function DeveloperGuideIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z" />
    </svg>
  );
}

function CodeXmlIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M240-280 40-480l200-200 56 56-143 144 143 144-56 56Zm178 132-76-24 200-640 76 24-200 640Zm302-132-56-56 143-144-143-144 56-56 200 200-200 200Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3v18h18V3H3zm11.525 14.29c-.067.818-.622 1.536-1.745 1.536-1.236 0-1.892-.619-2.036-1.5h1.422c.072.382.382.618.664.618.32 0 .588-.173.588-.636 0-.853-2.427-.672-2.427-2.709 0-.98.747-1.709 1.956-1.709 1.156 0 1.763.536 1.882 1.345h-1.373c-.073-.345-.29-.536-.573-.536-.264 0-.473.145-.473.49 0 .737 2.427.564 2.427 2.655v.445zm4.475-.027c0 1.091-.673 1.564-1.636 1.564-.818 0-1.427-.373-1.627-1.073h1.345c.091.31.328.445.546.445.282 0 .464-.173.464-.536V12.7h1.445l-.437 4.563z"/>
    </svg>
  );
}

function TsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3v18h18V3H3zm11.235 12.012h-2.18v4.616h-1.488v-4.616H8.384v-1.282h5.85v1.282zm4.381 2.227c0 1.091-.673 1.564-1.636 1.564-.818 0-1.427-.373-1.627-1.073h1.345c.091.31.328.445.546.445.282 0 .464-.173.464-.536V12.7h1.445l-.437 4.563z"/>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-1.5v-7H11l4.25 5.5V9.5H16.5v7H15l-4-5.2v4.7z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.209 0 4-1.791 4-4V12H8c-2.209 0-4 1.791-4 4s1.791 4 4 4zm0-12h4V4H8C5.791 4 4 5.791 4 8s1.791 4 4 4zm8-8c-2.209 0-4 1.791-4 4v4h4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-4 8h4c2.209 0 4-1.791 4-4s-1.791-4-4-4h-4v8zm0 4c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4h-4v8z" />
    </svg>
  );
}

function PhpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.35H12v-2.7h1.65c.75 0 1.35.6 1.35 1.35s-.6 1.35-1.35 1.35zm-4.8 0H7.5v-7h2.85c.78 0 1.4.62 1.4 1.4v4.2c0 .78-.62 1.4-1.4 1.4zm6.65-4.2h-1.5v-2.8h1.5c.77 0 1.4.63 1.4 1.4s-.63 1.4-1.4 1.4z" />
    </svg>
  );
}

function LaravelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.4 4.5l6.3-3.6 6.3 3.6v7.2l-6.3 3.6-6.3-3.6V4.5zm6.3-1.8L7.2 5.4v5.4l4.5 2.6 4.5-2.6V5.4L11.7 2.7zm0 18.6l-6.3-3.6v-2.7l1.8 1v1.7l4.5 2.6 4.5-2.6v-7.2l-1.8-1v2l-2.7-1.5 2.7-1.5v-2.7l6.3 3.6v7.2l-6.3 3.6z" />
    </svg>
  );
}

function MysqlIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8.5v-4h2.5c1.1 0 2 .9 2 2s-.9 2-2 2zm5-1.5c0 1.1-.9 2-2 2h-2.5v-5.5H14c1.1 0 2 .9 2 2v1.5z" />
    </svg>
  );
}

function SupabaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.362 11.104H12.73v9.543c0 .878.966 1.411 1.706.942l7.737-4.9c.74-.47 1.037-1.42 6.68-2.22l-1.479-3.365zM2.638 12.896H11.27V3.353c0-.878-.966-1.411-1.706-.942l-7.737 4.9c-.74.47-1.037 1.42-.668 2.22l1.479 3.365z" />
    </svg>
  );
}

function RestIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M12 2v9M8 5h8" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 15V9a4 4 0 0 0-4-4H9" />
      <path d="M6 9v6" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 17.5L16.5 12l5.5-5.5L16.5 2 9 9.5 4.5 6 2 8.5l4.5 4.5L2 17.5l2.5 2.5 4.5-3.5 7.5 7.5 5.5-4.5z" />
    </svg>
  );
}

function WaitingClockIcon() {
  return (
    <span className="waiting-clock" aria-hidden="true">
      <span className="waiting-clock-hand" />
    </span>
  );
}

function CelestialBackground() {
  const spokes = Array.from({ length: 24 }, (_, index) => index * 15);
  const markers = Array.from({ length: 8 }, (_, index) => index * 45);

  return (
    <div className="celestial-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="celestial-fade" cx="74%" cy="49%" r="62%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="58%" stopColor="white" stopOpacity="0.48" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="celestial-mask">
            <rect width="1600" height="1000" fill="url(#celestial-fade)" />
          </mask>
        </defs>

        <g mask="url(#celestial-mask)" className="celestial-orbits">
          <g className="celestial-ring celestial-ring-slow">
            {[165, 235, 315, 405, 520, 650, 790].map((radius) => (
              <circle key={radius} cx="1180" cy="500" r={radius} />
            ))}
            <circle className="orbit-dashed" cx="1180" cy="500" r="365" />
            <circle className="orbit-dashed orbit-dashed-wide" cx="1180" cy="500" r="575" />
          </g>

          <g className="celestial-spokes celestial-ring-reverse">
            {spokes.map((angle) => (
              <line
                key={angle}
                x1="1180"
                y1="355"
                x2="1180"
                y2="-350"
                transform={`rotate(${angle} 1180 500)`}
              />
            ))}
          </g>

          <g className="celestial-details celestial-ring-medium">
            {markers.map((angle) => (
              <circle
                key={angle}
                cx="1180"
                cy="95"
                r="4"
                transform={`rotate(${angle} 1180 500)`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  const { display, play } = useNameScramble(profile.name);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CelestialBackground />
      <div className="shell">
      <div className="rail rail-left" aria-hidden="true" />
      <div className="rail rail-right" aria-hidden="true" />

      <header className="navbar">
        <div className="navbar-inner">
          <a href="#top" className="brand" aria-label="Home">
            albiyandc.dev
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#top">Home</a>
            <a href="/project">Projects</a>
          </nav>
        </div>
      </header>

      <main className="page-content" id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-top">
            <div className="avatar" aria-hidden="true">
              <img src="/pp-dev.jpg" alt={profile.name} />
            </div>
            <div className="hero-identity">
              <h1
                className="hero-name"
                aria-label={profile.name}
                onMouseEnter={play}
              >
                {display}
              </h1>
              <p className="hero-role">
                <WaitingClockIcon />
                <span className="role-text">{roles[roleIndex]}</span>
              </p>
              <div className="hero-status">
                <span className="status-dot">{profile.status}</span>
              </div>
            </div>
          </div>

          <p className="hero-bio">{profile.intro}</p>

          <div className="info-grid">
            {infoItems.map((item) => (
              <div className="info-cell" key={item.label}>
                <span className="info-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="info-cell-content">
                  <span className="info-cell-label">{item.label}</span>
                  <span className="info-cell-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="social-grid">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
                {label}
              </a>
            ))}
          </div>
        </section>

        <div className="h-line" />

        <section className="section" id="about" aria-labelledby="about-h">
          <div className="section-header">
            <span className="label">Profile</span>
            <h2 className="section-title" id="about-h">
              About
            </h2>
          </div>
          <p className="about-text">{profile.about}</p>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-h">
          <div className="section-header">
            <span className="label">Tools</span>
            <h2 className="section-title" id="stack-h">
              Stack
            </h2>
          </div>
          <div className="stack-grid">
            {stackCategories.map((cat) => (
              <div className="stack-row" key={cat.name}>
                <div className="stack-category-col">
                  <span className="stack-category-num">{cat.num}</span>
                  <span className="stack-category-name">{cat.name}</span>
                </div>
                <div className="stack-items-col">
                  {cat.items.map((item) => (
                    <span className="stack-tag" key={item.name}>
                      <item.Icon />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-h">
          <div className="section-header">
            <span className="label">Selected Work</span>
            <h2 className="section-title" id="projects-h">
              Projects
            </h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a key={project.name} href={project.href} className="project-item">
                <div>
                  <p className="project-name">{project.name}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    <span className="project-tag">{project.type}</span>
                    <span className="project-tag project-status">
                      {project.status}
                    </span>
                    {project.stack.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">
                  <ArrowUpRightIcon />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-labelledby="experience-h"
        >
          <div className="section-header">
            <span className="label">Timeline</span>
            <h2 className="section-title" id="experience-h">
              Experience
            </h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <p className="timeline-role">{item.role}</p>
                <p className="timeline-period">{item.period}</p>
                {item.company && (
                  <p className="timeline-company">{item.company}</p>
                )}
                <p className="timeline-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="education-h">
          <div className="section-header">
            <span className="label">Background</span>
            <h2 className="section-title" id="education-h">
              Education & Certifications
            </h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <div className="edu-item" key={item.title}>
                <p className="edu-title">{item.title}</p>
                <p className="edu-meta">
                  {item.place} / {item.period}
                </p>
              </div>
            ))}
          </div>
          <div className="cert-list">
            {certifications.map((certification) => (
              <span className="cert-tag" key={certification}>
                {certification}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-h">
          <div className="section-header">
            <span className="label">Get in Touch</span>
            <h2 className="section-title" id="contact-h">
              Contact
            </h2>
          </div>
          <div className="contact-block">
            <div className="contact-text">
              <p className="contact-cta">Mari berkolaborasi.</p>
              Kalau kamu ingin bekerja sama, diskusi project, atau sekadar
              menyapa, pintu selalu terbuka.
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn primary">
                <MailIcon />
                Kirim Email
              </a>
              <a
                href={profile.whatsapp}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href={profile.linkedin}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          Copyright {new Date().getFullYear()} Albiyan Dikha Chandra / Built
          with Next.js
        </span>
      </footer>
      </div>
    </>
  );
}
