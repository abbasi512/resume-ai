import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "What Is ATS? How Applicant Tracking Systems Work (And How to Beat Them)",
  description:
    "75% of resumes are rejected by ATS before a human reads them. Learn exactly what an Applicant Tracking System is, how it scores your resume, and how to pass it every time.",
  keywords: [
    "what is ATS",
    "applicant tracking system",
    "ATS resume",
    "ATS friendly resume",
    "how to beat ATS",
    "ATS optimized resume",
    "ATS scanner",
    "resume keywords ATS",
  ],
  alternates: { canonical: "/blog/what-is-ats" },
  openGraph: {
    title: "What Is ATS? How Applicant Tracking Systems Work (And How to Beat Them)",
    description: "75% of resumes never reach a human. Learn how ATS works and how to make your resume pass every time.",
    type: "article",
  },
};

export default function WhatIsATSPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        <section className="border-b border-black/[0.06] pt-20 pb-12 px-6 bg-gradient-to-b from-amber-50/40 to-white">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/blog" className="text-[12px] text-gray-400 hover:text-accent-purple transition-colors">Blog</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[12px] text-gray-500">ATS Guide</span>
            </div>
            <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 mb-4">ATS Guide</span>
            <h1 className="font-serif text-[38px] leading-tight text-brand-900 mb-4">
              What Is ATS? How Applicant Tracking Systems Work (And How to Beat Them)
            </h1>
            <p className="text-[16px] text-gray-500 leading-[1.7]">
              75% of resumes are rejected before a human ever reads them — not because the candidate
              isn't qualified, but because their resume failed an automated scan. Here's everything you
              need to know about ATS and how to make sure your resume gets through.
            </p>
            <p className="text-[12px] text-gray-400 mt-4">May 2026 · 7 min read</p>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="max-w-[720px] mx-auto">

            {/* Key stat callout */}
            <div className="flex gap-4 p-5 rounded-xl bg-amber-50 border border-amber-200 mb-10">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-[14px] font-semibold text-amber-900 mb-1">The number that should change how you write every resume</p>
                <p className="text-[13.5px] text-amber-800">More than 98% of Fortune 500 companies use an ATS. The average job posting receives 250+ applications. Most are filtered out automatically before a recruiter sees a single name.</p>
              </div>
            </div>

            <h2 className="font-serif text-[26px] text-brand-900 mt-8 mb-4">What is an Applicant Tracking System (ATS)?</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              An Applicant Tracking System is software that companies use to manage job applications.
              When you submit your resume online, it almost certainly goes into an ATS first — not
              directly to a recruiter's inbox.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              The ATS parses your resume, extracts your information into structured fields (name, skills,
              experience, education), and compares it against the job description. It then ranks you
              against other applicants before a human ever opens your file.
            </p>

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">How ATS scores your resume — step by step</h2>
            {[
              { step: "Step 1", title: "File upload & parsing", body: "You submit your resume (PDF or DOCX). The ATS converts it into plain text and maps your content into database fields: name, email, job titles, companies, dates, education, skills." },
              { step: "Step 2", title: "Keyword matching", body: "The system scans your resume for keywords that appear in the job description. The more matches, the higher your score. If the job asks for 'project management' and your resume only says 'managed projects', you may score lower." },
              { step: "Step 3", title: "Ranking", body: "You're assigned a relevance score and placed in a ranked list. Recruiters typically review only the top 25% of candidates. If your score is too low, your resume is never opened." },
              { step: "Step 4", title: "Human review", body: "Only the top-scoring resumes reach a recruiter's screen. From there, the hiring process proceeds normally — but you have to make it through steps 1–3 first." },
            ].map(({ step, title, body }) => (
              <div key={step} className="border-l-2 border-amber-300 pl-5 mb-6">
                <p className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-1">{step}</p>
                <h3 className="text-[16px] font-semibold text-brand-900 mb-1">{title}</h3>
                <p className="text-[14.5px] text-gray-600 leading-[1.7]">{body}</p>
              </div>
            ))}

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">What makes a resume ATS-friendly?</h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
                <p className="text-[13px] font-bold text-emerald-800 mb-3">✓ Do these things</p>
                {[
                  "Use standard section headings (Experience, Education, Skills)",
                  "Include exact keywords from the job description",
                  "Use a single-column layout",
                  "Use standard fonts (Arial, Helvetica, Calibri)",
                  "Submit as PDF or DOCX",
                  "Spell out abbreviations at least once",
                ].map((item) => (
                  <p key={item} className="text-[13px] text-emerald-700 mb-1.5">• {item}</p>
                ))}
              </div>
              <div className="p-5 rounded-xl bg-rose-50 border border-rose-200">
                <p className="text-[13px] font-bold text-rose-800 mb-3">✗ Avoid these</p>
                {[
                  "Tables, text boxes, or columns",
                  "Headers or footers (ATS often skips them)",
                  "Images, logos, or graphics",
                  "Fancy fonts or icons",
                  "Creative template designs from Canva",
                  "Acronyms without spelling them out",
                ].map((item) => (
                  <p key={item} className="text-[13px] text-rose-700 mb-1.5">• {item}</p>
                ))}
              </div>
            </div>

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">How to find the right keywords for any job</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              The most effective way to identify ATS keywords is to read the job description carefully and
              extract the exact phrases used. Here's a simple process:
            </p>
            {[
              "Copy the job description into a text document.",
              "Highlight every skill, tool, certification, and qualification mentioned.",
              "Check your resume — do you use those exact words? If not, add them where relevant.",
              "Don't stuff keywords — every keyword should appear in context, not just listed.",
              "Repeat for each job you apply to. A tailored resume always outperforms a generic one.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 mb-3">
                <span className="w-6 h-6 rounded-full bg-brand-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-[14.5px] text-gray-600 leading-[1.7]">{item}</p>
              </div>
            ))}

            <h2 className="font-serif text-[26px] text-brand-900 mt-10 mb-4">The fastest way to create an ATS-optimized resume</h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-4">
              Manually tailoring your resume for every job application takes hours. AI resume builders
              solve this by automatically generating keyword-rich bullet points based on your role and
              experience — so your resume is ATS-optimized from the start.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-8">
              Resume Analyzer uses advanced AI to write concise, ATS-friendly bullet points for each of
              your roles. The templates are all single-column and use standard formatting — designed
              to parse cleanly in any ATS.
            </p>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 border border-accent-purple-border text-center">
              <h3 className="font-serif text-[24px] text-brand-900 mb-2">Build an ATS-optimized resume — free</h3>
              <p className="text-[14px] text-gray-500 mb-6">AI-generated bullet points. Clean, ATS-friendly templates. PDF export. No sign up.</p>
              <Link href="/#builder" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-[15px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all shadow-lg shadow-brand-900/20">
                Build my ATS resume →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
