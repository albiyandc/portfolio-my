"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

export default function NameScramble({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number>(0);

  const play = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    cancelAnimationFrame(raf.current);

    let frame = 0;
    const totalFrames = 14;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);

      if (progress >= 1) {
        setDisplay(text);
        return;
      }

      setDisplay(
        Array.from(text, (char, index) => {
          if (char === " ") return " ";

          const revealPoint = index / text.length;
          return progress > revealPoint
            ? char
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join(""),
      );

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <h1 className={className} aria-label={text} onMouseEnter={play}>
      {display}
    </h1>
  );
}
