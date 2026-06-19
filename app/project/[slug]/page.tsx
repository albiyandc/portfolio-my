import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StarTrail from "../../components/StarTrail";
import ProjectNav from "../ProjectNav";
import ProjectCarousel from "../ProjectCarousel";
import { getProject, projectData } from "../project-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.name} — Albiyan Dikha Chandra`, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const nextProject = projectData.find((item) => item.slug !== project.slug)!;

  return (
    <>
      <StarTrail />
      <div className="project-shell">
        <ProjectNav />
        <main className="detail-main">
          <div className="detail-breadcrumb">
            <Link href="/project">← Semua project</Link>
            <span>{project.category}</span>
          </div>

          <section className="detail-hero">
            <span className="project-kicker">Case study / {project.period}</span>
            <h1>{project.name}</h1>
            <p>{project.headline}</p>
          </section>

          <section className="project-gallery project-gallery-primary" aria-labelledby="gallery-title">
            <div className="gallery-heading">
              <span className="detail-section-label">Interface gallery</span>
              <h2 id="gallery-title">Tampilan produk</h2>
            </div>
            <ProjectCarousel images={project.images} name={project.name} />
          </section>

          <section className="detail-facts" aria-label="Ringkasan project">
            <div><span>Peran</span><strong>{project.role}</strong></div>
            <div><span>Status</span><strong>{project.status}</strong></div>
            <div><span>Periode</span><strong>{project.period}</strong></div>
          </section>

          <section className="detail-section detail-intro">
            <div className="detail-section-label">01 / Tantangan</div>
            <div>
              <h2>Konteks masalah</h2>
              <p>{project.challenge}</p>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">02 / Kontribusi</div>
            <div>
              <h2>Apa yang saya kerjakan</h2>
              <ol className="detail-list">
                {project.contribution.map((item, index) => (
                  <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">03 / Sistem</div>
            <div>
              <h2>Fitur utama</h2>
              <div className="feature-grid">
                {project.features.map((feature) => <div key={feature}>{feature}</div>)}
              </div>
            </div>
          </section>

          <section className="detail-section">
            <div className="detail-section-label">04 / Teknologi</div>
            <div>
              <h2>Tech stack</h2>
              <div className="detail-stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </section>

          <Link href={`/project/${nextProject.slug}`} className="next-project">
            <span>Project berikutnya</span>
            <strong>{nextProject.name} ↗</strong>
          </Link>
        </main>
        <footer className="project-footer">© 2026 Albiyan Dikha Chandra</footer>
      </div>
    </>
  );
}
