"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "Builder", id: "builder" },
  { label: "Pricing", id: "pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm border-b border-black/8" : "border-b border-black/[0.06]"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[60px]">
        {/* Logo */}
        <div className="flex items-center gap-2 font-serif text-[20px] text-brand-900 select-none">
          <div className="relative w-7 h-7 bg-accent-gold rounded-[6px] flex items-center justify-center">
            <div className="absolute inset-[5px] border-2 border-brand-900 rounded-[2px]" />
          </div>
          Resumé.ai
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-[13px] text-gray-500 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-brand-900 transition-colors">
            Sign in
          </button>
          <button
            onClick={() => scrollTo("builder")}
            className="px-4 py-2 text-[13px] bg-brand-900 text-white rounded-lg font-medium hover:bg-[#2d2d4e] transition-colors"
          >
            Get started free →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-brand-900 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/8 bg-white px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left px-3 py-2.5 text-[14px] text-gray-600 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </button>
          ))}
          <div className="border-t border-black/8 mt-2 pt-3 flex flex-col gap-2">
            <button className="text-left px-3 py-2.5 text-[14px] text-gray-600 font-medium">Sign in</button>
            <button
              onClick={() => scrollTo("builder")}
              className="w-full py-2.5 text-[14px] bg-brand-900 text-white rounded-lg font-medium"
            >
              Get started free →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
