"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const SCROLL_LINKS = [
  { label: "Features", id: "features" },
  { label: "Builder",  id: "builder"  },
  { label: "Pricing",  id: "pricing"  },
];

const PAGE_LINKS = [
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigated away from home — go home then scroll
      window.location.href = `/#${id}`;
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm border-b border-black/[0.08]" : "border-b border-black/[0.06]"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[60px]">

        {/* Logo */}
        <Logo size="md" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {SCROLL_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-[13px] text-gray-500 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </button>
          ))}
          {PAGE_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-[13px] text-gray-500 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollTo("builder")}
            className="px-4 py-2 text-[13px] bg-brand-900 text-white rounded-lg font-medium hover:bg-[#2d2d4e] transition-colors"
          >
            Build free →
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
        <div className="md:hidden border-t border-black/[0.06] bg-white px-6 py-4 flex flex-col gap-1">
          {SCROLL_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left px-3 py-2.5 text-[14px] text-gray-600 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </button>
          ))}
          {PAGE_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-[14px] text-gray-600 hover:text-brand-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
          <div className="border-t border-black/[0.06] mt-2 pt-3">
            <button
              onClick={() => scrollTo("builder")}
              className="w-full py-2.5 text-[14px] bg-brand-900 text-white rounded-lg font-medium hover:bg-[#2d2d4e] transition-colors"
            >
              Build free →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
