// src/components/sections/FeaturesSection.tsx

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: "✦",
    title: "AI-powered writing",
    description:
      "Describe your experience in plain English. Our AI turns it into compelling, quantified bullet points.",
  },
  {
    icon: "◎",
    title: "ATS optimization",
    description:
      "Automatically match keywords from job descriptions so you pass automated screening filters.",
  },
  {
    icon: "◈",
    title: "Tailored per role",
    description:
      "Paste a job listing and watch your resume rewrite itself to speak directly to that employer.",
  },
  {
    icon: "▣",
    title: "30+ templates",
    description:
      "From clean & minimal to bold & creative. Every design is recruiter-approved and beautiful.",
  },
  {
    icon: "◐",
    title: "One-click PDF export",
    description:
      "Download a pixel-perfect PDF or share a live link directly with recruiters.",
  },
  {
    icon: "◉",
    title: "Interview prep",
    description:
      "AI generates likely interview questions based on your resume and helps you craft strong answers.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-8 bg-gray-50 border-t border-b border-black/10"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-brand-900 mb-2.5">
            Everything you need to get hired
          </h2>
          <p className="text-base text-gray-500">
            Stop staring at a blank page. Let AI do the heavy lifting.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-black/10 hover:border-accent-purple/30 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-[10px] bg-gray-100 flex items-center justify-center text-xl mb-3.5">
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-semibold mb-1.5 text-brand-900">
                {feature.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
