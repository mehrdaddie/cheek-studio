"use client";

import { motion } from "framer-motion";

const features = [
  "پیشکاری مراسم عروسی",
  "تصویر برداری 4K",
  "هلی‌شات سینمایی",
  "FPV Drone",
  "رونین + کرین",
  "تدوین سینمایی",
  "آلبوم لوکس",
  "اسلایدشو سالن",
  "آرشیو کامل فایل‌ها",
  "فرمالیته اختصاصی",
];

const plans = [
  { name: "VIP", subtitle: "Ultimate Experience", highlight: true, features: Array(features.length).fill(true), font: "font-casko" },
  { name: "CIP", subtitle: "Professional", highlight: false, features: features.map((_, i) => i % 2 === 0), font: "font-casko" },
  { name: "فرمالیته تهران", subtitle: "Cinematic Urban Experience", highlight: false, features: features.map((_, i) => i % 3 === 0), font: "font-irancell" },
  { name: "فرمالیته شمال", subtitle: "Nature Cinematic Journey", highlight: false, features: features.map((_, i) => i % 4 === 0), font: "font-irancell" },
];

export default function ApplePricing() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_60%)]" />
        <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 blur-[160px] top-[-250px] left-[-250px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[160px] bottom-[-250px] right-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[160px] bottom-[20%] left-[20%]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      <section className="relative pt-40 pb-24 text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-light tracking-tight font-irancell">
          پکیج‌ها
        </motion.h1>
        <p className="text-white/50 mt-6 tracking-[0.4em] text-sm">در چیک استودیو کیفیت فدای رقابت نمی شود</p>
      </section>

      <section className="relative px-6 md:px-16 pb-40 space-y-40">
        {plans.map((plan) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="relative">
            {plan.highlight && <div className="absolute inset-0 bg-yellow-400/10 blur-[120px] rounded-[60px]" />}
            <div className={`relative backdrop-blur-2xl border rounded-[40px] p-10 md:p-16 transition-all duration-500 ${plan.highlight ? "border-yellow-400/30 bg-white/5" : "border-white/10 bg-white/5"}`}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                <div>
                  <h2 className={`${plan.font} text-4xl md:text-5xl text-white`}>{plan.name}</h2>
                  <p className="text-white/50 mt-2 tracking-widest font-irancell">{plan.subtitle}</p>
                </div>
                {plan.highlight && <div className="mt-4 md:mt-0 text-yellow-300 text-sm tracking-[0.3em]">MOST POPULAR</div>}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div key={feature} className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/70 font-irancell">{feature}</span>
                    <span className={plan.features[i] ? (plan.highlight ? "text-yellow-300" : "text-green-400") : "text-white/10"}>●</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="relative text-center pb-40 px-6">
        <motion.h3 className="text-4xl md:text-6xl font-light font-irancell">بیایید چیزی سینمایی خلق کنیم</motion.h3>
        <p className="text-white/40 mt-4 font-irancell">برای استعلام قیمت و رزرو پروژه با ما در تماس باشید</p>

        <div className="flex justify-center gap-10 mt-12">
          <a href="https://instagram.com/Cheek__Studio" target="_blank" className="flex flex-col items-center gap-2 group">
            <img src="/insta.svg" className="w-7 h-7 group-hover:scale-110 transition" alt="instagram" />
            <span className="text-xs text-white/60 font-irancell">اینستاگرام</span>
          </a>
          <a href="https://wa.me/989021221311" target="_blank" className="flex flex-col items-center gap-2 group">
            <img src="/whatsapp.svg" className="w-7 h-7 group-hover:scale-110 transition" alt="whatsapp" />
            <span className="text-xs text-white/60 font-irancell">واتساپ</span>
          </a>
          <a href="tel:09021221311" className="flex flex-col items-center gap-2 group">
            <img src="/call.svg" className="w-7 h-7 group-hover:scale-110 transition invert brightness-0" alt="call" />
            <span className="text-xs text-white/60 font-irancell">تماس</span>
          </a>
        </div>
      </section>
    </main>
  );
}