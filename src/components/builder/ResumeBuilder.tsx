// filepath: src/components/builder/ResumeBuilder.tsx
"use client";

import { useState } from "react";
import type { BuilderTab, ResumeTemplate } from "@/types/resume";
import { useResumeData } from "@/hooks/useResumeData";
import BuilderForm from "./BuilderForm";
import ResumePreview from "@/components/resume/ResumePreview";
import TemplateSelector from "./TemplateSelector";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume/ResumePDF";
import { Download, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const TABS: { id: BuilderTab; label: string }[] = [
  { id: "basics", label: "Basics" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
];

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState<BuilderTab>("basics");
  const [showTemplates, setShowTemplates] = useState(false);
  const { 
    data, 
    updateBasics, 
    updateExperience, 
    updateEducation, 
    updateSkills,
    updateCertifications,
    updateLanguages,
    updateProjects,
    setTemplate 
  } = useResumeData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[640px] mb-0">
      {/* Left Panel: Form */}
      <div className="flex flex-col border border-black/10 rounded-2xl overflow-hidden">
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] rounded-lg bg-[#e8eeff] flex items-center justify-center text-sm">
              ✎
            </div>
            <div>
              <div className="text-sm font-medium text-brand-900">Your information</div>
              <div className="text-xs text-gray-400">Fill out the sections below</div>
            </div>
          </div>
        </div>

        {/* Template Toggle */}
        <button
          onClick={() => setShowTemplates(!showTemplates)}
          className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-black/10 hover:bg-gray-100 transition-colors"
        >
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Template Settings
          </div>
          {showTemplates ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </button>

        {/* Template Selector */}
        {showTemplates && (
          <div className="px-5 py-4 bg-white border-b border-black/10">
            <TemplateSelector 
              currentTemplate={data.template || "modern"} 
              onSelect={setTemplate} 
            />
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center gap-1.5 px-5 py-3 bg-gray-50 border-b border-black/10 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                activeTab === tab.id
                  ? "bg-brand-900 text-white border-brand-900"
                  : "bg-white text-gray-500 border-black/10 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto">
          <BuilderForm
            activeTab={activeTab}
            data={data}
            onUpdateBasics={updateBasics}
            onUpdateExperience={updateExperience}
            onUpdateEducation={updateEducation}
            onUpdateSkills={updateSkills}
            onUpdateCertifications={updateCertifications}
            onUpdateLanguages={updateLanguages}
            onUpdateProjects={updateProjects}
          />
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className="flex flex-col border border-black/10 rounded-2xl overflow-hidden">
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] rounded-lg bg-[#fffbe8] flex items-center justify-center text-sm">
              ▤
            </div>
            <div>
              <div className="text-sm font-medium text-brand-900">Live preview</div>
              <div className="text-xs text-gray-400">Updates as you type</div>
            </div>
          </div>
          <PDFDownloadLink
            document={<ResumePDF data={data} />}
            fileName={`${data.basics.firstName || "resume"}-${data.basics.lastName || "preview"}.pdf`}
            className="px-3.5 py-1.5 text-xs border border-black/10 rounded-lg bg-white hover:bg-gray-50 transition-colors text-brand-900 font-medium flex items-center gap-1.5"
          >
            {({ loading }) => (
              <>
                <Download size={12} />
                {loading ? "Preparing..." : "Export PDF"}
              </>
            )}
          </PDFDownloadLink>
        </div>

        {/* Preview */}
        <div className="flex-1 overflow-y-auto bg-white p-7">
          <ResumePreview data={data} />
        </div>
      </div>
    </div>
  );
}
