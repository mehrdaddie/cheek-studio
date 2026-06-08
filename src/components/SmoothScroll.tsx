"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const frame = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}