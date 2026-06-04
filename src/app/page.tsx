// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import WhyUs from "@/components/WhyUs";
import Navbar from "@/components/Navbar";
import PackagesShowcase from "@/components/PackagesShowcase";

export default function Home() {
  return (
    <main className="bg-[#F7F4EF] text-black overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <div id="hero">
        <Hero />
      </div>

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* GALLERY */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* VIDEO */}
      <div id="videos">
        <VideoShowcase />
      </div>

      {/* WHY US */}
      <div id="whyus">
        <WhyUs />
      </div>

      {/* PACKAGES */}
      <div id="packages">
        <PackagesShowcase />
      </div>

    </main>
  );
}