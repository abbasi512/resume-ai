import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Resume.ai — built by Tanzeel Abbas. Our mission is to make professional, ATS-optimized resumes accessible to every job seeker.",
  alternates: { canonical: "/about" },
};

const STATS = [
  { value: "12,000+", label: "Resumes built" },
  { value: "4.9★",   label: "Average rating" },
  { value: "3×",     label: "More interviews" },
  { value: "Free",   label: "Always to start" },
];

const VALUES = [
  {
    title: "Accessible to everyone",
    body: "A great resume shouldn't require hiring an expensive consultant. We built Resume.ai so anyone — from fresh graduates to senior professionals — can create a polished, interview-winning resume without spending a dime.",
  },
  {
    title: "Honest AI, real results",
    body: "We use advanced AI to write bullet points that accurately reflect your experience. No fabrication, no keyword stuffing — just clear, compelling language that gets past ATS filters and impresses hiring managers.",
  },
  {
    title: "Your data stays yours",
    body: "We don't sell your information, we don't require an account to use the builder, and we don't store your resume on our servers unless you ask us to. Your career history is private.",
  },
  {
    title: "Built by job seekers, for job seekers",
    body: "We know how stressful the job hunt is. Every feature we build is designed to save you time, reduce anxiety, and put you in the best possible position to land that next role.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="border-b border-black/[0.06] pt-20 pb-16 px-6 bg-gradient-to-b from-violet-50/40 to-white">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-4">
              About us
            </p>
            <h1 className="font-serif text-[44px] leading-tight text-brand-900 mb-5 tracking-[-0.5px]">
              Making great resumes<br />
              <em className="not-italic bg-gradient-to-r from-accent-purple to-blue-500 bg-clip-text text-transparent">
                accessible to everyone
              </em>
            </h1>
            <p className="text-[16px] text-gray-500 leading-[1.7] max-w-[520px] mx-auto">
              Resume.ai was built on one belief: the quality of your resume shouldn't depend
              on how much money you can spend. We built Resume.ai to level the playing field.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-black/[0.06] px-6 py-12">
          <div className="max-w-[860px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-[36px] font-bold text-brand-900 leading-none mb-1">{value}</div>
                <div className="text-[13px] text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-16 border-b border-black/[0.06]">
          <div className="max-w-[860px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">Our mission</p>
              <h2 className="font-serif text-[32px] text-brand-900 leading-tight mb-4">
                Land the job you deserve
              </h2>
              <p className="text-[15px] text-gray-500 leading-[1.7] mb-4">
                The average job posting receives over 250 applications. Most are filtered out by
                Applicant Tracking Systems before a human ever reads them. Resume.ai writes bullet
                points that are both ATS-optimised and genuinely compelling to hiring managers.
              </p>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                You describe your experience in plain English. We turn it into the kind of concise,
                impact-driven language that gets you shortlisted — in seconds, not hours.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 border border-accent-purple-border">
              <div className="font-serif text-[22px] text-brand-900 mb-3 leading-snug">
                &ldquo;We believe every person deserves a resume that truly represents their potential.&rdquo;
              </div>
              <div className="text-[13px] text-gray-400 font-medium">— The Resume.ai team</div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16 border-b border-black/[0.06]">
          <div className="max-w-[860px] mx-auto">
            <div className="text-center mb-10">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">What we believe</p>
              <h2 className="font-serif text-[32px] text-brand-900 leading-tight">Our values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {VALUES.map(({ title, body }) => (
                <div key={title} className="p-6 rounded-2xl border border-black/[0.08] hover:border-accent-purple/30 hover:bg-accent-purple-light/50 transition-all">
                  <h3 className="text-[16px] font-semibold text-brand-900 mb-2">{title}</h3>
                  <p className="text-[13.5px] text-gray-500 leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator */}
        <section className="px-6 py-16 border-b border-black/[0.06] bg-gray-50/60">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">Creator</p>
            <h2 className="font-serif text-[32px] text-brand-900 leading-tight mb-4">Built by Tanzeel Abbas</h2>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[540px] mx-auto mb-8">
              Resume.ai was designed and developed by Tanzeel Abbas with one goal in mind — making
              professional, ATS-optimized resumes accessible to everyone. The AI writing engine
              generates accurate, nuanced content with no hallucinations and no invented credentials.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-gold/40 bg-white text-[13px] font-medium text-[#8b6f1a]">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              Built by Tanzeel Abbas
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-serif text-[32px] text-brand-900 mb-4 leading-tight">
              Ready to build your resume?
            </h2>
            <p className="text-[15px] text-gray-500 mb-8">
              It takes less than 5 minutes. No sign-up required.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/#builder"
                className="px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20"
              >
                Build my resume free →
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-[10px] text-[15px] font-medium border border-black/10 text-brand-900 hover:bg-gray-50 transition-all"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
