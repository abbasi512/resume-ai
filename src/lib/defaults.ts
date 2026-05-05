import type { ResumeData, ResumeTemplate } from "@/types/resume";

export const DEFAULT_RESUME_DATA: ResumeData = {
  basics: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    location: "",
    url: "",
    phone: "",
    summary: "",
  },
  experiences: [
    {
      id: "1",
      company: "",
      role: "",
      duration: "",
      rawDescription: "",
      aiBullets: null,
      isCurrentRole: false,
    },
  ],
  educations: [
    {
      id: "1",
      school: "",
      degree: "",
      graduationYear: "",
      gpa: "",
      achievements: "",
    },
  ],
  skills: {
    rawSkills: "",
    aiSkills: null,
  },
  certifications: [],
  languages: [],
  projects: [],
  template: "modern",
};

export const PLACEHOLDER_RESUME_DATA: ResumeData = {
  basics: {
    firstName: "Alex",
    lastName: "Chen",
    jobTitle: "Senior Product Designer",
    email: "alex@example.com",
    location: "San Francisco, CA",
    url: "linkedin.com/in/alexchen",
    phone: "+1 (555) 123-4567",
    summary:
      "Results-driven product designer with 5+ years of experience delivering high-impact digital products. Proven ability to translate complex user needs into elegant, data-backed solutions that drive measurable business outcomes.",
  },
  experiences: [
    {
      id: "1",
      company: "Acme Corp",
      role: "Product Designer",
      duration: "2021 – Present",
      rawDescription: "",
      aiBullets: [
        "Redesigned the checkout funnel, reducing drop-off by 34% and lifting conversion by $2.1M ARR",
        "Led end-to-end mobile app redesign across iOS & Android, shipping to 1.2M users",
        "Managed and mentored a team of 3 junior designers",
        "Established a design system used by 12 product teams, cutting design-to-dev handoff time by ~40%",
      ],
      isCurrentRole: true,
    },
    {
      id: "2",
      company: "StartupXYZ",
      role: "UX Designer",
      duration: "2019 – 2021",
      rawDescription: "",
      aiBullets: [
        "Designed core onboarding flow that improved activation rate by 22%",
        "Ran 15+ usability tests, translating insights into actionable design improvements",
        "Collaborated with 3 engineering teams to ship 8 major product features on schedule",
      ],
      isCurrentRole: false,
    },
  ],
  educations: [
    {
      id: "1",
      school: "University of Michigan",
      degree: "B.S. Computer Science",
      graduationYear: "2019",
      gpa: "3.8/4.0",
      achievements: "Dean's List, Summa Cum Laude",
    },
  ],
  skills: {
    rawSkills: "Figma, React, TypeScript, User Research, Prototyping, A/B Testing",
    aiSkills: null,
  },
  certifications: [
    { id: "1", name: "Google UX Design Certificate", issuer: "Google", date: "2023" },
    { id: "2", name: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2022", expires: "2025" },
  ],
  languages: [
    { id: "1", language: "English", proficiency: "native" },
    { id: "2", language: "Mandarin", proficiency: "fluent" },
    { id: "3", language: "Spanish", proficiency: "conversational" },
  ],
  projects: [
    {
      id: "1",
      name: "E-commerce Redesign",
      description: "Led complete redesign of e-commerce platform resulting in 40% increase in conversions",
      technologies: ["Figma", "React", "TypeScript"],
      url: "https://project.example.com",
    },
  ],
  template: "modern",
};

export const TEMPLATE_INFO: Record<ResumeTemplate, { name: string; description: string; accent: string }> = {
  modern: { name: "Modern", description: "Clean and contemporary with a left accent bar", accent: "#2563eb" },
  classic: { name: "Classic", description: "Traditional professional layout with serif fonts", accent: "#1e293b" },
  minimal: { name: "Minimal", description: "Simple and elegant with maximum whitespace", accent: "#64748b" },
  creative: { name: "Creative", description: "Bold design with unique visual elements", accent: "#8b5cf6" },
  executive: { name: "Executive", description: "Sophisticated layout for senior positions", accent: "#0f172a" },
  sidebar: { name: "Sidebar", description: "Two-column dark sidebar — popular in consulting & tech", accent: "#1e293b" },
  sharp: { name: "Sharp", description: "Bold full-width header with structured body", accent: "#0f766e" },
};
