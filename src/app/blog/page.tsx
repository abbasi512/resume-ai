import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Resume Tips & Career Advice Blog",
  description:
    "Free resume tips, ATS guides, and career advice to help you land more interviews. Learn how to write the perfect resume in 2026.",
  alternates: { canonical: "/blog" },
};

const POSTS = [
  {
    slug: "free-resume-builder-no-sign-up",
    title: "Free Resume Builder with No Sign Up — Build & Download in Minutes",
    description:
      "Looking for a free resume generator with no account required? Here's everything you need to build, download, and send a professional resume today.",
    tag: "Tools",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    slug: "what-is-ats",
    title: "What Is ATS? How Applicant Tracking Systems Work (And How to Beat Them)",
    description:
      "75% of resumes are rejected before a human ever reads them. Learn exactly how ATS software scores your resume and what you can do to rank higher.",
    tag: "ATS Guide",
    date: "May 2026",
    readTime: "7 min read",
  },
  {
    slug: "how-to-write-resume-bullet-points",
    title: "How to Write Resume Bullet Points That Actually Get You Interviews",
    description:
      "Most bullet points are weak. Learn the proven formula to write quantified, ATS-friendly bullet points that make hiring managers stop and read.",
    tag: "Resume Writing",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    slug: "resume-mistakes-to-avoid",
    title: "10 Resume Mistakes That Are Costing You Interviews (And How to Fix Them)",
    description:
      "76% of resumes are eliminated because of simple, fixable mistakes. Find out what they are and how to make sure yours doesn't have them.",
    tag: "Resume Tips",
    date: "May 2026",
    readTime: "6 min read",
  },
  {
    slug: "ai-resume-builder-guide",
    title: "AI Resume Builder: How It Works and Why Job Seekers Are Using It in 2026",
    description:
      "AI resume builders can write your bullet points, optimise for ATS, and tailor your resume to any job in seconds. Here's exactly how they work.",
    tag: "AI Tools",
    date: "May 2026",
    readTime: "5 min read",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Tools":         "bg-blue-50 text-blue-700",
  "ATS Guide":     "bg-amber-50 text-amber-700",
  "Resume Writing":"bg-violet-50 text-violet-700",
  "Resume Tips":   "bg-rose-50 text-rose-700",
  "AI Tools":      "bg-emerald-50 text-emerald-700",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="border-b border-black/[0.06] pt-20 pb-14 px-6 bg-gradient-to-b from-violet-50/40 to-white">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-4">Blog</p>
            <h1 className="font-serif text-[42px] leading-tight text-brand-900 mb-4">
              Resume tips & career advice
            </h1>
            <p className="text-[16px] text-gray-500 leading-[1.7] max-w-[500px] mx-auto">
              Practical guides to help you write a better resume, beat ATS filters,
              and land more interviews — all free.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-6 py-14">
          <div className="max-w-[860px] mx-auto grid gap-5">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border border-black/[0.08] hover:border-accent-purple/30 hover:bg-accent-purple-light/30 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[post.tag]}`}>
                      {post.tag}
                    </span>
                    <span className="text-[11px] text-gray-400">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-[17px] font-semibold text-brand-900 mb-2 leading-snug group-hover:text-accent-purple transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13.5px] text-gray-500 leading-[1.65]">{post.description}</p>
                </div>
                <div className="flex items-center flex-shrink-0">
                  <span className="text-[13px] font-medium text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-16">
          <div className="max-w-[860px] mx-auto text-center border-t border-black/[0.06] pt-12">
            <p className="text-[15px] text-gray-500 mb-4">Ready to put these tips to work?</p>
            <Link
              href="/#builder"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20"
            >
              Build my resume free →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
