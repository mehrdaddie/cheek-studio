"use client";

import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import SakuraPetals from "@/components/SakuraPetals";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import WhyUs from "@/components/WhyUs";
import PackagesShowcase from "@/components/PackagesShowcase";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main className="bg-[#F7F4EF] text-black overflow-x-hidden">
      <SmoothScroll />
      <SakuraPetals />

      <Hero />
      <About />
      <Gallery />
      <VideoShowcase />
      <WhyUs />
      <PackagesShowcase />
      <Footer />
    </main>
  );
}