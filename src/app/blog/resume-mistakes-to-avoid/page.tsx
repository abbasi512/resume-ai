import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "10 Resume Mistakes That Are Costing You Interviews (And How to Fix Them)",
  description:
    "76% of resumes are eliminated because of simple, fixable mistakes. Find out the top 10 resume mistakes hiring managers see and exactly how to avoid them.",
  keywords: [
    "resume mistakes to avoid",
    "common resume mistakes",
    "resume tips",
    "how to improve resume",
    "why is my resume not getting interviews",
    "resume red flags",
    "resume writing mistakes",
    "job application tips 2026",
  ],
  alternates: { canonical: "/blog/resume-mistakes-to-avoid" },
  openGraph: {
    title: "10 Resume Mistakes That Are Costing You Interviews",
    description: "76% of resumes are eliminated because of simple mistakes. Find out what they are and how to fix them.",
    type: "article",
  },
};

const MISTAKES = [
  {
    n: "01",
    title: "Using a generic resume for every application",
    problem: "Sending the same resume to 50 different jobs is one of the biggest mistakes job seekers make. ATS systems rank you against the specific keywords in each job description. A generic resume matches few of them.",
    fix: "Tailor your resume for every application. At minimum, adjust your headline and bullet points to reflect the language in the job description. It takes 10 extra minutes and dramatically increases your ATS score.",
  },
  {
    n: "02",
    title: "Writing job duties instead of achievements",
    problem: "'Responsible for managing social media accounts' tells a recruiter nothing. Everyone with that job managed social media. What you actually accomplished is what matters.",
    fix: "Rewrite every bullet as an achievement: Action verb + what you did + measurable result. 'Grew Instagram following by 140% in 6 months through daily posting strategy and engagement campaigns.'",
  },
  {
    n: "03",
    title: "Using an ATS-unfriendly template",
    problem: "Beautiful multi-column templates with tables, text boxes, and icons look great to humans but confuse ATS parsers. The system may scramble your information or miss it entirely, tanking your ranking.",
    fix: "Use a clean, single-column template with standard section headings. Avoid Canva resumes for job applications — most are ATS disasters despite looking polished.",
  },
  {
    n: "04",
    title: "Typos and grammatical errors",
    problem: "76% of hiring managers eliminate candidates for even one or two typos. It signals carelessness — which is particularly damaging for any role requiring attention to detail.",
    fix: "Read your resume backwards (forces you to read each word). Then paste it into Grammarly. Then have someone else read it. Never submit a resume you've only proofread yourself.",
  },
  {
    n: "05",
    title: "Resume is too long (or too short)",
    problem: "A 4-page resume for a mid-level candidate suggests poor communication skills. A half-page resume for a 10-year career signals a lack of substance.",
    fix: "One page for under 10 years of experience. Two pages maximum for senior roles. Cut roles older than 15 years unless directly relevant. Every line must earn its place.",
  },
  {
    n: "06",
    title: "Missing keywords from the job description",
    problem: "ATS systems scan for exact keyword matches. If the job description says 'stakeholder management' and your resume says 'working with stakeholders', you may score lower or fail the filter entirely.",
    fix: "Read the job description carefully and mirror its language. If it says 'Python', say 'Python' — not 'scripting language'. If it says 'cross-functional collaboration', use that exact phrase.",
  },
  {
    n: "07",
    title: "Putting contact information in a header or footer",
    problem: "Many ATS systems skip headers and footers entirely. Your phone number and email may never be parsed, making it impossible for the employer to contact you even if you rank well.",
    fix: "Place all contact information in the main body of your resume — name, email, phone, LinkedIn, and location in the first section, not in document headers.",
  },
  {
    n: "08",
    title: "Vague or buzzword-heavy summaries",
    problem: "'Results-driven professional with a passion for excellence' — every recruiter has read this a thousand times. It says nothing and wastes prime real estate at the top of your resume.",
    fix: "Write a 2–3 sentence summary that states your role, years of experience, and one or two specific, quantifiable achievements. Make it specific enough that it could only be about you.",
  },
  {
    n: "09",
    title: "Inconsistent formatting",
    problem: "Mixing date formats (Jan 2024 vs 01/2024), inconsistent use of bold, or varying bullet styles make your resume look unprofessional and harder to skim.",
    fix: "Pick one format for everything and apply it consistently. Dates should all match. Bullets should all be the same style. Spacing between sections should be uniform.",
  },
  {
    n: "10",
    title: "No skills section (or a skills section that's too generic)",
    problem: "ATS systems often scan specifically for a Skills section. If you don't have one, or if it just says 'Microsoft Office, Communication, Teamwork', you're missing an easy keyword opportunity.",
    fix: "Create a dedicated Skills section with specific, relevant hard skills: programming languages, tools, platforms, methodologies, certifications. Soft skills belong in your bullet points, demonstrated through examples.",
  },
];

export default function ResumeMistakesPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        <section className="border-b border-black/[0.06] pt-20 pb-12 px-6 bg-gradient-to-b from-rose-50/40 to-white">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-[12px] text-gray-400 hover:text-accent-purple transition-colors">Blog</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[12px] text-gray-500">Resume Tips</span>
            </div>
            <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 mb-4">Resume Tips</span>
            <h1 className="font-serif text-[38px] leading-tight text-brand-900 mb-4">
              10 Resume Mistakes That Are Costing You Interviews (And How to Fix Them)
            </h1>
            <p className="text-[16px] text-gray-500 leading-[1.7]">
              76% of resumes are eliminated because of simple, completely fixable mistakes. If you're
              applying to jobs and not hearing back, there's a good chance your resume has at least
              one of these problems. Here's how to identify and fix all of them.
            </p>
            <p className="text-[12px] text-gray-400 mt-4">May 2026 · 6 min read</p>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-[720px] mx-auto">

            <div className="flex flex-col gap-8">
              {MISTAKES.map(({ n, title, problem, fix }) => (
                <div key={n} className="border border-black/[0.08] rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-black/[0.06]">
                    <span className="font-serif text-[28px] font-bold text-gray-200">{n}</span>
                    <h2 className="text-[16px] font-semibold text-brand-900 leading-snug">{title}</h2>
                  </div>
                  <div className="px-6 py-5 grid sm:grid-cols-2 gap-5">
                    <div>
                      <p className="text-[11px] font-bold text-rose-500 uppercase tracking-wider mb-2">The Problem</p>
                      <p className="text-[13.5px] text-gray-600 leading-[1.65]">{problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-2">The Fix</p>
                      <p className="text-[13.5px] text-gray-600 leading-[1.65]">{fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-5 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-[14px] font-semibold text-amber-900 mb-1">Quick self-audit checklist</p>
              {[
                "Is my resume tailored to this specific job?",
                "Does every bullet point show an achievement, not just a duty?",
                "Is my template ATS-friendly (single column, no tables)?",
                "Have I proofread for typos at least twice?",
                "Is my resume 1–2 pages maximum?",
                "Have I included keywords from the job description?",
                "Is my contact info in the body of the document (not in a header)?",
                "Is my summary specific and free of buzzwords?",
                "Is my formatting consistent throughout?",
                "Do I have a dedicated skills section with specific hard skills?",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mt-2">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">□</span>
                  <p className="text-[13px] text-amber-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 border border-accent-purple-border text-center">
              <h3 className="font-serif text-[24px] text-brand-900 mb-2">Fix your resume in minutes</h3>
              <p className="text-[14px] text-gray-500 mb-6">Resume Analyzer uses AI to build clean, ATS-optimized resumes — no typos, no bad formatting, just results.</p>
              <Link href="/#builder" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20">
                Build a better resume →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
