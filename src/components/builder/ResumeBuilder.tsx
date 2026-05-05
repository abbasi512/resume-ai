"use client";

import { useState } from "react";
import type { BuilderTab, ResumeData } from "@/types/resume";
import { useResumeData } from "@/hooks/useResumeData";
import BuilderForm from "./BuilderForm";
import ResumePreview from "@/components/resume/ResumePreview";
import TemplateSelector from "./TemplateSelector";
import { pdf } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume/ResumePDF";
import { trackEvent } from "@/lib/gtag";
import {
  Download,
  Loader2,
  ChevronDown,
  ChevronUp,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Globe,
  FolderKanban,
} from "lucide-react";

function DownloadButton({ data }: { data: ResumeData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setError(false);
    try {
      const blob = await pdf(<ResumePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.basics.firstName || "resume"}-${data.basics.lastName || "cv"}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      trackEvent("pdf_download", "resume", data.template ?? "modern");
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center gap-1.5 px-3.5 py-1.5 text-[12px] font-medium bg-brand-900 text-white rounded-lg hover:bg-[#2d2d4e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? <Loader2 size={12} className="animate-spin" /> : <Download size={12} />}
      {error ? "Error — retry" : loading ? "Generating…" : "Export PDF"}
    </button>
  );
}

const TABS: { id: BuilderTab; label: string; icon: React.ReactNode }[] = [
  { id: "basics", label: "Basics", icon: <User size={12} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={12} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={12} /> },
  { id: "skills", label: "Skills", icon: <Sparkles size={12} /> },
  { id: "certifications", label: "Certs", icon: <Award size={12} /> },
  { id: "languages", label: "Languages", icon: <Globe size={12} /> },
  { id: "projects", label: "Projects", icon: <FolderKanban size={12} /> },
];

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState<BuilderTab>("basics");
  const [showTemplates, setShowTemplates] = useState(false);
  const {
    data,
    updateBasics,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    updateCertifications,
    updateLanguages,
    updateProjects,
    setTemplate,
  } = useResumeData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[680px]">
      {/* Left Panel */}
      <div className="flex flex-col border border-black/10 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center">
              <span className="text-sm">✎</span>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-brand-900">Your information</div>
              <div className="text-[11px] text-gray-400">Fill out each section below</div>
            </div>
          </div>
        </div>

        {/* Template toggle */}
        <button
          onClick={() => setShowTemplates(!showTemplates)}
          className="flex items-center justify-between px-5 py-2.5 bg-gray-50 border-b border-black/10 hover:bg-gray-100/80 transition-colors"
        >
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            Template & Style
          </span>
          {showTemplates ? (
            <ChevronUp size={14} className="text-gray-400" />
          ) : (
            <ChevronDown size={14} className="text-gray-400" />
          )}
        </button>

        {showTemplates && (
          <div className="px-5 py-4 bg-white border-b border-black/10">
            <TemplateSelector currentTemplate={data.template || "modern"} onSelect={setTemplate} />
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center gap-1 px-4 py-2.5 bg-gray-50 border-b border-black/10 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-brand-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-brand-900 hover:bg-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <BuilderForm
            activeTab={activeTab}
            data={data}
            onUpdateBasics={updateBasics}
            onAddExperience={addExperience}
            onUpdateExperience={updateExperience}
            onRemoveExperience={removeExperience}
            onAddEducation={addEducation}
            onUpdateEducation={updateEducation}
            onRemoveEducation={removeEducation}
            onUpdateSkills={updateSkills}
            onUpdateCertifications={updateCertifications}
            onUpdateLanguages={updateLanguages}
            onUpdateProjects={updateProjects}
          />
        </div>
      </div>

      {/* Right Panel — Preview */}
      <div className="flex flex-col border border-black/10 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
              <span className="text-sm">▤</span>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-brand-900">Live preview</div>
              <div className="text-[11px] text-gray-400">Updates as you type</div>
            </div>
          </div>
          <DownloadButton data={data} />
        </div>

        <div className="flex-1 overflow-y-auto bg-[#f8f8f6] p-6">
          <div className="bg-white rounded-xl shadow-sm border border-black/[0.06] p-7 min-h-full">
            <ResumePreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
