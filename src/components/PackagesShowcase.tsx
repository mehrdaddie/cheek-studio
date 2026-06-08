"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const packages = [
  {
    name: "VIP",
    featured: true,
    desc: "پوشش کامل سینمایی مراسم عروسی با بالاترین سطح تولید و خدمات اختصاصی",
    features: [
      "فیلمبرداری سینمایی 4K",
      "هلی‌شات و FPV",
      "تدوین اختصاصی",
      "تیم چند دوربینه",
      "آلبوم لوکس",
    ],
    font: "font-casko",
  },
  {
    name: "CIP",
    featured: true,
    desc: "پکیج حرفه‌ای با پوشش کامل و مناسب برای اکثر مراسم‌ها",
    features: ["فیلمبرداری 4K", "هلی‌شات", "تدوین حرفه‌ای", "دوربین دوم"],
    font: "font-casko",
  },
  {
    name: "فرمالیته شمال",
    featured: false,
    desc: "تجربه‌ای سینمایی در طبیعت شمال",
    features: ["لوکیشن اختصاصی", "هلی‌شات", "رنگ‌پردازی سینمایی"],
    font: "font-irancell-bold",
  },
  {
    name: "فرمالیته شهری",
    featured: false,
    desc: "ثبت تصاویر مینیمال در فضای شهری",
    features: ["لوکیشن شهری", "عکاسی پرتره", "ادیت اختصاصی"],
    font: "font-irancell-bold",
  },
];

export default function PackagesShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* SECTION */}
      <section className="py-32 px-6 bg-[#F7F4EF]" dir="rtl">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-casko mb-4">Packages</h2>
            <p className="font-irancell text-gray-600">
              قیمت‌ها به صورت اختصاصی و بر اساس نیاز پروژه شما تعیین می‌شود
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                whileHover={{ y: -12, scale: 1.04 }}
                className={`
                  relative rounded-[28px] p-8 flex flex-col justify-between
                  backdrop-blur-xl border shadow-xl
                  transition-all duration-300
                  ${pkg.featured
                    ? "bg-white/80 border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                    : "bg-white/60 border-black/5"
                  }
                `}
              >
                <h3 className={`${pkg.font} text-3xl mb-3`}>
                  {pkg.name}
                </h3>

                <p className="font-irancell text-gray-600 text-sm mb-6 leading-loose">
                  {pkg.desc}
                </p>

                <div className="flex-1 space-y-2">
                  {pkg.features.map((f) => (
                    <div key={f} className="font-irancell text-sm text-gray-700">
                      ✓ {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-6 w-full py-3 rounded-full bg-black text-white font-irancell hover:scale-[1.03] transition"
                >
                  استعلام قیمت
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-[32px] bg-white/10 border border-white/20 backdrop-blur-3xl p-10 text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-[32px] bg-white/5 blur-2xl" />

              <div className="relative z-10">
                <h3 className="font-irancell-bold text-2xl font-casko text-center mb-2">
                  تماس با ما
                </h3>

                <p className="text-white/90 text-center mb-10 font-irancell text-sm">
                  راه‌های ارتباطی سریع
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href="https://instagram.com/Cheek__Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 hover:scale-110 transition"
                  >
                    <img src="/insta.svg" className="w-9 h-9" />
                    <span className="text-xs font-irancell">اینستاگرام</span>
                  </a>

                  <a
                    href="https://wa.me/989021221311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 hover:scale-110 transition"
                  >
                    <img src="/whatsapp.svg" className="w-9 h-9" />
                    <span className="text-xs font-irancell">واتساپ</span>
                  </a>

                  <a
                    href="tel:09021221311"
                    className="flex flex-col items-center gap-2 hover:scale-110 transition"
                  >
                    <img src="/call.svg" className="w-9 h-9 invert brightness-0" />
                    <span className="text-xs font-irancell">تماس</span>
                  </a>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-10 w-full py-3 rounded-full bg-white text-black font-irancell hover:scale-[1.02] transition"
                >
                  بستن
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}