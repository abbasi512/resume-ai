"use client";

import { useState } from "react";
import type { ResumeEducation } from "@/types/resume";
import { FormField, Input } from "@/components/ui/FormField";
import { Plus, Trash2, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

interface EducationTabProps {
  data: ResumeEducation[];
  onAdd: () => void;
  onUpdate: (id: string, updates: Partial<ResumeEducation>) => void;
  onRemove: (id: string) => void;
}

function EducationCard({
  edu,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: {
  edu: ResumeEducation;
  index: number;
  onUpdate: (updates: Partial<ResumeEducation>) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const [collapsed, setCollapsed] = useState(index > 0);

  const headerLabel = edu.degree
    ? edu.school ? `${edu.degree} — ${edu.school}` : edu.degree
    : edu.school || `Education ${index + 1}`;

  return (
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50/80 border-b border-black/[0.06]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 text-left flex-1 min-w-0"
        >
          <div className="w-6 h-6 rounded-md bg-violet-50 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={12} className="text-violet-500" />
          </div>
          <span className="text-[13px] font-medium text-brand-900 truncate">{headerLabel}</span>
          {edu.graduationYear && (
            <span className="text-[10px] text-gray-400 flex-shrink-0">{edu.graduationYear}</span>
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
          <FormField label="Institution">
            <Input
              value={edu.school}
              onChange={(e) => onUpdate({ school: e.target.value })}
              placeholder="University of Michigan"
            />
          </FormField>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="Degree">
              <Input
                value={edu.degree}
                onChange={(e) => onUpdate({ degree: e.target.value })}
                placeholder="B.S. Computer Science"
              />
            </FormField>
            <FormField label="Graduation year">
              <Input
                value={edu.graduationYear}
                onChange={(e) => onUpdate({ graduationYear: e.target.value })}
                placeholder="2024"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <FormField label="GPA (optional)">
              <Input
                value={edu.gpa || ""}
                onChange={(e) => onUpdate({ gpa: e.target.value })}
                placeholder="3.8 / 4.0"
              />
            </FormField>
            <FormField label="Honors (optional)">
              <Input
                value={edu.achievements || ""}
                onChange={(e) => onUpdate({ achievements: e.target.value })}
                placeholder="Dean's List"
              />
            </FormField>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EducationTab({ data, onAdd, onUpdate, onRemove }: EducationTabProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-medium text-brand-900">Education</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Most recent first</p>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent-purple bg-accent-purple-light border border-accent-purple-border rounded-lg hover:bg-purple-100 transition-colors"
        >
          <Plus size={13} />
          Add degree
        </button>
      </div>

      {data.map((edu, index) => (
        <EducationCard
          key={edu.id}
          edu={edu}
          index={index}
          onUpdate={(updates) => onUpdate(edu.id, updates)}
          onRemove={() => onRemove(edu.id)}
          canRemove={data.length > 1}
        />
      ))}
    </div>
  );
}
