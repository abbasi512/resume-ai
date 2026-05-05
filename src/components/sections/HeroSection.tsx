"use client";

const STATS = [
  { value: "12,000+", label: "resumes built" },
  { value: "4.9★", label: "average rating" },
  { value: "3×", label: "more interviews" },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-20 px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/40 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-violet-100/30 to-transparent pointer-events-none" />

      <div className="relative max-w-[760px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-accent-gold/40 shadow-sm text-[12px] font-medium text-[#8b6f1a] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
          Powered by Claude AI · Built for job seekers
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[54px] leading-[1.08] text-brand-900 mb-5 tracking-[-0.5px]">
          Your resume,{" "}
          <em className="not-italic bg-gradient-to-r from-accent-purple to-blue-500 bg-clip-text text-transparent">
            reimagined
          </em>
          <br />
          by AI
        </h1>

        {/* Sub-copy */}
        <p className="text-[17px] text-gray-500 leading-[1.7] mb-10 font-light max-w-[560px] mx-auto">
          Land interviews 3× faster. Describe your experience in plain English — our AI turns it into
          ATS-optimized bullet points tailored to your target role.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <button
            onClick={() => scrollTo("builder")}
            className="group px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20 hover:shadow-xl hover:shadow-brand-900/25 hover:-translate-y-0.5"
          >
            Build my resume free
            <span className="ml-1.5 group-hover:translate-x-0.5 inline-block transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="px-8 py-3.5 rounded-[10px] text-[15px] font-medium border border-black/10 text-brand-900 hover:bg-gray-50 hover:border-black/20 transition-all"
          >
            See how it works
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-[20px] font-serif font-bold text-brand-900">{value}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
