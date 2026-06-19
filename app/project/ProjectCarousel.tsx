"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  const previous = () =>
    setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);

  return (
    <div className="project-carousel">
      <div className="carousel-frame">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${name} — tampilan ${active + 1}`}
          fill
          sizes="(max-width: 900px) 100vw, 860px"
          className="carousel-image"
        />
        <button
          type="button"
          className="carousel-control carousel-previous"
          onClick={previous}
          aria-label="Gambar sebelumnya"
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-control carousel-next"
          onClick={next}
          aria-label="Gambar berikutnya"
        >
          ›
        </button>
      </div>

      <div className="carousel-pagination" aria-label="Pilih gambar">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Tampilkan gambar ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
