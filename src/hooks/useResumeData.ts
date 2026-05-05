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
  ResumeTemplate,
} from "@/types/resume";
import { DEFAULT_RESUME_DATA } from "@/lib/defaults";

export function useResumeData() {
  const [data, setData] = useState<ResumeData>(DEFAULT_RESUME_DATA);

  const updateBasics = useCallback((updates: Partial<ResumeBasics>) => {
    setData((prev) => ({ ...prev, basics: { ...prev.basics, ...updates } }));
  }, []);

  // Experiences
  const addExperience = useCallback(() => {
    setData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { id: Date.now().toString(), company: "", role: "", duration: "", rawDescription: "", aiBullets: null, isCurrentRole: false },
      ],
    }));
  }, []);

  const updateExperience = useCallback((id: string, updates: Partial<ResumeExperience>) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, ...updates } : exp)),
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
  }, []);

  // Educations
  const addEducation = useCallback(() => {
    setData((prev) => ({
      ...prev,
      educations: [
        ...prev.educations,
        { id: Date.now().toString(), school: "", degree: "", graduationYear: "", gpa: "", achievements: "" },
      ],
    }));
  }, []);

  const updateEducation = useCallback((id: string, updates: Partial<ResumeEducation>) => {
    setData((prev) => ({
      ...prev,
      educations: prev.educations.map((edu) => (edu.id === id ? { ...edu, ...updates } : edu)),
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setData((prev) => ({
      ...prev,
      educations: prev.educations.filter((edu) => edu.id !== id),
    }));
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
  };
}
