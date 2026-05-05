// filepath: src/components/builder/TemplateSelector.tsx
"use client";

import { TEMPLATE_INFO } from "@/lib/defaults";
import type { ResumeTemplate } from "@/types/resume";
import { Layout, BookOpen, Minus, Palette, Briefcase, PanelLeft, Zap } from "lucide-react";

interface TemplateSelectorProps {
  currentTemplate: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
}

const iconMap = {
  modern: Layout,
  classic: BookOpen,
  minimal: Minus,
  creative: Palette,
  executive: Briefcase,
  sidebar: PanelLeft,
  sharp: Zap,
};

export default function TemplateSelector({ currentTemplate, onSelect }: TemplateSelectorProps) {
  const templates = Object.entries(TEMPLATE_INFO) as [ResumeTemplate, typeof TEMPLATE_INFO[keyof typeof TEMPLATE_INFO]][];

  return (
    <div className="space-y-3">
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
        Choose Template
      </div>
      <div className="grid grid-cols-1 gap-2">
        {templates.map(([key, info]) => {
          const Icon = iconMap[key];
          const isActive = currentTemplate === key;
          
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-all text-left ${
                isActive
                  ? "border-brand-900 bg-brand-50"
                  : "border-black/10 hover:border-brand-300 hover:bg-gray-50"
              }`}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: isActive ? info.accent : "#f1f5f9" }}
              >
                <Icon size={16} className={isActive ? "text-white" : "text-gray-500"} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${isActive ? "text-brand-900" : "text-gray-700"}`}>
                  {info.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{info.description}</div>
              </div>
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-brand-900 flex-shrink-0 mt-1.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}