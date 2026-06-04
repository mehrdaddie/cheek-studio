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

      {/* Floating nav (not blocking hero) */}
      <Navbar />

      {/* HERO */}
      <Hero />

      <About />

      {/* GALLERY */}
      <Gallery />

      {/* VIDEO */}
      <VideoShowcase />

      {/* WHY US */}
      <WhyUs />

      {/* BOOKING CTA */}
      <section className="py-40 text-center px-6 bg-black text-white">
        <h2 className="text-4xl md:text-6xl font-light">
          Let’s create something timeless
        </h2>

        <p className="mt-6 text-white/60">
          Limited bookings per month to maintain quality.
        </p>

         {/* Packages Showcase */}
      <PackagesShowcase />
        
      </section>

    </main>
  );
}