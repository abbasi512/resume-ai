export type ResumeTemplate = "modern" | "classic" | "minimal" | "creative" | "executive" | "sidebar" | "sharp";

export interface ResumeBasics {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  location: string;
  url: string;
  phone?: string;
  summary?: string;
}

export interface ResumeExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  rawDescription: string;
  aiBullets: string[] | null;
  isCurrentRole?: boolean;
}

export interface ResumeEducation {
  id: string;
  school: string;
  degree: string;
  graduationYear: string;
  gpa?: string;
  achievements?: string;
}

export interface ResumeSkills {
  rawSkills: string;
  aiSkills: string[] | null;
}

export interface ResumeCertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expires?: string;
}

export interface ResumeLanguage {
  id: string;
  language: string;
  proficiency: "native" | "fluent" | "conversational" | "basic";
}

export interface ResumeProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  highlights?: string[];
}

export interface ResumeData {
  basics: ResumeBasics;
  experiences: ResumeExperience[];
  educations: ResumeEducation[];
  skills: ResumeSkills;
  certifications?: ResumeCertification[];
  languages?: ResumeLanguage[];
  projects?: ResumeProject[];
  template?: ResumeTemplate;
}

export type BuilderTab = "basics" | "experience" | "education" | "skills" | "certifications" | "languages" | "projects";

export interface GenerateBulletsRequest {
  rawDescription: string;
  role: string;
  company: string;
  jobTitle: string;
}

export interface GenerateSkillsRequest {
  jobTitle: string;
}

export interface GenerateResponse {
  result: string[];
}
