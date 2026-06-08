"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [onHero, setOnHero] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "خانه", href: "#hero" },
    { name: "درباره ما", href: "#about" },
    { name: "نمونه کارها", href: "#gallery" },
    { name: "فیلم‌ها", href: "#videos" },
    { name: "چرا ما", href: "#whyus" },
    { name: "لوکیشن‌ها", href: "/locations" },
    { name: "پکیج‌ها", href: "/packages" },
  ];

  const handleClick = (item: any) => {
    setOpen(false);
    if (item.href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + item.href);
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    router.push(item.href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "gallery", "videos", "whyus"];
      let current = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.3) {
          current = id;
        }
      }

      setActiveSection(current);

      const hero = document.getElementById("hero");
      if (hero) {
        setOnHero(window.scrollY < hero.offsetHeight - 120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = onHero ? "#fff" : "#000";
  const navBg = onHero ? "bg-black/10 border-b border-white/10" : "bg-[#F7F4EF]/80 border-b border-black/10";

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${navBg}`}>
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          {/* LOGO */}
          <button
            onClick={() => router.push("/#hero")}
            style={{ color: textColor }}
            className="font-casko text-3xl md:text-4xl transition-colors duration-500"
          >
            Cheek Studio
          </button>

          {/* MENU BUTTON */}
          <button onClick={() => setOpen(true)}>
            <Menu size={34} color={textColor} />
          </button>
        </div>
      </nav>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[200] backdrop-blur-2xl ${onHero ? "bg-black/40" : "bg-white/40"}`}
          >
            <div className="absolute top-8 left-8">
              <button onClick={() => setOpen(false)}>
                <X size={34} color={textColor} />
              </button>
            </div>

            <div className="h-full flex flex-col items-center justify-center gap-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`font-irancell-bold text-5xl md:text-7xl ${
                    item.href.startsWith("#") &&
                    activeSection === item.href.replace("#", "")
                      ? "opacity-100"
                      : "opacity-70"
                  }`}
                  style={{ color: textColor }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div
              className="absolute bottom-10 w-full text-center font-casko tracking-[0.4em] text-sm"
              style={{ color: textColor }}
            >
              CHEEK STUDIO
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}