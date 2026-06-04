"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "خانه", href: "#hero" },
    { name: "درباره ما", href: "#about" },
    { name: "نمونه کارها", href: "#gallery" },
    { name: "فیلم‌ها", href: "#videos" },
    { name: "لوکیشن‌ها", href: "/locations", glow: true },
    { name: "پکیج‌ها", href: "/packages", glow: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "gallery", "videos", "whyus"];
      let current = "hero";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (item: any) => {
    const baseClass =
      "relative px-3 py-2 transition-all duration-300 font-irancell font-bold";

    const glowClass =
      item.glow
        ? "hover:scale-105 hover:text-black"
        : "hover:text-black";

    const glowEffect =
      item.glow
        ? "before:content-[''] before:absolute before:inset-0 before:bg-yellow-300 before:blur-xl before:opacity-0 hover:before:opacity-40 before:transition"
        : "";

    const active =
      activeSection === item.href.replace("#", "") && item.href.startsWith("#")
        ? "text-black"
        : "text-gray-700";

    if (item.href.startsWith("#")) {
      return (
        <a href={item.href} className={`${baseClass} ${glowClass} ${glowEffect} ${active}`}>
          {item.name}
        </a>
      );
    }

    return (
      <Link href={item.href} className={`${baseClass} ${glowClass} ${glowEffect}`}>
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* LOGO → scroll to top */}
        <a
          href="#hero"
          className="font-casko text-3xl text-black cursor-pointer"
        >
          Cheek Studio
        </a>

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              {renderLink(item)}
            </li>
          ))}
        </ul>

        {/* MOBILE */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 flex flex-col gap-4 p-6 font-irancell font-bold">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl text-gray-700 hover:text-black transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}