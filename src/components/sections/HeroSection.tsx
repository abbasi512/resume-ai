// src/components/sections/HeroSection.tsx
"use client";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-[760px] mx-auto px-8 pt-20 pb-16 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fffbe8] border border-accent-gold/30 text-xs font-medium text-[#8b6f1a] mb-7">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold" />
        Powered by Claude AI
      </div>

      {/* Headline */}
      <h1 className="font-serif text-[56px] leading-[1.1] text-brand-900 mb-5 tracking-[-0.5px]">
        Your resume,{" "}
        <em className="not-italic text-accent-purple">reimagined</em>
        <br />
        by AI
      </h1>

      {/* Sub-copy */}
      <p className="text-lg text-gray-500 leading-[1.65] mb-9 font-light">
        Land interviews 3× faster. Our AI writes tailored, ATS-optimized
        resumes for your target role in seconds — not hours.
      </p>

      {/* CTAs */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          onClick={() => scrollTo("builder")}
          className="px-8 py-3.5 rounded-[10px] text-[15px] font-medium bg-brand-900 text-white hover:bg-[#2d2d4e] transition-colors"
        >
          Build my resume free →
        </button>
        <button className="px-8 py-3.5 rounded-[10px] text-[15px] font-medium border border-black/10 text-brand-900 hover:bg-gray-50 transition-colors">
          See examples
        </button>
      </div>

      {/* Social proof */}
      <p className="mt-8 text-xs text-gray-400 font-normal">
        Trusted by <span className="text-brand-900 font-medium">12,000+</span> job seekers · 4.9★ rating
      </p>
    </section>
  );
}
