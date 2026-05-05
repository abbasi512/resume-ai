import { Wand2, Target, FileSearch, LayoutTemplate, FileDown, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Wand2,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "AI-powered writing",
    description: "Describe your work in plain English. Our AI transforms it into compelling, quantified bullet points that impress recruiters.",
  },
  {
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "ATS optimization",
    description: "Automatically surface the right keywords so your resume passes automated screening filters every time.",
  },
  {
    icon: FileSearch,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Tailored per role",
    description: "Paste a job description and watch your resume rewrite itself to speak directly to that employer's needs.",
  },
  {
    icon: LayoutTemplate,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "5 pro templates",
    description: "Modern, Classic, Minimal, Creative, Executive — every design is recruiter-approved, beautiful, and ATS-safe.",
  },
  {
    icon: FileDown,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "One-click PDF export",
    description: "Download a pixel-perfect, print-ready PDF or share a live link directly with hiring managers.",
  },
  {
    icon: MessageSquare,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    title: "Interview prep",
    description: "AI generates likely interview questions from your resume and helps you craft confident, memorable answers.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50/60 border-t border-b border-black/[0.06]">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">
            Why Resumé.ai
          </p>
          <h2 className="font-serif text-[38px] text-brand-900 mb-3 leading-tight">
            Everything you need to get hired
          </h2>
          <p className="text-[15px] text-gray-500 max-w-[480px] mx-auto">
            Stop staring at a blank page. Let AI do the heavy lifting — from first draft to download.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-6 border border-black/[0.07] hover:border-accent-purple/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={f.color} />
                </div>
                <h3 className="text-[14px] font-semibold text-brand-900 mb-1.5">{f.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
