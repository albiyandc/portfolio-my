import Image from "next/image";

export default function ProjectVisual({
  slug,
  name,
  src,
}: {
  slug: string;
  name: string;
  src: string;
}) {
  return (
    <div className={`project-visual project-visual-${slug}`}>
      <Image
        src={src}
        alt={`Tampilan aplikasi ${name}`}
        fill
        sizes="(max-width: 780px) 100vw, 720px"
        className="project-cover-image"
      />
      <div className="visual-shade" />
      <span className="visual-label">SYSTEM / {slug.toUpperCase()}</span>
    </div>
  );
}
