"use client";

import { useState, useCallback } from "react";
import type { 
  ResumeData, 
  ResumeBasics, 
  ResumeExperience, 
  ResumeEducation, 
  ResumeSkills,
  ResumeCertification,
  ResumeLanguage,
  ResumeProject,
  ResumeTemplate
} from "@/types/resume";
import { DEFAULT_RESUME_DATA } from "@/lib/defaults";

export function useResumeData() {
  const [data, setData] = useState<ResumeData>(DEFAULT_RESUME_DATA);

  const updateBasics = useCallback((updates: Partial<ResumeBasics>) => {
    setData((prev) => ({ ...prev, basics: { ...prev.basics, ...updates } }));
  }, []);

  const updateExperience = useCallback((updates: Partial<ResumeExperience>) => {
    setData((prev) => ({ ...prev, experience: { ...prev.experience, ...updates } }));
  }, []);

  const updateEducation = useCallback((updates: Partial<ResumeEducation>) => {
    setData((prev) => ({ ...prev, education: { ...prev.education, ...updates } }));
  }, []);

  const updateSkills = useCallback((updates: Partial<ResumeSkills>) => {
    setData((prev) => ({ ...prev, skills: { ...prev.skills, ...updates } }));
  }, []);

  const updateCertifications = useCallback((updates: ResumeCertification[]) => {
    setData((prev) => ({ ...prev, certifications: updates }));
  }, []);

  const updateLanguages = useCallback((updates: ResumeLanguage[]) => {
    setData((prev) => ({ ...prev, languages: updates }));
  }, []);

  const updateProjects = useCallback((updates: ResumeProject[]) => {
    setData((prev) => ({ ...prev, projects: updates }));
  }, []);

  const setTemplate = useCallback((template: ResumeTemplate) => {
    setData((prev) => ({ ...prev, template }));
  }, []);

  return { 
    data, 
    updateBasics, 
    updateExperience, 
    updateEducation, 
    updateSkills,
    updateCertifications,
    updateLanguages,
    updateProjects,
    setTemplate
  };
}
