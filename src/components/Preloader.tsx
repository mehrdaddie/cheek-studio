"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import WhyUs from "@/components/WhyUs";
import PackagesShowcase from "@/components/PackagesShowcase";
import SmoothScroll from "@/components/SmoothScroll";
import SakuraPetals from "@/components/SakuraPetals";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [preloading, setPreloading] = useState(true);

  useEffect(() => {
    // Preloader حدود 2.5 ثانیه نمایش داده شود
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <AnimatePresence>
        {preloading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 1.2, filter: "blur(30px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 1 } }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-black font-casko text-6xl md:text-8xl"
            >
              CHEEK
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SITE */}
      {!preloading && (
        <main className="bg-[#F7F4EF] text-black overflow-x-hidden">
          <SmoothScroll />
          <SakuraPetals />

          {/* HERO */}
          <div id="hero">
            <Hero />
          </div>

          {/* ABOUT */}
          <div id="about">
            <About />
          </div>

          {/* GALLERY */}
          <div id="gallery">
            <Gallery />
          </div>

          {/* VIDEO */}
          <div id="videos">
            <VideoShowcase />
          </div>

          {/* WHY US */}
          <div id="whyus">
            <WhyUs />
          </div>

          {/* PACKAGES */}
          <div id="packages">
            <PackagesShowcase />
          </div>

          <Footer />
        </main>
      )}
    </>
  );
}