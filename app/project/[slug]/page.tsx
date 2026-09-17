import type { Metadata } from "next";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Link from "next/link";
import { notFound } from "next/navigation";
import StarTrail from "../../components/StarTrail";
import ProjectNav from "../ProjectNav";
import ProjectCarousel from "../ProjectCarousel";
import { getProject, projectData } from "../project-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectData
    .filter((project) => project.detailAvailable)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project || !project.detailAvailable) return {};
  return { title: `${project.name} | Albiyan Dikha Chandra`, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project || !project.detailAvailable) notFound();
  const detailProjects = projectData.filter((item) => item.detailAvailable);
  const currentIndex = detailProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = detailProjects[(currentIndex + 1) % detailProjects.length];
  const facts = [
    { label: "Peran", value: project.role },
  ].filter((fact) => fact.value);

  return (
    <>
      <StarTrail />
      <div className="project-shell">
        <ProjectNav />
        <main className="detail-main">
          <div className="detail-breadcrumb">
            <Link href="/project">
              <ArrowLeftIcon size={15} weight="regular" aria-hidden="true" />
              All projects
            </Link>
            <span>{project.category}</span>
          </div>

          <section className="detail-hero">
            <span className="project-kicker">Project study</span>
            <h1>{project.name}</h1>
            <p>{project.headline}</p>
          </section>

          {project.externalUrl && (
            <div className="project-external-card">
              <div className="project-external-copy">
                <span>Live project</span>
                <strong>{project.name}</strong>
              </div>
              <a
                href={project.externalUrl}
                className="project-external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.externalLabel ?? "Open project"}
                <ArrowUpRightIcon size={18} weight="regular" aria-hidden="true" />
              </a>
            </div>
          )}

          {project.images.length > 0 ? (
            <section className="project-gallery project-gallery-primary" aria-labelledby="gallery-title">
              <div className="gallery-heading">
                <span className="detail-section-label">Interface gallery</span>
                <h2 id="gallery-title">Product view</h2>
              </div>
              <ProjectCarousel
                images={project.images}
                name={project.name}
                platform={project.platform}
              />
            </section>
          ) : (
            <section className="project-gallery project-gallery-primary" aria-labelledby="gallery-title">
              <div className="gallery-heading">
                <span className="detail-section-label">Interface gallery</span>
                <h2 id="gallery-title">Product view</h2>
              </div>
              <p className="detail-empty">Screenshots are not available yet.</p>
            </section>
          )}

          <section className="detail-facts" aria-label="Project overview">
            {facts.map((fact) => (
              <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>
            ))}
          </section>

          <section className="detail-section detail-intro">
            <div className="detail-section-label">01 / Challenge</div>
            <div>
              <h2>Context</h2>
              <p>{project.challenge}</p>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">02 / Contribution</div>
            <div>
              <h2>My contribution</h2>
              <ol className="detail-list">
                {project.contribution.map((item, index) => (
                  <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">03 / System</div>
            <div>
              <h2>Key features</h2>
              <div className="feature-grid">
                {project.features.map((feature) => <div key={feature}>{feature}</div>)}
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">04 / Technology</div>
            <div>
              <h2>Tech stack</h2>
              <div className="detail-stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </section>

          {nextProject && (
            <Link href={`/project/${nextProject.slug}`} className="next-project">
              <span>Next project</span>
              <strong>
                {nextProject.name}
                <ArrowUpRightIcon size={28} weight="regular" aria-hidden="true" />
              </strong>
            </Link>
          )}
        </main>
        <footer className="project-footer">© 2026 Albiyan Dikha Chandra</footer>
      </div>
    </>
  );
}
