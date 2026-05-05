import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all pages and sections of Resume.ai — the free AI-powered resume builder.",
  alternates: { canonical: "/sitemap-page" },
  robots: { index: true, follow: true },
};

interface SitemapSection {
  heading: string;
  description: string;
  links: { label: string; href: string; description: string }[];
}

const SECTIONS: SitemapSection[] = [
  {
    heading: "Main Pages",
    description: "Core pages of the Resume.ai website.",
    links: [
      { label: "Home", href: "/", description: "Start building your AI-powered resume for free." },
      { label: "Sitemap", href: "/sitemap-page", description: "Full overview of all pages on this site." },
    ],
  },
  {
    heading: "Product",
    description: "Explore what Resume.ai offers.",
    links: [
      { label: "Features", href: "/#features", description: "AI bullet generation, ATS optimization, template library, and more." },
      { label: "Resume Builder", href: "/#builder", description: "Build your resume live — no sign-up required." },
      { label: "Pricing", href: "/#pricing", description: "Free plan and Pro plan details." },
    ],
  },
  {
    heading: "Resume Templates",
    description: "Professional resume templates for every industry and career level.",
    links: [
      { label: "Modern Template", href: "/#builder", description: "Clean, contemporary layout with a left accent bar — great for tech roles." },
      { label: "Classic Template", href: "/#builder", description: "Traditional professional layout with serif typography." },
      { label: "Minimal Template", href: "/#builder", description: "Simple and elegant with maximum white space." },
      { label: "Creative Template", href: "/#builder", description: "Bold design with unique visual elements for creative roles." },
      { label: "Executive Template", href: "/#builder", description: "Sophisticated centered layout for senior and C-suite positions." },
      { label: "Sidebar Template", href: "/#builder", description: "Two-column dark sidebar — popular in consulting and tech." },
      { label: "Sharp Template", href: "/#builder", description: "Bold full-width header with a structured body — great for standing out." },
    ],
  },
  {
    heading: "Resources",
    description: "Guides and tips to help you land more interviews.",
    links: [
      { label: "ATS Optimization Guide", href: "/#features", description: "How to write a resume that passes applicant tracking systems." },
      { label: "Resume Tips", href: "/#features", description: "Best practices for writing bullet points, formatting, and keywords." },
      { label: "Interview Prep", href: "/#features", description: "Turn your resume into confident answers." },
    ],
  },
  {
    heading: "Company",
    description: "Learn more about Resume.ai.",
    links: [
      { label: "About us",       href: "/about",   description: "Our mission: make great resumes accessible to everyone." },
      { label: "Contact us",     href: "/contact", description: "Get help, report a bug, or talk about a partnership." },
      { label: "Privacy Policy", href: "/privacy", description: "How we collect, use, and protect your data." },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b border-black/[0.06] bg-gray-50/60 pt-20 pb-12 px-6">
          <div className="max-w-[860px] mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">
              Sitemap
            </p>
            <h1 className="font-serif text-[36px] text-brand-900 leading-tight mb-3">
              Everything on Resume.ai
            </h1>
            <p className="text-[15px] text-gray-500 max-w-[480px]">
              A complete map of all pages, sections, and resources on this site.
            </p>

            {/* XML sitemap link */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-black/10 text-[12px] text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              XML sitemap for search engines:&nbsp;
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple font-medium hover:underline"
              >
                /sitemap.xml
              </a>
            </div>
          </div>
        </section>

        {/* Sitemap grid */}
        <section className="px-6 py-14">
          <div className="max-w-[860px] mx-auto space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <div className="mb-5">
                  <h2 className="text-[18px] font-semibold text-brand-900 mb-1">{section.heading}</h2>
                  <p className="text-[13px] text-gray-400">{section.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex flex-col gap-0.5 p-4 rounded-xl border border-black/[0.08] hover:border-accent-purple/40 hover:bg-accent-purple-light transition-all"
                    >
                      <span className="text-[14px] font-semibold text-brand-900 group-hover:text-accent-purple transition-colors">
                        {link.label} →
                      </span>
                      <span className="text-[12px] text-gray-400 leading-snug">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
