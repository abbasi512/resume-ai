"use client";

import dynamic from "next/dynamic";

const ResumeBuilder = dynamic(() => import("@/components/builder/ResumeBuilder"), { ssr: false });

export default function BuilderSection() {
  return (
    <section id="builder" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">
            Try it live
          </p>
          <h2 className="font-serif text-[38px] text-brand-900 mb-3 leading-tight">
            Build your resume — right here
          </h2>
          <p className="text-[15px] text-gray-500 max-w-[480px] mx-auto">
            Fill in your details, hit generate, and watch AI craft your resume in real time.
            Export as PDF when ready.
          </p>
        </div>
        <ResumeBuilder />
      </div>
    </section>
  );
}
