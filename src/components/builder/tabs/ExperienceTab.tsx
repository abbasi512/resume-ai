"use client";

import { useState } from "react";
import type { ResumeExperience } from "@/types/resume";
import { FormField, Input, Textarea, AiButton } from "@/components/ui/FormField";
import { Plus, Trash2, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceTabProps {
  data: ResumeExperience[];
  jobTitle: string;
  onAdd: () => void;
  onUpdate: (id: string, updates: Partial<ResumeExperience>) => void;
  onRemove: (id: string) => void;
}

function ExperienceCard({
  exp,
  index,
  jobTitle,
  onUpdate,
  onRemove,
  canRemove,
}: {
  exp: ResumeExperience;
  index: number;
  jobTitle: string;
  onUpdate: (updates: Partial<ResumeExperience>) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(index > 0);

  const handleGenerateBullets = async () => {
    if (!exp.rawDescription.trim()) {
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
          rawDescription: exp.rawDescription,
          role: exp.role,
          company: exp.company,
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

  const headerLabel = exp.role
    ? exp.company ? `${exp.role} @ ${exp.company}` : exp.role
    : exp.company || `Experience ${index + 1}`;

  return (
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50/80 border-b border-black/[0.06]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 text-left flex-1 min-w-0 group"
        >
          <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Briefcase size={12} className="text-blue-500" />
          </div>
          <span className="text-[13px] font-medium text-brand-900 truncate">{headerLabel}</span>
          {exp.isCurrentRole && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 font-medium flex-shrink-0">
              Current
            </span>
          )}
          <span className="ml-auto flex-shrink-0 text-gray-400">
            {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </span>
        </button>
        {canRemove && (
          <button
            onClick={onRemove}
            className="ml-2 p-1.5 text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
          >
            <Trash2 size={13} />
          </button>
        )}
      </div>

      {!collapsed && (
        <div className="p-4 flex flex-col gap-3">
          <FormField label="Company">
            <Input
              value={exp.company}
              onChange={(e) => onUpdate({ company: e.target.value })}
              placeholder="Acme Corp"
            />
          </FormField>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Role / Title">
              <Input
                value={exp.role}
                onChange={(e) => onUpdate({ role: e.target.value })}
                placeholder="Product Designer"
              />
            </FormField>
            <FormField label="Duration">
              <Input
                value={exp.duration}
                onChange={(e) => onUpdate({ duration: e.target.value })}
                placeholder="2021 – Present"
              />
            </FormField>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              onClick={() =>
                onUpdate({
                  isCurrentRole: !exp.isCurrentRole,
                  duration: !exp.isCurrentRole
                    ? `${new Date().getFullYear()} – Present`
                    : exp.duration,
                })
              }
              className={`w-8 h-4 rounded-full transition-colors flex-shrink-0 relative ${
                exp.isCurrentRole ? "bg-accent-purple" : "bg-gray-200"
              }`}
            >
              <div
                className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${
                  exp.isCurrentRole ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </div>
            <span className="text-[12px] text-gray-500">This is my current role</span>
          </label>

          <FormField label="What did you do? (AI will polish it)">
            <Textarea
              value={exp.rawDescription}
              onChange={(e) => onUpdate({ rawDescription: e.target.value, aiBullets: null })}
              placeholder="Redesigned checkout flow, led mobile app redesign, managed 3 designers..."
              rows={3}
            />
          </FormField>

          {error && <p className="text-xs text-red-500 -mt-1">{error}</p>}

          <AiButton loading={loading} loadingText="Generating bullet points…" onClick={handleGenerateBullets}>
            Generate AI bullet points
          </AiButton>

          {exp.aiBullets && (
            <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-accent-purple-light border border-accent-purple-border">
              <p className="text-[10px] font-semibold text-accent-purple tracking-widest uppercase mb-0.5">
                AI Generated
              </p>
              {exp.aiBullets.map((bullet, i) => (
                <p key={i} className="text-[12.5px] text-brand-900 leading-relaxed flex gap-2">
                  <span className="text-accent-purple mt-0.5 flex-shrink-0">•</span>
                  {bullet}
                </p>
              ))}
              <button
                onClick={() => onUpdate({ aiBullets: null })}
                className="mt-1 text-[11px] text-gray-400 hover:text-red-400 transition-colors text-left"
              >
                ✕ Clear and regenerate
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExperienceTab({ data, jobTitle, onAdd, onUpdate, onRemove }: ExperienceTabProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-medium text-brand-900">Work Experience</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Most recent first</p>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent-purple bg-accent-purple-light border border-accent-purple-border rounded-lg hover:bg-purple-100 transition-colors"
        >
          <Plus size={13} />
          Add role
        </button>
      </div>

      {data.map((exp, index) => (
        <ExperienceCard
          key={exp.id}
          exp={exp}
          index={index}
          jobTitle={jobTitle}
          onUpdate={(updates) => onUpdate(exp.id, updates)}
          onRemove={() => onRemove(exp.id)}
          canRemove={data.length > 1}
        />
      ))}
    </div>
  );
}
