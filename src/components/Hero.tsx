"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  // Cinematic soft parallax
  const logoY = useTransform(scrollY, [0, 600], [0, -25]);
  const titleY = useTransform(scrollY, [0, 600], [0, -15]);
  const descY = useTransform(scrollY, [0, 600], [0, -10]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const handlePortfolioClick = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">

        {/* BACKGROUND VIDEO */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ y: useTransform(scrollY, [0, 600], [0, -20]) }}
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
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="casko uppercase tracking-[0.5em] text-[10px] text-white/70 mb-10"
          >
            Wedding Films • Photography • Storytelling
          </motion.p>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
            animate={{
              opacity: loaded ? 1 : 0,
              scale: loaded ? 1 : 0.92,
              filter: loaded ? "blur(0px)" : "blur(18px)",
            }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: logoY }}
          >
            <Image
              src="/logo-white.png"
              alt="Cheek Studio"
              width={500}
              height={200}
              className="w-[240px] md:w-[380px] lg:w-[500px]"
            />
          </motion.div>

          {/* CTA Buttons (Glass) */}
          <motion.div
            style={{ y: useTransform(scrollY, [0, 600], [0, -25]) }}
            className="mt-12 flex gap-4 flex-wrap justify-center"
          >
            <motion.button
              onClick={handlePortfolioClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transition hover:bg-white/20"
            >
              نمایش گالری
            </motion.button>

            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transition hover:bg-white/20"
            >
              مشاوره آنلاین
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-xl px-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl p-8 text-center text-white"
            >
              <h2 className="font-irancell-bold text-2xl mb-4">مشاوره آنلاین</h2>

              <p className="text-white/70 text-sm mb-8">
                از طریق یکی از روش‌های زیر با ما در ارتباط باشید
              </p>

              {/* CONTACT ICONS + SINGLE INFO */}
              <div className="flex justify-between items-center mb-10">

                {/* Instagram */}
                <div className="flex flex-col items-center gap-1">
                  <a href="https://instagram.com/Cheek__Studio" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <img src="/insta.svg" className="w-8 h-8" />
                    <span className="text-xs text-white">Cheek__Studio</span>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center gap-1">
                  <a href="https://wa.me/989021221311" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <img src="/whatsapp.svg" className="w-8 h-8" />
                    <span className="text-xs text-white">WhatsApp</span>
                  </a>
                </div>

                {/* Call */}
                <div className="flex flex-col items-center gap-1">
                  <a href="tel:09021221311" className="flex flex-col items-center gap-1">
                    <img src="/call.svg" className="w-8 h-8 invert" />
                    <span className="text-xs text-white">Call</span>
                  </a>
                </div>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-full bg-white text-black"
              >
                بستن
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}