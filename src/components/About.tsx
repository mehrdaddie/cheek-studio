"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const isVisible =
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2;

      if (isVisible) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 40,
          transition: { duration: 0.6 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="py-32 px-6 flex flex-col items-center"
    >
      {/* ===== CINEMATIC INTRO ===== */}
      <div className="max-w-3xl text-center mb-12">
        <p className="casko text-sm md:text-lg text-gray-600 uppercase tracking-widest">
          Wedding Film Studio
        </p>

        <h2 className="casko text-3xl md:text-4xl lg:text-5xl mt-4 leading-snug">
          We don’t just capture weddings — we craft cinematic memories.
        </h2>

        <p className="casko text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          A refined storytelling approach combining emotion, light, and timeless composition.
        </p>
      </div>

      {/* ===== ABOUT CARD ===== */}
      <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-lg p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <h2 className="text-4xl text-center mb-6 font-bold">
          About Us
        </h2>

        <p className="text-center text-gray-700 leading-relaxed text-lg font-Regular">
          ما فقط عروسی‌ها را ثبت نمی‌کنیم،
          بلکه خاطرات سینمایی خلق می‌کنیم.  
          رویکردی دقیق در داستان‌گویی، ترکیب احساس، نور و ترکیب‌بندی بی‌زمان
        </p>

      </div>

    </motion.section>
  );
}