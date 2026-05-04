// src/components/sections/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-black/10 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 font-serif text-[22px] text-brand-900">
        <span className="relative inline-block w-7 h-7 bg-accent-gold rounded-md">
          <span className="absolute inset-[5px] border-2 border-brand-900 rounded-sm" />
        </span>
        Resumé.ai
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-7">
        {[
          { label: "Features", id: "features" },
          { label: "Builder", id: "builder" },
          { label: "Pricing", id: "pricing" },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-sm text-gray-500 hover:text-brand-900 transition-colors duration-200 font-normal"
          >
            {label}
          </button>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2.5">
        <button className="px-[18px] py-2 text-[13px] border border-black/10 rounded-lg bg-transparent hover:bg-gray-50 transition-colors font-medium text-brand-900">
          Sign in
        </button>
        <button
          onClick={() => scrollTo("builder")}
          className="px-[18px] py-2 text-[13px] bg-brand-900 text-white rounded-lg font-medium hover:bg-[#2d2d4e] transition-colors"
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
