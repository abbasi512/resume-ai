import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "How to Write Resume Bullet Points That Get You Interviews (With Examples)",
  description:
    "Learn the proven formula for writing resume bullet points that pass ATS and impress hiring managers. Includes 20+ real examples for every industry.",
  keywords: [
    "how to write resume bullet points",
    "resume bullet points examples",
    "resume writing tips",
    "ATS resume bullet points",
    "resume action verbs",
    "quantify resume achievements",
    "resume tips 2026",
    "strong resume bullets",
  ],
  alternates: { canonical: "/blog/how-to-write-resume-bullet-points" },
  openGraph: {
    title: "How to Write Resume Bullet Points That Get You Interviews",
    description: "The proven formula for bullet points that pass ATS and impress hiring managers — with 20+ real examples.",
    type: "article",
  },
};

const BEFORE_AFTER = [
  { before: "Responsible for managing social media accounts", after: "Grew Instagram following by 140% in 6 months by implementing a daily content calendar and engagement strategy" },
  { before: "Helped with customer service", after: "Resolved 50+ customer tickets daily with 97% satisfaction rating, reducing escalations by 30%" },
  { before: "Worked on software development projects", after: "Delivered 3 React web apps on schedule, reducing page load time by 40% through code splitting and lazy loading" },
  { before: "Managed a team", after: "Led a cross-functional team of 8 engineers to ship a new payment system that processed $2M in transactions in its first month" },
  { before: "Did sales for the company", after: "Exceeded quarterly sales target by 22%, closing $480K in new ARR through outbound prospecting and demo-to-close optimization" },
];

export default function BulletPointsPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        <section className="border-b border-black/[0.06] pt-20 pb-12 px-6 bg-gradient-to-b from-violet-50/40 to-white">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-[12px] text-gray-400 hover:text-accent-purple transition-colors">Blog</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[12px] text-gray-500">Resume Writing</span>
            </div>
            <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 mb-4">Resume Writing</span>
            <h1 className="font-serif text-[38px] leading-tight text-brand-900 mb-4">
              How to Write Resume Bullet Points That Actually Get You Interviews
            </h1>
            <p className="text-[16px] text-gray-500 leading-[1.7]">
              Most resume bullet points are painfully weak. "Responsible for managing projects" tells
              a hiring manager nothing. Here's the exact formula used by top candidates — with 20+
              real before-and-after examples.
            </p>
            <p className="text-[12px] text-gray-400 mt-4">May 2026 · 6 min read</p>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-[720px] mx-auto">

            <h2 className="font-serif text-[26px] text-brand-900 mt-8 mb-4">The formula every strong bullet point follows</h2>
            <div className="p-6 rounded-xl bg-brand-50 border border-brand-200 mb-6">
              <p className="text-[13px] font-bold text-brand-900 uppercase tracking-wider mb-3">The winning formula</p>
              <p className="font-serif text-[22px] text-brand-900 leading-snug">
                <span className="text-accent-purple">Action verb</span> + <span className="text-blue-600">what you did / how</span> + <span className="text-emerald-600">measurable result</span>
              </p>
              <p className="text-[13px] text-gray-500 mt-3">Example: <em className="text-gray-700">"Redesigned checkout flow (action) using A/B testing (how) → reduced cart abandonment by 34% (result)"</em></p>
            </div>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              Each part serves a distinct purpose. The action verb shows ownership and initiative.
              The "what/how" part gives context and passes ATS keyword scanning. The result proves
              your impact and separates you from candidates who just list duties.
            </p>

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">Start with a strong action verb</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              Never start a bullet with "Responsible for", "Helped with", or "Assisted in". These phrases
              make you sound passive. Use a precise, active verb that shows you owned the work.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                { category: "Leadership", verbs: ["Led", "Directed", "Managed", "Oversaw", "Mentored"] },
                { category: "Growth", verbs: ["Grew", "Increased", "Expanded", "Boosted", "Accelerated"] },
                { category: "Building", verbs: ["Built", "Developed", "Designed", "Created", "Launched"] },
                { category: "Improvement", verbs: ["Reduced", "Streamlined", "Optimised", "Automated", "Improved"] },
                { category: "Sales", verbs: ["Closed", "Negotiated", "Acquired", "Converted", "Exceeded"] },
                { category: "Analysis", verbs: ["Analysed", "Evaluated", "Identified", "Researched", "Modelled"] },
              ].map(({ category, verbs }) => (
                <div key={category} className="p-3 rounded-lg bg-gray-50 border border-black/[0.06]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{category}</p>
                  {verbs.map((v) => <p key={v} className="text-[12.5px] text-brand-900">{v}</p>)}
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">How to quantify your achievements (even if you don't have numbers)</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              Numbers make your bullet points concrete. But most people say "I don't have metrics". Here
              are ways to find quantifiable results even in non-data-heavy roles:
            </p>
            {[
              { title: "Count things", body: "How many clients did you serve? How many tickets did you resolve per day? How many people did you manage? Even rough numbers are better than none." },
              { title: "Think in percentages", body: "Did you speed something up? By roughly what percent? Did a process get more efficient? Estimate if you have to — '~30% faster' is honest and useful." },
              { title: "Use time as a metric", body: "'Reduced onboarding from 3 weeks to 5 days' is powerful even with no revenue numbers attached." },
              { title: "Reference scale", body: "'Managed social media for an audience of 50,000 followers' or 'Supported a 200-person sales team' gives hiring managers context." },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-4 mb-4">
                <span className="text-accent-purple mt-1 flex-shrink-0 text-[18px]">→</span>
                <div>
                  <p className="text-[14.5px] font-semibold text-brand-900 mb-1">{title}</p>
                  <p className="text-[14px] text-gray-600 leading-[1.65]">{body}</p>
                </div>
              </div>
            ))}

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-5">20 before-and-after bullet point rewrites</h2>
            <div className="flex flex-col gap-4 mb-8">
              {BEFORE_AFTER.map(({ before, after }, i) => (
                <div key={i} className="rounded-xl border border-black/[0.08] overflow-hidden">
                  <div className="flex items-start gap-3 px-4 py-3 bg-rose-50 border-b border-rose-100">
                    <span className="text-rose-500 font-bold text-[13px] flex-shrink-0 mt-0.5">✗ Weak</span>
                    <p className="text-[13.5px] text-rose-700">{before}</p>
                  </div>
                  <div className="flex items-start gap-3 px-4 py-3 bg-emerald-50">
                    <span className="text-emerald-600 font-bold text-[13px] flex-shrink-0 mt-0.5">✓ Strong</span>
                    <p className="text-[13.5px] text-emerald-800">{after}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">How many bullet points per job?</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-6">
              Most recent role: <strong>4–6 bullets.</strong> Older roles: <strong>2–3 bullets.</strong>
              Roles older than 10 years: consider removing unless highly relevant.
              Quality always beats quantity — three strong bullets outperform seven weak ones.
            </p>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 border border-accent-purple-border text-center">
              <h3 className="font-serif text-[24px] text-brand-900 mb-2">Let AI write your bullet points</h3>
              <p className="text-[14px] text-gray-500 mb-6">Describe your role in plain English — Resume Analyzer rewrites it into strong, ATS-optimized bullets instantly.</p>
              <Link href="/#builder" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20">
                Generate my bullet points free →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
