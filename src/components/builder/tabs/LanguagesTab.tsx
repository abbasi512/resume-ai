// filepath: src/components/builder/tabs/LanguagesTab.tsx
"use client";

import { useState } from "react";
import type { ResumeLanguage } from "@/types/resume";
import { Plus, Trash2, Globe } from "lucide-react";

interface LanguagesTabProps {
  data: ResumeLanguage[];
  onUpdate: (data: ResumeLanguage[]) => void;
}

const proficiencyLevels = [
  { value: "native", label: "Native", description: "Full professional proficiency" },
  { value: "fluent", label: "Fluent", description: "Full professional working proficiency" },
  { value: "conversational", label: "Conversational", description: "Limited professional working proficiency" },
  { value: "basic", label: "Basic", description: "Elementary proficiency" },
] as const;

export default function LanguagesTab({ data, onUpdate }: LanguagesTabProps) {
  const addLanguage = () => {
    const newLang: ResumeLanguage = {
      id: Date.now().toString(),
      language: "",
      proficiency: "conversational",
    };
    onUpdate([...data, newLang]);
  };

  const updateLanguage = (id: string, field: keyof ResumeLanguage, value: string) => {
    onUpdate(data.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    ));
  };

  const removeLanguage = (id: string) => {
    onUpdate(data.filter(lang => lang.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-brand-900">Languages</h3>
          <p className="text-xs text-gray-400">Add languages you can speak</p>
        </div>
        <button
          onClick={addLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-900 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
        >
          <Plus size={14} />
          Add
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 px-4 border border-dashed border-gray-200 rounded-lg">
          <Globe className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">No languages added yet</p>
          <p className="text-xs text-gray-300 mt-1">Click "Add" to include languages</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((lang, index) => (
            <div key={lang.id} className="p-4 bg-gray-50 rounded-lg border border-black/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400">Language {index + 1}</span>
                <button
                  onClick={() => removeLanguage(lang.id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Language (e.g., Spanish)"
                  value={lang.language}
                  onChange={(e) => updateLanguage(lang.id, "language", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-black/10 rounded-lg focus:outline-none focus:border-brand-900"
                />
                <div className="grid grid-cols-2 gap-2">
                  {proficiencyLevels.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => updateLanguage(lang.id, "proficiency", level.value)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        lang.proficiency === level.value
                          ? "border-brand-900 bg-brand-50"
                          : "border-black/10 hover:border-brand-300"
                      }`}
                    >
                      <div className={`text-xs font-medium ${lang.proficiency === level.value ? "text-brand-900" : "text-gray-600"}`}>
                        {level.label}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}