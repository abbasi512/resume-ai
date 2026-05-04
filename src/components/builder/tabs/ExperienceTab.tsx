// src/components/builder/tabs/ExperienceTab.tsx
"use client";

import { useState } from "react";
import type { ResumeExperience } from "@/types/resume";
import { FormField, Input, Textarea, AiButton } from "@/components/ui/FormField";

interface ExperienceTabProps {
  data: ResumeExperience;
  jobTitle: string;
  onUpdate: (updates: Partial<ResumeExperience>) => void;
}

export default function ExperienceTab({ data, jobTitle, onUpdate }: ExperienceTabProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateBullets = async () => {
    if (!data.rawDescription.trim()) {
      setError("Please describe your experience first.");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/generate-bullets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawDescription: data.rawDescription,
          role: data.role,
          company: data.company,
          jobTitle,
        }),
      });

      const json = await res.json();
      onUpdate({ aiBullets: json.result });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormField label="Company">
        <Input
          value={data.company}
          onChange={(e) => onUpdate({ company: e.target.value })}
          placeholder="Acme Corp"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-3">
        <FormField label="Role">
          <Input
            value={data.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
            placeholder="Product Designer"
          />
        </FormField>
        <FormField label="Duration">
          <Input
            value={data.duration}
            onChange={(e) => onUpdate({ duration: e.target.value })}
            placeholder="2021 – Present"
          />
        </FormField>
      </div>

      <FormField label="What did you do? (AI will polish it)">
        <Textarea
          value={data.rawDescription}
          onChange={(e) => onUpdate({ rawDescription: e.target.value, aiBullets: null })}
          placeholder="Redesigned checkout flow, led mobile app redesign, managed 3 designers..."
        />
      </FormField>

      {error && (
        <p className="text-xs text-red-500 -mt-1">{error}</p>
      )}

      <AiButton
        loading={loading}
        loadingText="Generating bullet points…"
        onClick={handleGenerateBullets}
      >
        Generate AI bullet points
      </AiButton>

      {data.aiBullets && (
        <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-accent-purple-light border border-accent-purple-border">
          <p className="text-[11px] font-semibold text-accent-purple tracking-widest uppercase mb-0.5">
            AI generated
          </p>
          {data.aiBullets.map((bullet, i) => (
            <p key={i} className="text-[13px] text-brand-900 leading-relaxed flex gap-2">
              <span className="text-accent-purple mt-0.5 flex-shrink-0">•</span>
              {bullet}
            </p>
          ))}
          <button
            onClick={() => onUpdate({ aiBullets: null })}
            className="mt-1 text-[11px] text-gray-400 hover:text-red-400 transition-colors text-left"
          >
            ✕ Clear and start over
          </button>
        </div>
      )}
    </>
  );
}
