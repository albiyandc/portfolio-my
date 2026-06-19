import type { Metadata } from "next";
import Link from "next/link";
import StarTrail from "../components/StarTrail";
import ProjectNav from "./ProjectNav";
import ProjectVisual from "./ProjectVisual";
import { projectData } from "./project-data";

export const metadata: Metadata = {
  title: "Projects — Albiyan Dikha Chandra",
  description: "Project pilihan Albiyan Dikha Chandra dalam web development dan sistem informasi.",
};

export default function ProjectsPage() {
  return (
    <>
      <StarTrail />
      <div className="project-shell">
        <ProjectNav />
        <main>
          <section className="project-index-hero">
            <span className="project-kicker">Selected projects / 02</span>
            <h1>Sistem digital yang tumbuh dari masalah nyata.</h1>
            <p>
              Pilihan project web development, kolaborasi tim, dan eksplorasi
              proses bisnis yang saya kerjakan.
            </p>
          </section>

          <section className="project-catalog" aria-label="Daftar project">
            {projectData.map((project, index) => (
              <Link
                href={`/project/${project.slug}`}
                className="catalog-card"
                key={project.slug}
              >
                <div className="catalog-number">0{index + 1}</div>
                <ProjectVisual
                  slug={project.slug}
                  name={project.name}
                  src={project.cover}
                />
                <div className="catalog-copy">
                  <div className="catalog-meta">
                    <span>{project.category}</span>
                    <span>{project.status}</span>
                  </div>
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                  <div className="catalog-stack">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <span className="catalog-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </section>
        </main>
        <footer className="project-footer">© 2026 Albiyan Dikha Chandra</footer>
      </div>
    </>
  );
}
