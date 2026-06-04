"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const packages = [
  {
    name: "VIP",
    price: "70",
    desc: "پوشش کامل سینمایی مراسم عروسی با بالاترین کیفیت",
    highlight: true,
    features: [
      "فیلمبرداری 4K",
      "هلی‌شات و FPV",
      "تدوین کامل حرفه‌ای",
      "چند دوربینه",
      "آلبوم لوکس",
    ],
    fontTitle: "font-casko font-bold",
  },
  {
    name: "CIP",
    price: "60",
    desc: "پکیج حرفه‌ای با امکانات متعادل و کامل",
    highlight: false,
    features: ["فیلمبرداری 4K", "هلی‌شات", "تدوین حرفه‌ای", "یک دوربین اضافه"],
    fontTitle: "font-casko font-normal",
  },
  {
    name: "فرمالیته شمال",
    price: "30",
    desc: "تجربه سینمایی در طبیعت شمال",
    highlight: false,
    features: ["هلی‌شات", "تصویربرداری فضای باز", "رنگ‌پردازی سینمایی"],
    fontTitle: "font-graphik font-bold",
  },
  {
    name: "فرمالیته شهری",
    price: "15",
    desc: "تصویربرداری سبک شهری و مینیمال",
    highlight: false,
    features: ["لوکیشن شهری", "عکاسی پرتره", "ادیت سبک"],
    fontTitle: "font-graphik font-bold",
  },
];

export default function PackagesShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white font-graphik" dir="rtl">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-5xl text-black text-center mb-16 font-bold">
          Packages
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ perspective: 1200 }}
              className="relative"
            >
              <motion.div
                whileHover={{
                  rotateY: 10,
                  rotateX: -5,
                  scale: 1.06,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative overflow-hidden border border-black/10
                  flex flex-col h-[520px]
                  shadow-lg
                  ${pkg.highlight
                    ? "bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black shadow-[0_0_40px_rgba(255,215,0,0.35)]"
                    : "bg-white"}
                `}
              >

                {/* CONTENT */}
                <div className="p-6 flex flex-col h-full justify-between">

                  {/* NAME */}
                  <h3 className={`${pkg.fontTitle} text-2xl text-black`}>
                    {pkg.name}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm mt-2 mb-6 font-graphik font-thin text-gray-600 leading-6">
                    {pkg.desc}
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm flex items-center gap-2 font-graphik font-thin text-gray-700"
                      >
                        <span className="text-green-500">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* PRICE BOX (SQUARE) */}
                  <div className="mt-6">

                    <div
                      className={`
                        relative text-center py-4 border
                        rounded-none   /* ⬅️ مربع کامل */
                        backdrop-blur-md
                        ${
                          pkg.highlight
                            ? "bg-black text-yellow-400 border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                            : "bg-black text-white border-white/10"
                        }
                      `}
                    >
                      <div className="font-graphik-bold text-5xl tracking-wider">
                        {pkg.price}
                      </div>

                      <div className="text-x1 font-graphik-bold opacity-70 mt-1">
                       میلیون
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}