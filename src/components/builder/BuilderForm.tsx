// filepath: src/components/builder/BuilderForm.tsx
"use client";

import type {
  BuilderTab,
  ResumeData,
  ResumeBasics,
  ResumeExperience,
  ResumeEducation,
  ResumeSkills,
  ResumeCertification,
  ResumeLanguage,
  ResumeProject,
} from "@/types/resume";
import BasicsTab from "./tabs/BasicsTab";
import ExperienceTab from "./tabs/ExperienceTab";
import EducationTab from "./tabs/EducationTab";
import SkillsTab from "./tabs/SkillsTab";
import CertificationsTab from "./tabs/CertificationsTab";
import LanguagesTab from "./tabs/LanguagesTab";
import ProjectsTab from "./tabs/ProjectsTab";

interface BuilderFormProps {
  activeTab: BuilderTab;
  data: ResumeData;
  onUpdateBasics: (updates: Partial<ResumeBasics>) => void;
  onUpdateExperience: (updates: Partial<ResumeExperience>) => void;
  onUpdateEducation: (updates: Partial<ResumeEducation>) => void;
  onUpdateSkills: (updates: Partial<ResumeSkills>) => void;
  onUpdateCertifications: (data: ResumeCertification[]) => void;
  onUpdateLanguages: (data: ResumeLanguage[]) => void;
  onUpdateProjects: (data: ResumeProject[]) => void;
}

export default function BuilderForm({
  activeTab,
  data,
  onUpdateBasics,
  onUpdateExperience,
  onUpdateEducation,
  onUpdateSkills,
  onUpdateCertifications,
  onUpdateLanguages,
  onUpdateProjects,
}: BuilderFormProps) {
  return (
    <div className="p-5 flex flex-col gap-3.5">
      {activeTab === "basics" && (
        <BasicsTab data={data.basics} onUpdate={onUpdateBasics} />
      )}
      {activeTab === "experience" && (
        <ExperienceTab data={data.experience} onUpdate={onUpdateExperience} jobTitle={data.basics.jobTitle} />
      )}
      {activeTab === "education" && (
        <EducationTab data={data.education} onUpdate={onUpdateEducation} />
      )}
      {activeTab === "skills" && (
        <SkillsTab
          data={data.skills}
          jobTitle={data.basics.jobTitle}
          onUpdate={onUpdateSkills}
        />
      )}
      {activeTab === "certifications" && (
        <CertificationsTab
          data={data.certifications || []}
          onUpdate={onUpdateCertifications}
        />
      )}
      {activeTab === "languages" && (
        <LanguagesTab
          data={data.languages || []}
          onUpdate={onUpdateLanguages}
        />
      )}
      {activeTab === "projects" && (
        <ProjectsTab
          data={data.projects || []}
          onUpdate={onUpdateProjects}
        />
      )}
    </div>
  );
}
