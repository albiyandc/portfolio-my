"use client";

import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectCarousel({
  images,
  name,
  platform,
}: {
  images: string[];
  name: string;
  platform: "web" | "mobile";
}) {
  const [active, setActive] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsZoomed(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  const previous = () =>
    setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);

  return (
    <div className={`project-carousel project-carousel-${platform}`}>
      <div className="carousel-frame">
        <button
          type="button"
          className="carousel-image-trigger"
          onClick={() => setIsZoomed(true)}
          aria-label={`Perbesar ${name}, tampilan ${active + 1}`}
        >
          <Image
            key={images[active]}
            src={images[active]}
            alt={`${name}, tampilan ${active + 1}`}
            fill
            sizes="(max-width: 900px) 100vw, 860px"
            loading={active === 0 ? "eager" : "lazy"}
            className="carousel-image"
          />
        </button>
        <button
          type="button"
          className="carousel-control carousel-previous"
          onClick={previous}
          aria-label="Gambar sebelumnya"
        >
          <CaretLeftIcon size={22} weight="bold" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="carousel-control carousel-next"
          onClick={next}
          aria-label="Gambar berikutnya"
        >
          <CaretRightIcon size={22} weight="bold" aria-hidden="true" />
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

      {isZoomed && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Tampilan fullscreen ${name}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsZoomed(false);
          }}
        >
          <img
            src={images[active]}
            alt={`${name}, tampilan fullscreen ${active + 1}`}
            className="image-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setIsZoomed(false)}
            aria-label="Tutup tampilan fullscreen"
          >
            <XIcon size={24} weight="regular" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
