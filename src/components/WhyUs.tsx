"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="py-40 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="font-casko text-xs tracking-[0.5em] uppercase text-gray-500">
            Why Choose Us
          </p>

          <h2 className="font-casko text-5xl md:text-6xl mt-6">
            More Than A Wedding Film
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2">
            <h3 className="font-casko text-2xl mb-6">
              Storytelling
            </h3>
            <p className="leading-loose text-gray-700">
              ما فقط لحظه‌ها را ثبت نمی‌کنیم.
              هر پروژه را به یک داستان سینمایی تبدیل می‌کنیم.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2">
            <h3 className="font-casko text-2xl mb-6">
              Emotion
            </h3>
            <p className="leading-loose text-gray-700">
              احساسات واقعی مهم‌ترین بخش خاطرات هستند.
              ما آن‌ها را بدون تصنع ثبت می‌کنیم.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2">
            <h3 className="font-casko text-2xl mb-6">
              Timeless
            </h3>
            <p className="leading-loose text-gray-700">
              فیلم‌ها و تصاویر ما برای سال‌ها بعد نیز
              ارزش و زیبایی خود را حفظ می‌کنند.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}