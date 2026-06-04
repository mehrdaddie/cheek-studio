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

          {/* 5 COLUMN CINEMATIC GRID */}
          <div className="grid grid-cols-5 gap-6 items-start">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6">
              
              {/* horizontal top */}
              <PhotoView src={images[0]}>
                <div className="relative h-[180px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[0]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

              {/* vertical middle */}
              <PhotoView src={images[1]}>
                <div className="relative h-[380px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[1]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6 mt-16">

              <PhotoView src={images[2]}>
                <div className="relative h-[420px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[2]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

              <PhotoView src={images[3]}>
                <div className="relative h-[220px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[3]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

            </div>

            {/* COLUMN 3 (CENTER HERO) */}
            <div className="flex flex-col gap-6">

              <PhotoView src={images[4]}>
                <div className="relative h-[520px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[4]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

              <PhotoView src={images[5]}>
                <div className="relative h-[260px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[5]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

            </div>

            {/* COLUMN 4 */}
            <div className="flex flex-col gap-6 mt-20">

              <PhotoView src={images[6]}>
                <div className="relative h-[240px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[6]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

              <PhotoView src={images[7]}>
                <div className="relative h-[420px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[7]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

            </div>

            {/* COLUMN 5 */}
            <div className="flex flex-col gap-6">

              {/* horizontal bottom */}
              <PhotoView src={images[8]}>
                <div className="relative h-[180px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[8]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

              {/* vertical */}
              <PhotoView src={images[9]}>
                <div className="relative h-[380px] rounded-3xl overflow-hidden group">
                  <Image
                    src={images[9]}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </PhotoView>

            </div>

          </div>

        </PhotoProvider>

      </div>
    </section>
  );
}