"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // مهم برای SSR mismatch

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="py-40 px-6 flex flex-col items-center"
    >
      <div className="max-w-4xl text-center mb-20">
        

        <h2 className="font-casko text-4xl md:text-5xl lg:text-5xl mt-8 leading-[1.3]">
          We don’t just capture weddings
          <br />
          we craft unforgetable cinematic memories
        </h2>
      </div>

      <div className="relative max-w-4xl w-full rounded-[40px] border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-10 md:p-16 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
        <h3 className="text-3xl md:text-4xl text-center mb-8 font-bold">
          About Us
        </h3>

        <p className="text-center text-gray-700 leading-loose text-lg md:text-xl">
          ما فقط مراسم شما را ثبت نمی‌کنیم،
          بلکه خاطرات ماندگار سینمایی خلق می‌کنیم.
          <br />
          رویکرد ما ترکیبی از احساس، نور، جزئیات و داستان‌گویی ماندگار است.
          <br />
          هر فریم با دقت طراحی می‌شود تا زیبایی واقعی لحظه‌ها را برای همیشه حفظ کند.
        </p>
      </div>
    </motion.section>
  );
}