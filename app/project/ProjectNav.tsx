import Link from "next/link";

export default function ProjectNav() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand">albiyandc</Link>
        <nav className="nav-links" aria-label="Project navigation">
          <Link href="/">Home</Link>
          <Link href="/project" className="active">Project</Link>
        </nav>
      </div>
    </header>
  );
}
