// src/components/sections/BuilderSection.tsx
"use client";

import ResumeBuilder from "@/components/builder/ResumeBuilder";

export default function BuilderSection() {
  return (
    <section id="builder" className="pt-[72px] pb-0">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-9">
          <h2 className="font-serif text-[32px] text-brand-900 mb-2">
            Try the builder — live
          </h2>
          <p className="text-[15px] text-gray-500">
            Fill in your details below, hit generate, and watch AI craft your
            resume in real time
          </p>
        </div>

        <ResumeBuilder />
      </div>
    </section>
  );
}
