// filepath: src/components/builder/tabs/EducationTab.tsx
"use client";

import type { ResumeEducation } from "@/types/resume";
import { FormField, Input, Textarea } from "@/components/ui/FormField";

interface EducationTabProps {
  data: ResumeEducation;
  onUpdate: (updates: Partial<ResumeEducation>) => void;
}

export default function EducationTab({ data, onUpdate }: EducationTabProps) {
  return (
    <>
      <FormField label="Institution">
        <Input
          value={data.school}
          onChange={(e) => onUpdate({ school: e.target.value })}
          placeholder="University of Michigan"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-3">
        <FormField label="Degree">
          <Input
            value={data.degree}
            onChange={(e) => onUpdate({ degree: e.target.value })}
            placeholder="B.S. Computer Science"
          />
        </FormField>
        <FormField label="Graduation year">
          <Input
            value={data.graduationYear}
            onChange={(e) => onUpdate({ graduationYear: e.target.value })}
            placeholder="2019"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <FormField label="GPA (optional)">
          <Input
            value={data.gpa || ""}
            onChange={(e) => onUpdate({ gpa: e.target.value })}
            placeholder="3.8/4.0"
          />
        </FormField>
        <FormField label="Achievements (optional)">
          <Input
            value={data.achievements || ""}
            onChange={(e) => onUpdate({ achievements: e.target.value })}
            placeholder="Dean's List, Summa Cum Laude"
          />
        </FormField>
      </div>
    </>
  );
}
