"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const barookImages = [
  "/locations/barook/barook-1.jpg",
  "/locations/barook/barook-2.jpg",
  "/locations/barook/barook-3.jpg",
  "/locations/barook/barook-4.jpg",
];

const macanImages = [
  "/locations/macan/macan-1.jpg",
  "/locations/macan/macan-2.jpg",
  "/locations/macan/macan-3.jpg",
  "/locations/macan/macan-4.jpg",
  "/locations/macan/macan-5.jpg",
  "/locations/macan/macan-6.jpg",
  "/locations/macan/macan-7.jpg",
  "/locations/macan/macan-8.jpg",
  "/locations/macan/macan-9.jpg",
  "/locations/macan/macan-10.jpg",
  "/locations/macan/macan-11.jpg",
  "/locations/macan/macan-12.jpg",
];

export default function LocationsPage() {
  return (
    <PhotoProvider>
      <main className="bg-[#F7F4EF] min-h-screen">

        {/* HERO */}
        <section className="relative h-[65vh] overflow-hidden">
          <Image
            src="/locations/macan/macan-1.jpg"
            alt="Locations"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <p className="font-casko tracking-[0.5em] uppercase text-sm mb-6">
              Wedding Locations
            </p>

            <h1 className="font-casko text-6xl md:text-7xl">
              Locations
            </h1>

            <p className="font-irancell mt-8 max-w-2xl leading-loose text-white/80">
              لوکیشن‌های منتخب Cheek Studio برای ثبت تصاویر و فیلم‌های سینمایی
            </p>
          </div>
        </section>

        {/* BAROOK */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <p className="font-casko tracking-[0.3em] uppercase text-gray-500 mb-4">
                Barook Mansion
              </p>

              <h2 className="font-irancell-bold text-5xl mb-6">
                عمارت باروک
              </h2>

              <p className="font-irancell text-gray-600 max-w-3xl mx-auto leading-loose">
                فضایی باشکوه و کلاسیک برای خلق تصاویر ماندگار.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {barookImages.map((image) => (
                <PhotoView key={image} src={image}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-[420px] rounded-[36px] overflow-hidden shadow-xl cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt="Barook"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                </PhotoView>
              ))}
            </div>

          </div>
        </section>

        {/* MACAN */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <p className="font-casko tracking-[0.3em] uppercase text-gray-500 mb-4">
                Macan Mansion
              </p>

              <h2 className="font-irancell-bold text-5xl mb-6">
                عمارت ماکان
              </h2>

              <p className="font-irancell text-gray-600 max-w-3xl mx-auto leading-loose">
                ترکیبی از معماری مدرن و فضای لوکس.
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {macanImages.map((image, index) => (
                <PhotoView key={image} src={image}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-[36px] shadow-xl cursor-pointer break-inside-avoid"
                  >
                    <Image
                      src={image}
                      alt={`Macan ${index + 1}`}
                      width={1000}
                      height={1400}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                </PhotoView>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <a
                href="/packages"
                className="px-10 py-4 rounded-full bg-black text-white font-irancell hover:scale-105 transition-all duration-300"
              >
                مشاهده پکیج‌ها
              </a>
            </div>

          </div>
        </section>

        {/* COMING SOON */}
        <section className="pb-32 px-6">
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-black/5 rounded-[40px] p-14 text-center shadow-lg">

            <p className="font-casko tracking-[0.3em] uppercase text-gray-500 mb-4">
              More Locations
            </p>

            <h3 className="font-casko text-4xl mb-6">
              Coming Soon
            </h3>

            <p className="font-irancell text-gray-600 leading-loose">
              به زودی لوکیشن‌های بیشتری اضافه می‌شود.
            </p>

          </div>
        </section>

      </main>
    </PhotoProvider>
  );
}