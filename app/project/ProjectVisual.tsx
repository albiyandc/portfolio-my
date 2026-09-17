import Image from "next/image";

export default function ProjectVisual({
  slug,
  name,
  category,
  platform,
  src,
}: {
  slug: string;
  name: string;
  category: string;
  platform: "web" | "mobile";
  src?: string;
}) {
  const platformClass = platform === "mobile" ? " project-visual-mobile" : "";

  return (
    <div className={`project-visual project-visual-${slug}${platformClass}`}>
      {src ? (
        <Image
          src={src}
          alt={`Tampilan aplikasi ${name}`}
          fill
          sizes="(max-width: 780px) 100vw, 720px"
          className="project-cover-image"
        />
      ) : (
        <div className="project-visual-placeholder">
          <span className="visual-placeholder-name">{name}</span>
          <span className="visual-placeholder-category">{category}</span>
        </div>
      )}
      {src && <div className="visual-shade" />}
    </div>
  );
}
