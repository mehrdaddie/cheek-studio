"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  // Scroll for parallax
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 500], [0, -50]); // logo moves up slowly
  const titleY = useTransform(scrollY, [0, 500], [0, -30]); // title moves less
  const descY = useTransform(scrollY, [0, 500], [0, -20]); // description subtle
  const scrollIndicatorY = useTransform(scrollY, [0, 500], [0, 20]); // indicator moves down slightly

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{
          y: useTransform(scrollY, [0, 500], [0, -30]), // video moves subtly
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: useTransform(scrollY, [0, 500], [0, -15]) }}
          className="casko uppercase tracking-[0.5em] text-[10px] text-white/70 mb-10"
        >
          Wedding Films • Photography • Storytelling
        </motion.p>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(15px)" }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 0.85,
            filter: loaded ? "blur(0px)" : "blur(15px)",
          }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ y: logoY }}
        >
          <Image
            src="/logo-white.png"
            alt="Cheek Studio"
            width={500}
            height={200}
            priority
            className="w-[240px] md:w-[380px] lg:w-[500px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ y: titleY }}
          className="casko text-4xl md:text-6xl lg:text-7xl text-white mt-6"
        >
          Cheek Studio
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          style={{ y: descY }}
          className="mt-8 max-w-2xl text-white/80 text-sm md:text-lg leading-relaxed"
        >
          We craft cinematic wedding films and timeless photography that preserve emotion, elegance, and storytelling
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ y: useTransform(scrollY, [0, 500], [0, -25]) }}
          className="mt-12 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition transform duration-300"
          >
            نمایش گالری
          </a>

          <a
            href="#consult"
            className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition transform duration-300"
          >
            مشاوره آنلاین
          </a>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ y: scrollIndicatorY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center"
      >
        <p className="text-[10px] tracking-[0.4em] mb-1 animate-pulse">SCROLL</p>
        <div className="text-xl animate-bounce">↓</div>
      </motion.div>

    </section>
  );
}