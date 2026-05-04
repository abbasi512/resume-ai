// src/components/builder/tabs/SkillsTab.tsx
"use client";

import { useState } from "react";
import type { ResumeSkills } from "@/types/resume";
import { FormField, Textarea, AiButton } from "@/components/ui/FormField";

interface SkillsTabProps {
  data: ResumeSkills;
  jobTitle: string;
  onUpdate: (updates: Partial<ResumeSkills>) => void;
}

export default function SkillsTab({ data, jobTitle, onUpdate }: SkillsTabProps) {
  const [loading, setLoading] = useState(false);

  const handleGenerateSkills = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle: jobTitle || "Professional" }),
      });
      const json = await res.json();
      onUpdate({ aiSkills: json.result });
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormField label="Skills (comma-separated)">
        <Textarea
          value={data.rawSkills}
          onChange={(e) => onUpdate({ rawSkills: e.target.value, aiSkills: null })}
          placeholder="Figma, React, TypeScript, User Research, Prototyping..."
        />
      </FormField>

      <AiButton
        loading={loading}
        loadingText="Generating skills…"
        onClick={handleGenerateSkills}
      >
        Suggest skills for my role
      </AiButton>

      {data.aiSkills && (
        <div className="flex flex-col gap-2 p-3 rounded-lg bg-accent-purple-light border border-accent-purple-border">
          <p className="text-[11px] font-semibold text-accent-purple tracking-widest uppercase">
            AI suggested skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {data.aiSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-full bg-white border border-accent-purple/20 text-[12px] text-brand-900 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <button
            onClick={() => onUpdate({ aiSkills: null })}
            className="text-[11px] text-gray-400 hover:text-red-400 transition-colors text-left mt-0.5"
          >
            ✕ Clear suggestions
          </button>
        </div>
      )}
    </>
  );
}
