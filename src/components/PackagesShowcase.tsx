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
    fontTitle: "font-casko",
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
  },
  {
    name: "CIP",
    price: "60",
    desc: "پکیج حرفه‌ای با امکانات متعادل و کامل",
    highlight: false,
    features: [
      "فیلمبرداری 4K",
      "هلی‌شات",
      "تدوین حرفه‌ای",
      "یک دوربین اضافه",
    ],
    fontTitle: "font-casko",
    gradient: "from-gray-400 via-gray-500 to-gray-600",
  },
  {
    name: "فرمالیته شمال",
    price: "30",
    desc: "تجربه سینمایی در طبیعت شمال",
    highlight: false,
    features: [
      "هلی‌شات",
      "تصویربرداری فضای باز",
      "رنگ‌پردازی سینمایی",
    ],
    fontTitle: "font-irancell-bold",
    gradient: "from-white to-white",
  },
  {
    name: "فرمالیته شهری",
    price: "15",
    desc: "تصویربرداری سبک شهری و مینیمال",
    highlight: false,
    features: [
      "لوکیشن شهری",
      "عکاسی پرتره",
      "ادیت سبک",
    ],
    fontTitle: "font-irancell-bold",
    gradient: "from-white to-white",
  },
];

export default function PackagesShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-white font-irancell" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-5xl text-black text-center mb-16 font-casko">
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
                  rotateY: 8,
                  rotateX: -5,
                  scale: 1.08,
                  boxShadow: pkg.highlight
                    ? "0 20px 50px rgba(255,215,0,0.6)"
                    : "0 20px 50px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative overflow-hidden border border-black/10
                  flex flex-col h-[420px] rounded-xl
                  ${pkg.highlight
                    ? `bg-gradient-to-b ${pkg.gradient} text-black shadow-[0_0_40px_rgba(255,215,0,0.35)]`
                    : "bg-white text-black shadow-lg"
                  }
                `}
              >
                <div className="p-6 flex flex-col h-full justify-between">

                  {/* NAME */}
                  <h3 className={`${pkg.fontTitle} text-2xl`}>
                    {pkg.name}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm mt-2 mb-6 font-irancell-thin text-gray-700 leading-6">
                    {pkg.desc}
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm flex items-center gap-2 font-irancell-thin text-gray-700"
                      >
                        <span className="text-green-500">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* PRICE BOX */}
                  <div className="mt-6">
                    <div className="text-center py-4 border border-[#3A3A3A] bg-[#2F2F2F] rounded-none backdrop-blur-md shadow-md">
                      <div className="font-irancell-bold text-5xl text-white tracking-wider">
                        {pkg.price}
                      </div>
                      <div className="text-lg font-irancell-bold text-white/80 mt-1">
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