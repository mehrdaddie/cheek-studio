"use client";

import { motion } from "framer-motion";

export default function LuxuryFooter() {
  return (
    <footer className="relative bg-[#050507] text-white overflow-hidden px-6 py-28">

      {/* ===== BACKGROUND DEPTH ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-500/10 blur-[180px] top-[-250px] left-[-250px]" />
        <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[200px] bottom-[-250px] right-[-250px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[180px] bottom-[10%] left-[35%]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* ===== CARD 1: BRAND ===== */}
        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            rounded-[32px]
            bg-white/5 border border-white/10
            backdrop-blur-2xl
            p-10
            shadow-[0_50px_150px_rgba(0,0,0,0.7)]
          "
        >
          <h3 className="font-casko text-3xl mb-4">
            CHEEK STUDIO
          </h3>

          <p className="text-white/60 leading-loose text-sm font-irancell">
            تولید فیلم و عکس سینمایی عروسی با تمرکز بر نور، احساس و روایت.
            ما خاطره نمی‌سازیم، سینما می‌سازیم.
          </p>
        </motion.div>

        {/* ===== CARD 2: CONTACT ===== */}
        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            rounded-[32px]
            bg-white/5 border border-white/10
            backdrop-blur-2xl
            p-10
            shadow-[0_50px_150px_rgba(0,0,0,0.7)]
          "
        >
          <h3 className="font-irancell-bold text-2xl mb-6">
            تماس با ما
          </h3>

          <div className="space-y-4 text-white/70 text-sm font-irancell-bold">
            <p>📞 09021221311</p>
            <p>✉️ cheek.studio2026@gmail.com</p>
            <p>📍 کرج، اندیشه، فاز یک، نبش ارغوان دوازدهم</p>
          </div>
        </motion.div>

        {/* ===== CARD 3: SOCIAL ===== */}
        <motion.div
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            rounded-[32px]
            bg-white/5 border border-white/10
            backdrop-blur-2xl
            p-10
            shadow-[0_50px_150px_rgba(0,0,0,0.7)]
          "
        >
          <h3 className="font-irancell-bold text-2xl mb-6">
            شبکه‌های اجتماعی
          </h3>

          <div className="flex justify-between items-center">

            <a
              href="https://instagram.com/Cheek__Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:scale-110 transition"
            >
              <img src="/insta.svg" className="w-10 h-10" />
              <span className="text-xs text-white/60">اینستاگرام</span>
            </a>

            <a
              href="https://wa.me/989021221311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:scale-110 transition"
            >
              <img src="/whatsapp.svg" className="w-10 h-10" />
              <span className="text-xs text-white/60">واتساپ</span>
            </a>

            <a
              href="tel:09021221311"
              className="flex flex-col items-center gap-2 hover:scale-110 transition"
            >
              <img
                src="/call.svg"
                className="w-10 h-10 invert brightness-0"
              />
              <span className="text-xs text-white/60">تماس</span>
            </a>

          </div>
        </motion.div>

      </div>

      {/* ===== BOTTOM ===== */}
      <div className="relative z-10 mt-20 text-center text-white/30 text-xs tracking-[0.3em]">
        © CHEEK STUDIO • CINEMATIC WEDDING FILMS
      </div>
    </footer>
  );
}