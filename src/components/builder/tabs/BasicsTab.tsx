// filepath: src/components/builder/tabs/BasicsTab.tsx
"use client";

import type { ResumeBasics } from "@/types/resume";
import { FormField, Input, Textarea } from "@/components/ui/FormField";

interface BasicsTabProps {
  data: ResumeBasics;
  onUpdate: (updates: Partial<ResumeBasics>) => void;
}

export default function BasicsTab({ data, onUpdate }: BasicsTabProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <FormField label="First name">
          <Input
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            placeholder="Alex"
          />
        </FormField>
        <FormField label="Last name">
          <Input
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            placeholder="Chen"
          />
        </FormField>
      </div>

      <FormField label="Job title / target role">
        <Input
          value={data.jobTitle}
          onChange={(e) => onUpdate({ jobTitle: e.target.value })}
          placeholder="Senior Product Designer"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-3">
        <FormField label="Email">
          <Input
            type="email"
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            placeholder="alex@example.com"
          />
        </FormField>
        <FormField label="Phone">
          <Input
            type="tel"
            value={data.phone || ""}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </FormField>
      </div>

      <FormField label="Location">
        <Input
          value={data.location}
          onChange={(e) => onUpdate({ location: e.target.value })}
          placeholder="San Francisco, CA"
        />
      </FormField>

      <FormField label="LinkedIn / portfolio URL">
        <Input
          value={data.url}
          onChange={(e) => onUpdate({ url: e.target.value })}
          placeholder="linkedin.com/in/alexchen"
        />
      </FormField>

      <FormField label="Professional summary">
        <Textarea
          value={data.summary || ""}
          onChange={(e) => onUpdate({ summary: e.target.value })}
          placeholder="Briefly describe your professional background, key skills, and career objectives..."
          rows={4}
        />
      </FormField>
    </>
  );
}
