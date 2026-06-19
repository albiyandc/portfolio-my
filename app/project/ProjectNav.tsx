import Link from "next/link";

export default function ProjectNav() {
  return (
    <header className="project-nav">
      <div className="project-nav-inner">
        <Link href="/" className="project-brand">albiyandc.dev</Link>
        <nav aria-label="Project navigation">
          <Link href="/">Home</Link>
          <Link href="/project" className="active">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
