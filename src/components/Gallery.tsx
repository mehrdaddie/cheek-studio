"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { motion, AnimatePresence } from "framer-motion";
import "react-photo-view/dist/react-photo-view.css";

const images = [
  "/gallery/wedding-1.JPG",
  "/gallery/wedding-2.JPG",
  "/gallery/wedding-3.JPG",
  "/gallery/wedding-4.JPG",
  "/gallery/wedding-5.JPG",
  "/gallery/wedding-6.JPG",
  "/gallery/wedding-7.JPG",
  "/gallery/wedding-8.JPG",
  "/gallery/wedding-9.JPG",
  "/gallery/wedding-10.JPG",
];

function GalleryItem({ src, height }: { src: string; height: string }) {
  return (
    <PhotoView src={src}>
      <div className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${height}`}>
        <Image
          src={src}
          alt="Cheek Studio Wedding"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
    </PhotoView>
  );
}

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="portfolio" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase font-irancell">
            Portfolio
          </p>
          <h2 className="mt-6 text-5xl font-light font-casko">
            Wedding Collection
          </h2>
        </div>

        <PhotoProvider>

          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-5 gap-6 items-start">
            <div className="flex flex-col gap-6">
              <GalleryItem src={images[0]} height="h-[180px]" />
              <GalleryItem src={images[1]} height="h-[380px]" />
            </div>

            <div className="flex flex-col gap-6 mt-16">
              <GalleryItem src={images[2]} height="h-[420px]" />
              <GalleryItem src={images[3]} height="h-[220px]" />
            </div>

            <div className="flex flex-col gap-6">
              <GalleryItem src={images[4]} height="h-[520px]" />
              <GalleryItem src={images[5]} height="h-[260px]" />
            </div>

            <div className="flex flex-col gap-6 mt-20">
              <GalleryItem src={images[6]} height="h-[240px]" />
              <GalleryItem src={images[7]} height="h-[420px]" />
            </div>

            <div className="flex flex-col gap-6">
              <GalleryItem src={images[8]} height="h-[180px]" />
              <GalleryItem src={images[9]} height="h-[380px]" />
            </div>
          </div>

          {/* MOBILE SWIPE */}
          <div className="md:hidden relative w-full h-[320px] overflow-hidden rounded-3xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  const threshold = 60;

                  if (info.offset.x < -threshold) next();
                  else if (info.offset.x > threshold) prev();
                }}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[currentIndex]}
                  alt="gallery"
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* BUTTONS */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="absolute bottom-3 w-full flex justify-center gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

          </div>

        </PhotoProvider>
      </div>
    </section>
  );
}