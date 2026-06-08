"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
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

function GalleryItem({
  src,
  height,
}: {
  src: string;
  height: string;
}) {
  return (
    <PhotoView src={src}>
      <div
        className={`
          relative
          ${height}
          rounded-3xl
          overflow-hidden
          group
          cursor-pointer
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        `}
      >
        <Image
          src={src}
          alt="Cheek Studio Wedding"
          fill
          className="
            object-cover
            transition-all
            duration-1000
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-black/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
          "
        />

        {/* Caption */}

        <div
          className="
            absolute
            bottom-6
            right-6
            text-white
            opacity-0
            translate-y-4
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        >
          <p className="text-[10px] tracking-[0.4em] uppercase">
            Cheek Studio
          </p>

          <h3 className="mt-2 text-xl font-light">
            Wedding Story
          </h3>
        </div>
      </div>
    </PhotoView>
  );
}

export default function Gallery() {
  return (
    <section id="portfolio" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="mb-20 text-center">
          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase">
            Portfolio
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Wedding Collection
          </h2>
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-5 gap-6 items-start">

            {/* COLUMN 1 */}

            <div className="flex flex-col gap-6">
              <GalleryItem
                src={images[0]}
                height="h-[180px]"
              />

              <GalleryItem
                src={images[1]}
                height="h-[380px]"
              />
            </div>

            {/* COLUMN 2 */}

            <div className="flex flex-col gap-6 mt-16">
              <GalleryItem
                src={images[2]}
                height="h-[420px]"
              />

              <GalleryItem
                src={images[3]}
                height="h-[220px]"
              />
            </div>

            {/* COLUMN 3 */}

            <div className="flex flex-col gap-6">
              <GalleryItem
                src={images[4]}
                height="h-[520px]"
              />

              <GalleryItem
                src={images[5]}
                height="h-[260px]"
              />
            </div>

            {/* COLUMN 4 */}

            <div className="flex flex-col gap-6 mt-20">
              <GalleryItem
                src={images[6]}
                height="h-[240px]"
              />

              <GalleryItem
                src={images[7]}
                height="h-[420px]"
              />
            </div>

            {/* COLUMN 5 */}

            <div className="flex flex-col gap-6">
              <GalleryItem
                src={images[8]}
                height="h-[180px]"
              />

              <GalleryItem
                src={images[9]}
                height="h-[380px]"
              />
            </div>

          </div>
        </PhotoProvider>

      </div>
    </section>
  );
}