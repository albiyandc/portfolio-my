import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Link from "next/link";
import StarTrail from "../components/StarTrail";
import ProjectNav from "./ProjectNav";
import ProjectVisual from "./ProjectVisual";
import { projectData } from "./project-data";

export const metadata: Metadata = {
  title: "Proyek | Albiyan Dikha Chandra",
  description: "Proyek pilihan Albiyan Dikha Chandra dalam pengembangan web dan sistem informasi.",
};

export default function ProjectsPage() {
  return (
    <>
      <StarTrail />
      <div className="project-shell">
        <ProjectNav />
        <main>
          <section className="project-index-hero">
            <span className="project-kicker">Selected work / 04</span>
            <h1>Web, mobile, and information systems.</h1>
            <p>
              Empat karya yang saya kerjakan dari alur layanan publik sampai
              pelacakan operasional.
            </p>
          </section>

          <section className="project-catalog" aria-label="Daftar proyek">
            {projectData.map((project, index) => {
              const card = (
                <>
                  <div className="catalog-number">0{index + 1}</div>
                  <ProjectVisual
                    slug={project.slug}
                    name={project.name}
                    category={project.category}
                    platform={project.platform}
                    src={project.cover}
                  />
                  <div className="catalog-copy">
                    <div className="catalog-meta">
                      <span>{project.category}</span>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.summary}</p>
                    <div className="catalog-stack">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  {project.detailAvailable && (
                    <span className="catalog-arrow" aria-hidden="true">
                      <ArrowUpRightIcon size={21} weight="regular" />
                    </span>
                  )}
                </>
              );

              return project.detailAvailable ? (
                <Link
                  href={`/project/${project.slug}`}
                  className="catalog-card"
                  key={project.slug}
                >
                  {card}
                </Link>
              ) : (
                <article className="catalog-card catalog-card-static" key={project.slug}>
                  {card}
                </article>
              );
            })}
          </section>
        </main>
        <footer className="project-footer">© 2026 Albiyan Dikha Chandra</footer>
      </div>
    </>
  );
}
