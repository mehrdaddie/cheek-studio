"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [onHero, setOnHero] = useState(true);

  const menuItems = [
    { name: "خانه", href: "#hero" },
    { name: "درباره ما", href: "#about" },
    { name: "نمونه کارها", href: "#gallery" },
    { name: "فیلم‌ها", href: "#videos" },
    { name: "چرا ما", href: "#whyus" },
    { name: "لوکیشن‌ها", href: "/locations" },
    { name: "پکیج‌ها", href: "/packages" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "gallery",
        "videos",
        "whyus",
      ];

      let current = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);

        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.3) {
          current = id;
        }
      }

      setActiveSection(current);

      const hero = document.getElementById("hero");

      if (hero) {
        const heroBottom = hero.offsetHeight - 120;
        setOnHero(window.scrollY < heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            onHero
            ? "backdrop-blur-xl bg-black/10 border-b border-white/10"
           : "backdrop-blur-xl bg-[#F7F4EF]/80 border-b border-black/10"
          }
        `}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">

          <a
            href="#hero"
            className={`
              font-casko
              text-3xl
              md:text-4xl
              transition-colors
              duration-500
              ${onHero ? "text-white" : "text-black"}
            `}
          >
            Cheek Studio
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`
              transition-colors
              duration-500
              ${onHero ? "text-white" : "text-black"}
            `}
          >
            <Menu size={34} />
          </button>

        </div>
      </nav>

      {/* FULLSCREEN MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-[200]
              backdrop-blur-2xl
              bg-[#F7F4EF]/40
            "
          >
            {/* CLOSE BUTTON */}

            <div className="absolute top-8 left-8">
              <button
                onClick={() => setOpen(false)}
                className="text-black"
              >
                <X size={34} />
              </button>
            </div>

            {/* MENU ITEMS */}

            <div className="h-full flex flex-col items-center justify-center">

              <div className="flex flex-col items-center gap-5">

                {menuItems.map((item, index) => {
                  const isActive =
                    item.href.startsWith("#") &&
                    activeSection === item.href.replace("#", "");

                  if (item.href.startsWith("#")) {
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        className={`
                          font-irancell-bold
                          text-5xl
                          md:text-7xl
                          transition-all
                          duration-300
                          hover:opacity-50
                          ${
                            isActive
                              ? "opacity-100 text-black"
                              : "opacity-70 text-black"
                          }
                        `}
                      >
                        {item.name}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          font-irancell-bold
                          text-5xl
                          md:text-7xl
                          opacity-70
                          text-black
                          hover:opacity-100
                          transition-all
                          duration-300
                        "
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div
                className="
                  absolute
                  bottom-10
                  font-casko
                  tracking-[0.4em]
                  text-sm
                  text-black
                "
              >
                CHEEK STUDIO
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}