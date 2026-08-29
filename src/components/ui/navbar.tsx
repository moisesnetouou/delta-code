"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import { LanguageToggle } from "./language-toggle";

const sectionIds = [
  "about",
  "how-i-work",
  "timeline",
  "projects",
  "skills",
  "contact",
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "how-i-work", label: t.nav.howIWork },
    { id: "timeline", label: t.nav.journey },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = sectionIds.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(id === "hero" ? "/" : `/#${id}`);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050508]/95 md:bg-[#050508]/90 md:backdrop-blur-md border-b border-[#2a2a35]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-3 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="text-lg md:text-xl font-bold text-white hover:text-[#00d9ff] transition-colors"
            >
              <span className="text-[#00d9ff]">Δ</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-[#00d9ff] bg-[#00d9ff]/10"
                      : "text-[#999] hover:text-white hover:bg-[#1a1a25]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <LanguageToggle className="ml-2" />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.nav.openMenu}
              className="md:hidden p-2 text-white hover:text-[#00d9ff] transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t.nav.closeMenu}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#050508] border-l border-[#2a2a35] p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-white">
                  <span className="text-[#00d9ff]">Δ</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={t.nav.closeMenu}
                  className="p-2 text-[#999] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "text-[#00d9ff] bg-[#00d9ff]/10"
                        : "text-[#999] hover:text-white hover:bg-[#1a1a25]"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 flex justify-start">
                <LanguageToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
