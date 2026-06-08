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
  },
  {
    name: "CIP",
    featured: true,
    desc: "پکیج حرفه‌ای با پوشش کامل و مناسب برای اکثر مراسم‌ها",
    features: ["فیلمبرداری 4K", "هلی‌شات", "تدوین حرفه‌ای", "دوربین دوم"],
  },
  {
    name: "فرمالیته شمال",
    featured: false,
    desc: "تجربه‌ای سینمایی در طبیعت شمال",
    features: ["لوکیشن اختصاصی", "هلی‌شات", "رنگ‌پردازی سینمایی"],
  },
  {
    name: "فرمالیته شهری",
    featured: false,
    desc: "ثبت تصاویر مینیمال در فضای شهری",
    features: ["لوکیشن شهری", "عکاسی پرتره", "ادیت اختصاصی"],
  },
];

export default function PackagesShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <section className="py-32 px-6 bg-[#F7F4EF]" dir="rtl">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="font-casko text-5xl mb-4">Packages</h2>
            <p className="font-irancell text-gray-600 max-w-2xl mx-auto leading-loose">
              قیمت‌ها به صورت اختصاصی و بر اساس نیاز پروژه شما تعیین می‌شود
            </p>
          </div>

          {/* GRID (ALL CARDS SAME STRUCTURE) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`
                  relative rounded-3xl p-8 flex flex-col justify-between
                  backdrop-blur-xl border shadow-lg
                  ${pkg.featured
                    ? "bg-white/80 border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                    : "bg-white/60 border-black/5"
                  }
                `}
              >

                {/* TITLE */}
                <h3
                  className={`text-3xl mb-3 ${
                    pkg.featured ? "font-casko" : "font-casko"
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* DESC */}
                <p className="font-irancell text-gray-600 text-sm leading-loose mb-6">
                  {pkg.desc}
                </p>

                {/* FEATURES */}
                <div className="flex-1 space-y-2 mb-6">
                  {pkg.features.map((f: string) => (
                    <div
                      key={f}
                      className="font-irancell text-sm text-gray-700 flex gap-2"
                    >
                      ✓ {f}
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setOpen(true)}
                  className="
                    font-irancell
                    w-full py-3 rounded-full
                    bg-black text-white
                    hover:scale-105 transition
                  "
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-3xl p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="font-casko text-3xl text-center mb-6">
                Contact Us
              </h3>

              <p className="font-irancell text-center text-gray-600 mb-8">
                برای استعلام قیمت با ما در تماس باشید
              </p>

              {/* CONTACT ROW (FIXED INLINE) */}
              <div className="flex justify-between items-center gap-4 mb-8">

                {/* Instagram */}
                <a
                  href="https://instagram.com/Cheek__Studio"
                  target="_blank"
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
                    className="w-8 h-8"
                  />
                  <span className="font-irancell text-xs">@Cheek__Studio</span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/989021221311"
                  target="_blank"
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src="https://www.svgrepo.com/show/158412/whatsapp.svg"
                    className="w-8 h-8"
                  />
                  <span className="font-irancell text-xs">09021221311</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:09021221311"
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src="https://www.svgrepo.com/show/383027/mobile-call-phone.svg"
                    className="w-8 h-8"
                  />
                  <span className="font-irancell text-xs">09021221311</span>
                </a>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-full bg-black text-white font-irancell"
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