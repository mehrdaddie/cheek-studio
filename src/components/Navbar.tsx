"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: "نمونه کارها", href: "#gallery" },
    { name: "فیلم‌ها", href: "#videos" },
    { name: "لوکیشن‌ها", href: "/locations" },
    { name: "پکیج‌ها", href: "/packages" },
    { name: "تماس سریع", href: "#booking" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="font-casko text-3xl text-white">
          Cheek Studio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-white font-graphik">
          {menuItems.map((item) => (
            <li key={item.name} className="hover:underline transition">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 text-white flex flex-col gap-4 p-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-graphik"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}