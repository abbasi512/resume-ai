// filepath: src/components/resume/ResumePDF.tsx
"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import type { ResumeData, ResumeTemplate } from "@/types/resume";
import { TEMPLATE_INFO } from "@/lib/defaults";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff2", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2", fontWeight: 700 },
  ],
});

const baseStyles = StyleSheet.create({
  page: { padding: 40, fontFamily: "Inter", backgroundColor: "#fff" },
  header: { paddingLeft: 40 },
  sidebar: { position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: "#2563eb" },
  name: { fontSize: 24, fontWeight: 700, color: "#1e293b", marginBottom: 4 },
  title: { fontSize: 12, color: "#2563eb", fontWeight: 600, marginBottom: 8 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 16 },
  contactItem: { fontSize: 9, color: "#64748b" },
  sectionTitle: { fontSize: 10, fontWeight: 700, color: "#1e293b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10, paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: "#e2e8f0" },
  sectionContent: { marginBottom: 16 },
  jobTitle: { fontSize: 11, fontWeight: 600, color: "#1e293b" },
  company: { fontSize: 10, color: "#2563eb", fontWeight: 500, marginBottom: 4 },
  duration: { fontSize: 9, color: "#94a3b8", marginBottom: 6 },
  bullet: { fontSize: 9, color: "#475569", lineHeight: 1.5, marginBottom: 2, paddingLeft: 8 },
  skillTag: { fontSize: 8, backgroundColor: "#f1f5f9", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, marginRight: 4, marginBottom: 4, color: "#475569" },
  skillRow: { flexDirection: "row", flexWrap: "wrap" },
  degree: { fontSize: 11, fontWeight: 600, color: "#1e293b" },
  school: { fontSize: 10, color: "#2563eb", fontWeight: 500 },
  year: { fontSize: 9, color: "#94a3b8" },
  certName: { fontSize: 10, fontWeight: 600, color: "#1e293b" },
  certIssuer: { fontSize: 9, color: "#64748b" },
  langItem: { fontSize: 10, color: "#475569", marginBottom: 2 },
  projectName: { fontSize: 11, fontWeight: 600, color: "#1e293b" },
  projectTech: { fontSize: 9, color: "#2563eb", marginBottom: 4 },
  summary: { fontSize: 9, color: "#475569", lineHeight: 1.5 },
});

const modernStyles = StyleSheet.create({
  ...baseStyles,
  page: { ...baseStyles.page, paddingLeft: 0 },
  sidebar: { position: "absolute", left: 0, top: 0, bottom: 0, width: 4, backgroundColor: "#2563eb" },
  header: { paddingLeft: 40 },
});

const classicStyles = StyleSheet.create({
  ...baseStyles,
  name: { ...baseStyles.name, fontSize: 22, fontFamily: "Times-Roman" },
  sectionTitle: { ...baseStyles.sectionTitle, borderBottomWidth: 2, borderBottomColor: "#1e293b" },
});

const minimalStyles = StyleSheet.create({
  ...baseStyles,
  page: { ...baseStyles.page, padding: 50 },
  name: { ...baseStyles.name, fontWeight: 400, letterSpacing: -0.5 },
  sectionTitle: { ...baseStyles.sectionTitle, borderBottomWidth: 0, color: "#64748b", fontWeight: 400 },
});

const creativeStyles = StyleSheet.create({
  ...baseStyles,
  page: { ...baseStyles.page, backgroundColor: "#fafafa" },
  name: { ...baseStyles.name, color: "#8b5cf6" },
  title: { ...baseStyles.title, color: "#8b5cf6" },
  company: { ...baseStyles.company, color: "#8b5cf6" },
  school: { ...baseStyles.school, color: "#8b5cf6" },
  sectionTitle: { ...baseStyles.sectionTitle, color: "#8b5cf6" },
  skillTag: { ...baseStyles.skillTag, backgroundColor: "#ede9fe", color: "#7c3aed" },
});

const executiveStyles = StyleSheet.create({
  ...baseStyles,
  name: { ...baseStyles.name, fontSize: 26, letterSpacing: 2, textAlign: "center" },
  title: { ...baseStyles.title, textAlign: "center", fontSize: 14 },
  contactRow: { ...baseStyles.contactRow, justifyContent: "center" },
  sectionTitle: { ...baseStyles.sectionTitle, textAlign: "center", borderBottomWidth: 2, borderBottomColor: "#0f172a" },
  header: { alignItems: "center", marginBottom: 20 },
});

function getStyles(template: ResumeTemplate) {
  switch (template) {
    case "modern": return modernStyles;
    case "classic": return classicStyles;
    case "minimal": return minimalStyles;
    case "creative": return creativeStyles;
    case "executive": return executiveStyles;
    default: return modernStyles;
  }
}

interface ResumePDFProps {
  data: ResumeData;
}

export default function ResumePDF({ data }: ResumePDFProps) {
  const styles = getStyles(data.template || "modern");
  const { basics, experience, education, skills, certifications, languages, projects } = data;

  const displaySkills = skills.aiSkills || (skills.rawSkills ? skills.rawSkills.split(",").map(s => s.trim()) : []);
  const bullets = experience.aiBullets || [];
  const summary = basics.summary || "";

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.name}>{basics.firstName} {basics.lastName}</Text>
      <Text style={styles.title}>{basics.jobTitle}</Text>
      <View style={styles.contactRow}>
        {basics.email && <Text style={styles.contactItem}>{basics.email}</Text>}
        {basics.phone && <Text style={styles.contactItem}>• {basics.phone}</Text>}
        {basics.location && <Text style={styles.contactItem}>• {basics.location}</Text>}
        {basics.url && <Text style={styles.contactItem}>• {basics.url}</Text>}
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {data.template === "modern" && <View style={styles.sidebar} />}
        
        {renderHeader()}

        {summary && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {bullets.length > 0 && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <Text style={styles.jobTitle}>{experience.role}</Text>
            <Text style={styles.company}>{experience.company} | {experience.duration}</Text>
            {bullets.map((bullet, i) => (
              <Text key={i} style={styles.bullet}>• {bullet}</Text>
            ))}
          </View>
        )}

        {education.school && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.degree}>{education.degree}</Text>
            <Text style={styles.school}>{education.school} | {education.graduationYear}</Text>
            {education.gpa && <Text style={styles.contactItem}>GPA: {education.gpa}</Text>}
          </View>
        )}

        {displaySkills.length > 0 && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillRow}>
              {displaySkills.map((skill, i) => (
                <Text key={i} style={styles.skillTag}>{skill}</Text>
              ))}
            </View>
          </View>
        )}

        {certifications && certifications.length > 0 && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.map((cert) => (
              <View key={cert.id} style={{ marginBottom: 6 }}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certIssuer}>{cert.issuer} | {cert.date}</Text>
              </View>
            ))}
          </View>
        )}

        {languages && languages.length > 0 && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {languages.map((lang) => (
              <Text key={lang.id} style={styles.langItem}>{lang.language} - {lang.proficiency}</Text>
            ))}
          </View>
        )}

        {projects && projects.length > 0 && (
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 8 }}>
                <Text style={styles.projectName}>{proj.name}</Text>
                <Text style={styles.projectTech}>{proj.technologies.join(", ")}</Text>
                <Text style={styles.summary}>{proj.description}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}