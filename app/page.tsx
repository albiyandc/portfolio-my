import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { AtomIcon } from "@phosphor-icons/react/dist/ssr/Atom";
import { BracketsCurlyIcon } from "@phosphor-icons/react/dist/ssr/BracketsCurly";
import { BrowserIcon } from "@phosphor-icons/react/dist/ssr/Browser";
import { CodeIcon } from "@phosphor-icons/react/dist/ssr/Code";
import { DatabaseIcon } from "@phosphor-icons/react/dist/ssr/Database";
import { DeviceMobileIcon } from "@phosphor-icons/react/dist/ssr/DeviceMobile";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { FigmaLogoIcon } from "@phosphor-icons/react/dist/ssr/FigmaLogo";
import { FileCodeIcon } from "@phosphor-icons/react/dist/ssr/FileCode";
import { FileHtmlIcon } from "@phosphor-icons/react/dist/ssr/FileHtml";
import { FileJsIcon } from "@phosphor-icons/react/dist/ssr/FileJs";
import { FileTsIcon } from "@phosphor-icons/react/dist/ssr/FileTs";
import { FlowArrowIcon } from "@phosphor-icons/react/dist/ssr/FlowArrow";
import { GitBranchIcon } from "@phosphor-icons/react/dist/ssr/GitBranch";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import { PenNibIcon } from "@phosphor-icons/react/dist/ssr/PenNib";
import { PlugsConnectedIcon } from "@phosphor-icons/react/dist/ssr/PlugsConnected";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { StackIcon } from "@phosphor-icons/react/dist/ssr/Stack";
import { TreeStructureIcon } from "@phosphor-icons/react/dist/ssr/TreeStructure";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { WindIcon } from "@phosphor-icons/react/dist/ssr/Wind";
import NameScramble from "./components/NameScramble";

const profile = {
  name: "Albiyan Dikha Chandra",
  short: "ADC",
  initials: "ADC",
  role: "Full-Stack Web Developer",
  locationLabel: "Based in Bandung",
  location: "Bandung",
  email: "albiyandc65@gmail.com",
  whatsapp: "https://wa.me/6281220301650",
  github: "https://github.com/albiyandc",
  linkedin: "https://www.linkedin.com/in/albiyandc",
  portfolio: "https://albiyandc.vercel.app",
  intro:
    "Saya merancang dan membangun aplikasi web full-stack serta sistem informasi. Fokus saya ada pada alur pengguna, struktur data, dan implementasi fitur yang dapat ditelusuri.",
  about:
    "Saya mahasiswa S1 Sistem Informasi di Telkom University yang berfokus pada pengembangan web full-stack dan perancangan sistem. Saya memakai Next.js, React, Laravel, PHP, MySQL, serta Git dan GitHub untuk menerjemahkan kebutuhan pengguna dan proses bisnis menjadi aplikasi yang dapat digunakan.",
};

const infoItems = [
  { label: "Based in", value: profile.location, icon: <MapPinIcon size={15} weight="duotone" /> },
  { label: "Role", value: profile.role, icon: <CodeIcon size={15} weight="duotone" /> },
  { label: "Focus", value: "Web Apps and System Design", icon: <FlowArrowIcon size={15} weight="duotone" /> },
  { label: "Stack", value: "Next.js and Laravel", icon: <StackIcon size={15} weight="duotone" /> },
];

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubLogoIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinLogoIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: EnvelopeSimpleIcon },
  { label: "WhatsApp", href: profile.whatsapp, Icon: WhatsappLogoIcon },
];

const stackCategories = [
  {
    num: "01",
    name: "Web Development",
    items: [
      { name: "JavaScript", Icon: FileJsIcon },
      { name: "TypeScript", Icon: FileTsIcon },
      { name: "PHP", Icon: FileCodeIcon },
      { name: "Laravel", Icon: BracketsCurlyIcon },
      { name: "Blade", Icon: FileHtmlIcon },
      { name: "React", Icon: AtomIcon },
      { name: "Next.js", Icon: BrowserIcon },
      { name: "Tailwind CSS", Icon: WindIcon },
    ],
  },
  {
    num: "02",
    name: "API, Database & Systems",
    items: [
      { name: "REST API", Icon: PlugsConnectedIcon },
      { name: "MySQL", Icon: DatabaseIcon },
      { name: "DB Design", Icon: TreeStructureIcon },
      { name: "RBAC", Icon: ShieldCheckIcon },
      { name: "Process Modeling", Icon: FlowArrowIcon },
    ],
  },
  {
    num: "03",
    name: "Mobile, UI & Development Tools",
    items: [
      { name: "Flutter", Icon: DeviceMobileIcon },
      { name: "Figma", Icon: FigmaLogoIcon },
      { name: "UI Prototyping", Icon: PenNibIcon },
      { name: "Git", Icon: GitBranchIcon },
      { name: "GitHub", Icon: GithubLogoIcon },
      { name: "Visual Paradigm", Icon: TreeStructureIcon },
    ],
  },
];

type HomeProject = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  href?: string;
};

const projects: HomeProject[] = [
  {
    name: "SIMAT-SIPP",
    type: "Aplikasi e-Government",
    description:
      "Sistem layanan publik dengan alur CRUD, validasi, master layanan dan instansi, persyaratan, dokumen, serta persetujuan.",
    stack: ["PHP", "Laravel", "Blade", "MySQL", "REST API"],
    href: "/project/simat-sipp",
  },
  {
    name: "SATU-RUMAH",
    type: "Aplikasi mobile",
    description:
      "Prototipe Flutter untuk tiga peran: pengembang perumahan, admin, dan pemantauan lapangan, dengan alur pengajuan, verifikasi, penugasan, pelaporan, bukti foto, serta Berita Acara berbasis peran.",
    stack: ["Flutter"],
    href: "/project/satu-rumah",
  },
  {
    name: "BantuBeasiswa",
    type: "Programmer",
    description:
      "Platform agregator beasiswa dengan pencarian berbasis wilayah.",
    stack: ["Next.js", "React", "MySQL", "Figma", "Git/GitHub"],
    href: "/project/bantubeasiswa",
  },
  {
    name: "Trashmana",
    type: "Manajer Proyek",
    description:
      "Sistem manajemen sampah untuk pelaporan, penjemputan, operasional bank sampah, dan pasar produk daur ulang.",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Leaflet.js"],
    href: "/project/trashmana",
  },
];

const experience = [
  {
    role: "Peserta Magang Aptika / Aplikasi e-Government",
    company: "Dinas Komunikasi dan Informatika Kota Tasikmalaya, Tasikmalaya",
    period: "Juli 2026 - September 2026",
    description:
      "Berkontribusi pada SIMAT melalui CRUD dan validasi layanan publik, master layanan dan instansi, persyaratan, dokumen, serta persetujuan. Merancang relasi data dan API untuk dasbor SIPP terpisah, menjadi koordinator tim lintas kampus, dan menyusun alur pengguna serta dokumentasi SATU-RUMAH.",
  },
];


function RoleMarker() {
  return <span className="role-marker" aria-hidden="true" />;
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

function ProjectCard({ project }: { project: HomeProject }) {
  const card = (
    <>
      <div>
        <p className="project-name">{project.name}</p>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          <span className="project-tag">{project.type}</span>
          {project.stack.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {project.href && (
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRightIcon size={16} weight="regular" />
        </span>
      )}
    </>
  );

  if (project.href) {
    return (
      <a href={project.href} className="project-item">
        {card}
      </a>
    );
  }

  return <article className="project-item project-item-static">{card}</article>;
}

export default function Home() {
  return (
    <>
      <CelestialBackground />
      <div className="shell">
        <div className="rail rail-left" aria-hidden="true" />
        <div className="rail rail-right" aria-hidden="true" />

        <header className="navbar">
          <div className="navbar-inner">
            <a href="#top" className="brand" aria-label="Home">
              albiyandc
            </a>
            <nav className="nav-links" aria-label="Main navigation">
              <a href="#top">Home</a>
              <a href="/project">Project</a>
            </nav>
          </div>
        </header>

        <main className="page-content" id="top">
        <section className="hero" aria-label="Perkenalan">
          <div className="hero-top">
            <div className="avatar" aria-hidden="true">
              <img src="/pp-dev.jpg" alt={profile.name} />
            </div>
            <div className="hero-identity">
              <NameScramble text={profile.name} className="hero-name" />
              <p className="hero-role">
                <RoleMarker />
                <span className="role-text">{profile.role}</span>
              </p>
              <div className="hero-status">
                <span className="status-dot">{profile.locationLabel}</span>
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
                <Icon size={15} weight="regular" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </section>

        <div className="h-line" />

        <section className="section section-about" id="about" aria-labelledby="about-h">
          <div className="section-header">
            <span className="label">Profile</span>
            <h2 className="section-title" id="about-h">
              About
            </h2>
          </div>
          <p className="about-text">{profile.about}</p>
        </section>

        <section className="section section-stack" id="stack" aria-labelledby="stack-h">
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
                      <item.Icon size={14} weight="duotone" aria-hidden="true" />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-projects" id="projects" aria-labelledby="projects-h">
          <div className="section-header">
            <span className="label">Selected Work</span>
            <h2 className="section-title" id="projects-h">
              Projects
            </h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section
          className="section section-experience"
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


        <section className="section section-contact" id="contact" aria-labelledby="contact-h">
          <div className="section-header">
            <span className="label">Get in Touch</span>
            <h2 className="section-title" id="contact-h">
              Contact
            </h2>
          </div>
          <div className="contact-block">
            <div className="contact-text">
              <p className="contact-cta">Mari bahas proyekmu.</p>
              Kirim ringkasan kebutuhan atau ajak saya berdiskusi tentang alur
              pengguna, data, dan implementasi web.
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn primary">
                <EnvelopeSimpleIcon size={15} weight="regular" aria-hidden="true" />
                Kirim email
              </a>
              <a
                href={profile.whatsapp}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogoIcon size={15} weight="regular" aria-hidden="true" />
                Buka WhatsApp
              </a>
              <a
                href={profile.linkedin}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogoIcon size={15} weight="regular" aria-hidden="true" />
                Lihat LinkedIn
              </a>
              <a
                href={profile.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogoIcon size={15} weight="regular" aria-hidden="true" />
                Lihat GitHub
              </a>
            </div>
          </div>
        </section>
        </main>

        <footer className="footer">
          <span>
            Copyright {new Date().getFullYear()} Albiyan Dikha Chandra
          </span>
        </footer>
      </div>
    </>
  );
}
