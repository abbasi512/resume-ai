"use client";

import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { ResumeData, ResumeTemplate } from "@/types/resume";
import { PLACEHOLDER_RESUME_DATA } from "@/lib/defaults";

function val(v: string | undefined, fallback: string) {
  return (v ?? "").trim() || fallback;
}

/* ─────────────────────────────────────────
   Colour palettes per template
───────────────────────────────────────── */
const PALETTE: Record<ResumeTemplate, { accent: string; sub: string; body: string; muted: string; bg: string }> = {
  modern:    { accent: "#2563eb", sub: "#3b82f6", body: "#1e293b", muted: "#64748b", bg: "#ffffff" },
  classic:   { accent: "#1e293b", sub: "#334155", body: "#1e293b", muted: "#64748b", bg: "#ffffff" },
  minimal:   { accent: "#475569", sub: "#64748b", body: "#334155", muted: "#94a3b8", bg: "#ffffff" },
  creative:  { accent: "#7c3aed", sub: "#8b5cf6", body: "#1e293b", muted: "#64748b", bg: "#fafafa" },
  executive: { accent: "#0f172a", sub: "#334155", body: "#0f172a", muted: "#64748b", bg: "#ffffff" },
  sidebar:   { accent: "#38bdf8", sub: "#3b82f6", body: "#0f172a", muted: "#64748b", bg: "#ffffff" },
  sharp:     { accent: "#0f766e", sub: "#0f766e", body: "#0f172a", muted: "#64748b", bg: "#ffffff" },
};

/* ─────────────────────────────────────────
   Build a complete StyleSheet per template
───────────────────────────────────────── */
function buildStyles(t: ResumeTemplate) {
  const p = PALETTE[t];
  const isExecutive = t === "executive";
  const isMinimal   = t === "minimal";
  const isClassic   = t === "classic";
  const isCreative  = t === "creative";
  const center      = isExecutive ? "center" : "left";

  return StyleSheet.create({
    /* Layout ───────────────────────────── */
    page: {
      flexDirection: "row",
      backgroundColor: p.bg,
      fontFamily: "Helvetica",
      fontSize: 9,
      color: p.body,
    },
    sidebar: {
      width: 5,
      backgroundColor: p.accent,
    },
    body: {
      flex: 1,
      paddingTop:    isMinimal ? 50 : 38,
      paddingBottom: isMinimal ? 50 : 38,
      paddingLeft:   isMinimal ? 52 : 44,
      paddingRight:  isMinimal ? 52 : 44,
    },

    /* Header ───────────────────────────── */
    name: {
      fontFamily:    isClassic ? "Times-Bold" : "Helvetica-Bold",
      fontSize:      isExecutive ? 24 : isMinimal ? 20 : 22,
      color:         isCreative ? p.accent : p.body,
      marginBottom:  3,
      textAlign:     center,
      letterSpacing: isExecutive ? 1.5 : 0,
    },
    headline: {
      fontSize:     11,
      color:        isMinimal ? p.muted : p.accent,
      marginBottom: 7,
      textAlign:    center,
    },
    contactRow: {
      flexDirection:  "row",
      flexWrap:       "wrap",
      justifyContent: isExecutive ? "center" : "flex-start",
      marginBottom:   2,
    },
    contactItem: {
      fontSize:    8,
      color:       p.muted,
      marginRight: 10,
      marginBottom: 1,
    },

    /* Divider ──────────────────────────── */
    divider: {
      borderBottomWidth: isClassic ? 2 : isMinimal ? 0 : 1,
      borderBottomColor: isClassic ? p.accent : "#e2e8f0",
      marginTop:    6,
      marginBottom: 14,
    },

    /* Section headers ──────────────────── */
    sectionLabel: {
      fontSize:      7.5,
      fontFamily:    "Helvetica-Bold",
      color:         isMinimal ? p.muted : p.accent,
      letterSpacing: 1.4,
      marginTop:     14,
      marginBottom:  6,
      paddingBottom: isClassic || isExecutive ? 4 : 0,
      borderBottomWidth: isClassic || isExecutive ? 1 : 0,
      borderBottomColor: "#e2e8f0",
    },

    /* Entries ──────────────────────────── */
    entryBlock: { marginBottom: 10 },
    entryRow: {
      flexDirection:  "row",
      justifyContent: "space-between",
      alignItems:     "flex-start",
      marginBottom:   2,
    },
    entryTitle: {
      fontFamily: "Helvetica-Bold",
      fontSize:   10.5,
      color:      p.body,
      flex:       1,
      marginRight: 8,
    },
    entryDate: {
      fontSize:   8,
      color:      p.muted,
      flexShrink: 0,
      marginTop:  1,
    },
    entryCompany: {
      fontSize:     9.5,
      color:        isCreative ? p.accent : p.sub,
      marginBottom: 4,
    },

    /* Bullets ──────────────────────────── */
    bullet: {
      fontSize:    9,
      color:       "#475569",
      lineHeight:  1.55,
      marginBottom: 2,
      paddingLeft: 6,
    },

    /* Summary / body text ──────────────── */
    bodyText: {
      fontSize:   9,
      color:      p.muted,
      lineHeight: 1.6,
      marginTop:  2,
    },

    /* Skills ───────────────────────────── */
    skillsWrap: { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
    pill: {
      fontSize:         8,
      color:            isCreative ? "#6d28d9" : "#475569",
      backgroundColor:  isCreative ? "#ede9fe" : "#f1f5f9",
      paddingHorizontal: 7,
      paddingVertical:  3,
      borderRadius:     4,
      marginRight:      4,
      marginBottom:     4,
    },

    /* Meta (GPA / honours) */
    meta: { fontSize: 8, color: p.muted, marginTop: 2 },

    /* Title used when there is no date alongside (Projects, Certs) */
    blockTitle: {
      fontFamily:   "Helvetica-Bold",
      fontSize:     10.5,
      color:        p.body,
      marginBottom: 2,
    },
  });
}

/* ─────────────────────────────────────────
   Sidebar template (two-column)
───────────────────────────────────────── */
const sidebarStyles = StyleSheet.create({
  page:        { flexDirection: "row", backgroundColor: "#ffffff", fontFamily: "Helvetica", fontSize: 9, color: "#0f172a" },
  sidebar:     { width: "34%", backgroundColor: "#1e293b", paddingTop: 36, paddingBottom: 36, paddingLeft: 22, paddingRight: 18 },
  main:        { flex: 1, paddingTop: 36, paddingBottom: 36, paddingLeft: 22, paddingRight: 28 },
  name:        { fontSize: 17, fontFamily: "Helvetica-Bold", color: "#f8fafc", marginBottom: 4, lineHeight: 1.2 },
  title:       { fontSize: 9, color: "#38bdf8", marginBottom: 14, lineHeight: 1.4 },
  divider:     { borderBottomWidth: 1, borderBottomColor: "#334155", marginBottom: 10 },
  sLabel:      { fontSize: 6.5, fontFamily: "Helvetica-Bold", color: "#38bdf8", letterSpacing: 1.6, marginBottom: 5, marginTop: 12 },
  contactItem: { fontSize: 7.5, color: "#94a3b8", marginBottom: 4, lineHeight: 1.4 },
  skillsWrap:  { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
  pill:        { fontSize: 7, color: "#f1f5f9", backgroundColor: "#334155", paddingHorizontal: 5, paddingVertical: 2.5, borderRadius: 3, marginRight: 3, marginBottom: 3 },
  langItem:    { fontSize: 7.5, color: "#94a3b8", marginBottom: 3 },
  mainLabel:   { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: "#1e293b", letterSpacing: 1.4, marginTop: 14, marginBottom: 5, paddingBottom: 3, borderBottomWidth: 1, borderBottomColor: "#e2e8f0" },
  entryBlock:  { marginBottom: 9 },
  entryRow:    { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 },
  entryTitle:  { fontFamily: "Helvetica-Bold", fontSize: 10, color: "#0f172a", flex: 1, marginRight: 6 },
  entryDate:   { fontSize: 7.5, color: "#64748b", flexShrink: 0, marginTop: 1 },
  entryCompany:{ fontSize: 9, color: "#2563eb", marginBottom: 3 },
  bullet:      { fontSize: 8.5, color: "#334155", lineHeight: 1.5, marginBottom: 2, paddingLeft: 5 },
  bodyText:    { fontSize: 8.5, color: "#475569", lineHeight: 1.6, marginTop: 2 },
  blockTitle:  { fontFamily: "Helvetica-Bold", fontSize: 10, color: "#0f172a", marginBottom: 2 },
  meta:        { fontSize: 7.5, color: "#64748b", marginTop: 2 },
});

function SidebarPDF({ data }: { data: ResumeData }) {
  const ph = PLACEHOLDER_RESUME_DATA;
  const { basics, experiences, educations, skills, certifications, languages, projects } = data;
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  const activeExps = experiences.filter((e) => e.company || e.role);
  const activeEdus = educations.filter((e) => e.school || e.degree);
  const renderExps = activeExps.length > 0 ? activeExps : ph.experiences;
  const renderEdus = activeEdus.length > 0 ? activeEdus : [phEdu];

  const displaySkills =
    skills.aiSkills ??
    (skills.rawSkills.trim()
      ? skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean)
      : ph.skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean));

  const ss = sidebarStyles;

  return (
    <Document>
      <Page size="A4" style={ss.page}>
        {/* ── Left sidebar ── */}
        <View style={ss.sidebar}>
          <Text style={ss.name}>
            {val(basics.firstName, ph.basics.firstName)}{"\n"}{val(basics.lastName, ph.basics.lastName)}
          </Text>
          <Text style={ss.title}>{val(basics.jobTitle, ph.basics.jobTitle)}</Text>
          <View style={ss.divider} />

          <Text style={ss.sLabel}>CONTACT</Text>
          <Text style={ss.contactItem}>{val(basics.email, ph.basics.email)}</Text>
          <Text style={ss.contactItem}>{val(basics.phone, ph.basics.phone ?? "+1 555 000 0000")}</Text>
          <Text style={ss.contactItem}>{val(basics.location, ph.basics.location)}</Text>
          {(basics.url || ph.basics.url) ? <Text style={ss.contactItem}>{basics.url || ph.basics.url}</Text> : null}

          {displaySkills.length > 0 && (
            <>
              <Text style={ss.sLabel}>SKILLS</Text>
              <View style={ss.skillsWrap}>
                {displaySkills.map((sk, i) => <Text key={i} style={ss.pill}>{sk}</Text>)}
              </View>
            </>
          )}

          {languages && languages.length > 0 && (
            <>
              <Text style={ss.sLabel}>LANGUAGES</Text>
              {languages.map((l) => (
                <Text key={l.id} style={ss.langItem}>{l.language} ({l.proficiency})</Text>
              ))}
            </>
          )}
        </View>

        {/* ── Right main area ── */}
        <View style={ss.main}>
          {(basics.summary || ph.basics.summary) && (
            <View>
              <Text style={ss.mainLabel}>SUMMARY</Text>
              <Text style={ss.bodyText}>{basics.summary || ph.basics.summary}</Text>
            </View>
          )}

          <Text style={ss.mainLabel}>EXPERIENCE</Text>
          {renderExps.map((exp, i) => {
            const bullets = exp.aiBullets ?? (activeExps.length === 0 && i === 0 ? phExp.aiBullets : null);
            return (
              <View key={exp.id} style={ss.entryBlock} wrap={false}>
                <View style={ss.entryRow}>
                  <Text style={ss.entryTitle}>{exp.role || phExp.role}</Text>
                  <Text style={ss.entryDate}>{exp.duration || phExp.duration}</Text>
                </View>
                <Text style={ss.entryCompany}>{exp.company || phExp.company}</Text>
                {(bullets ?? []).map((b, j) => <Text key={j} style={ss.bullet}>{"·  "}{b}</Text>)}
              </View>
            );
          })}

          <Text style={ss.mainLabel}>EDUCATION</Text>
          {renderEdus.map((edu) => (
            <View key={edu.id} style={ss.entryBlock} wrap={false}>
              <View style={ss.entryRow}>
                <Text style={ss.entryTitle}>{edu.degree || phEdu.degree}</Text>
                <Text style={ss.entryDate}>{edu.graduationYear || phEdu.graduationYear}</Text>
              </View>
              <Text style={ss.entryCompany}>{edu.school || phEdu.school}</Text>
              {(edu.gpa || edu.achievements) ? (
                <Text style={ss.meta}>{[edu.gpa ? `GPA: ${edu.gpa}` : null, edu.achievements ?? null].filter(Boolean).join("  ·  ")}</Text>
              ) : null}
            </View>
          ))}

          {certifications && certifications.length > 0 && (
            <View>
              <Text style={ss.mainLabel}>CERTIFICATIONS</Text>
              {certifications.map((c) => (
                <View key={c.id} style={ss.entryBlock} wrap={false}>
                  <Text style={ss.blockTitle}>{c.name}</Text>
                  <Text style={ss.entryCompany}>{c.issuer}{"  ·  "}{c.date}{c.expires ? `  (exp. ${c.expires})` : ""}</Text>
                </View>
              ))}
            </View>
          )}

          {projects && projects.length > 0 && (
            <View>
              <Text style={ss.mainLabel}>PROJECTS</Text>
              {projects.map((p) => (
                <View key={p.id} style={ss.entryBlock} wrap={false}>
                  <Text style={ss.blockTitle}>{p.name}</Text>
                  {p.technologies.length > 0 && <Text style={ss.entryCompany}>{p.technologies.join("  ·  ")}</Text>}
                  <Text style={ss.bodyText}>{p.description}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}

/* ─────────────────────────────────────────
   Sharp template (bold full-width header)
───────────────────────────────────────── */
const sharpStyles = StyleSheet.create({
  page:        { flexDirection: "column", backgroundColor: "#ffffff", fontFamily: "Helvetica", fontSize: 9, color: "#0f172a" },
  header:      { backgroundColor: "#0f766e", paddingTop: 28, paddingBottom: 28, paddingLeft: 44, paddingRight: 44, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  headerLeft:  {},
  headerRight: { alignItems: "flex-end" },
  name:        { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#ffffff", marginBottom: 4, letterSpacing: 0.5 },
  title:       { fontSize: 10, color: "#99f6e4" },
  contactItem: { fontSize: 7.5, color: "#ccfbf1", marginBottom: 2 },
  body:        { flex: 1, paddingHorizontal: 44, paddingTop: 24, paddingBottom: 32 },
  sLabel:      { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: "#0f766e", letterSpacing: 1.4, marginTop: 16, marginBottom: 5, paddingBottom: 3, borderBottomWidth: 1.5, borderBottomColor: "#0f766e" },
  entryBlock:  { marginBottom: 10 },
  entryRow:    { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 2 },
  entryTitle:  { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: "#0f172a", flex: 1, marginRight: 8 },
  entryDate:   { fontSize: 8, color: "#64748b", flexShrink: 0, marginTop: 1 },
  entryCompany:{ fontSize: 9.5, color: "#0f766e", marginBottom: 4 },
  bullet:      { fontSize: 9, color: "#475569", lineHeight: 1.55, marginBottom: 2, paddingLeft: 6 },
  bodyText:    { fontSize: 9, color: "#475569", lineHeight: 1.6, marginTop: 2 },
  blockTitle:  { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: "#0f172a", marginBottom: 2 },
  meta:        { fontSize: 8, color: "#64748b", marginTop: 2 },
  skillsWrap:  { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
  pill:        { fontSize: 8, color: "#0f766e", backgroundColor: "#f0fdfa", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 4, marginRight: 4, marginBottom: 4 },
});

function SharpPDF({ data }: { data: ResumeData }) {
  const ph = PLACEHOLDER_RESUME_DATA;
  const { basics, experiences, educations, skills, certifications, languages, projects } = data;
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  const activeExps = experiences.filter((e) => e.company || e.role);
  const activeEdus = educations.filter((e) => e.school || e.degree);
  const renderExps = activeExps.length > 0 ? activeExps : ph.experiences;
  const renderEdus = activeEdus.length > 0 ? activeEdus : [phEdu];

  const displaySkills =
    skills.aiSkills ??
    (skills.rawSkills.trim()
      ? skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean)
      : ph.skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean));

  const sh = sharpStyles;

  return (
    <Document>
      <Page size="A4" style={sh.page}>
        {/* ── Header band ── */}
        <View style={sh.header}>
          <View style={sh.headerLeft}>
            <Text style={sh.name}>
              {val(basics.firstName, ph.basics.firstName)} {val(basics.lastName, ph.basics.lastName)}
            </Text>
            <Text style={sh.title}>{val(basics.jobTitle, ph.basics.jobTitle)}</Text>
          </View>
          <View style={sh.headerRight}>
            <Text style={sh.contactItem}>{val(basics.email, ph.basics.email)}</Text>
            <Text style={sh.contactItem}>{val(basics.phone, ph.basics.phone ?? "+1 555 000 0000")}</Text>
            <Text style={sh.contactItem}>{val(basics.location, ph.basics.location)}</Text>
            {(basics.url || ph.basics.url) ? <Text style={sh.contactItem}>{basics.url || ph.basics.url}</Text> : null}
          </View>
        </View>

        {/* ── Body ── */}
        <View style={sh.body}>
          {(basics.summary || ph.basics.summary) && (
            <View>
              <Text style={sh.sLabel}>SUMMARY</Text>
              <Text style={sh.bodyText}>{basics.summary || ph.basics.summary}</Text>
            </View>
          )}

          <Text style={sh.sLabel}>EXPERIENCE</Text>
          {renderExps.map((exp, i) => {
            const bullets = exp.aiBullets ?? (activeExps.length === 0 && i === 0 ? phExp.aiBullets : null);
            return (
              <View key={exp.id} style={sh.entryBlock} wrap={false}>
                <View style={sh.entryRow}>
                  <Text style={sh.entryTitle}>{exp.role || phExp.role}</Text>
                  <Text style={sh.entryDate}>{exp.duration || phExp.duration}</Text>
                </View>
                <Text style={sh.entryCompany}>{exp.company || phExp.company}</Text>
                {(bullets ?? []).map((b, j) => <Text key={j} style={sh.bullet}>{"·  "}{b}</Text>)}
              </View>
            );
          })}

          <Text style={sh.sLabel}>EDUCATION</Text>
          {renderEdus.map((edu) => (
            <View key={edu.id} style={sh.entryBlock} wrap={false}>
              <View style={sh.entryRow}>
                <Text style={sh.entryTitle}>{edu.degree || phEdu.degree}</Text>
                <Text style={sh.entryDate}>{edu.graduationYear || phEdu.graduationYear}</Text>
              </View>
              <Text style={sh.entryCompany}>{edu.school || phEdu.school}</Text>
              {(edu.gpa || edu.achievements) ? (
                <Text style={sh.meta}>{[edu.gpa ? `GPA: ${edu.gpa}` : null, edu.achievements ?? null].filter(Boolean).join("  ·  ")}</Text>
              ) : null}
            </View>
          ))}

          {displaySkills.length > 0 && (
            <View>
              <Text style={sh.sLabel}>SKILLS</Text>
              <View style={sh.skillsWrap}>
                {displaySkills.map((sk, i) => <Text key={i} style={sh.pill}>{sk}</Text>)}
              </View>
            </View>
          )}

          {certifications && certifications.length > 0 && (
            <View>
              <Text style={sh.sLabel}>CERTIFICATIONS</Text>
              {certifications.map((c) => (
                <View key={c.id} style={sh.entryBlock} wrap={false}>
                  <Text style={sh.blockTitle}>{c.name}</Text>
                  <Text style={sh.entryCompany}>{c.issuer}{"  ·  "}{c.date}{c.expires ? `  (exp. ${c.expires})` : ""}</Text>
                </View>
              ))}
            </View>
          )}

          {languages && languages.length > 0 && (
            <View>
              <Text style={sh.sLabel}>LANGUAGES</Text>
              <View style={sh.skillsWrap}>
                {languages.map((l) => <Text key={l.id} style={sh.pill}>{l.language} ({l.proficiency})</Text>)}
              </View>
            </View>
          )}

          {projects && projects.length > 0 && (
            <View>
              <Text style={sh.sLabel}>PROJECTS</Text>
              {projects.map((p) => (
                <View key={p.id} style={sh.entryBlock} wrap={false}>
                  <Text style={sh.blockTitle}>{p.name}</Text>
                  {p.technologies.length > 0 && <Text style={sh.entryCompany}>{p.technologies.join("  ·  ")}</Text>}
                  <Text style={sh.bodyText}>{p.description}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export default function ResumePDF({ data }: { data: ResumeData }) {
  const template = data.template ?? "modern";
  if (template === "sidebar") return <SidebarPDF data={data} />;
  if (template === "sharp")   return <SharpPDF   data={data} />;
  const s = buildStyles(template);
  const { basics, experiences, educations, skills, certifications, languages, projects } = data;
  const ph = PLACEHOLDER_RESUME_DATA;
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  const activeExps = experiences.filter((e) => e.company || e.role);
  const activeEdus = educations.filter((e) => e.school || e.degree);
  const renderExps = activeExps.length > 0 ? activeExps : ph.experiences;
  const renderEdus = activeEdus.length > 0 ? activeEdus : [phEdu];

  const displaySkills =
    skills.aiSkills ??
    (skills.rawSkills.trim()
      ? skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean)
      : ph.skills.rawSkills.split(",").map((x) => x.trim()).filter(Boolean));

  const isExecutive = template === "executive";
  const isMinimal   = template === "minimal";

  const displayName = `${val(basics.firstName, ph.basics.firstName)} ${val(basics.lastName, ph.basics.lastName)}`.trim();
  const displayTitle = val(basics.jobTitle, ph.basics.jobTitle);
  const displaySummary = basics.summary || ph.basics.summary;

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ── Sidebar strip (Modern only) ── */}
        {template === "modern" && <View style={s.sidebar} />}

        {/* ── Main content column ── */}
        <View style={s.body}>

          {/* Header */}
          <Text style={s.name}>{displayName}</Text>

          <Text style={s.headline}>
            {isExecutive ? displayTitle.toUpperCase() : displayTitle}
          </Text>

          <View style={s.contactRow}>
            <Text style={s.contactItem}>{val(basics.email, ph.basics.email)}</Text>
            <Text style={s.contactItem}>·  {val(basics.phone, ph.basics.phone ?? "+1 (555) 000-0000")}</Text>
            <Text style={s.contactItem}>·  {val(basics.location, ph.basics.location)}</Text>
            <Text style={s.contactItem}>·  {val(basics.url, ph.basics.url)}</Text>
          </View>

          {!isMinimal && <View style={s.divider} />}

          {/* Summary */}
          {displaySummary ? (
            <View>
              <Text style={s.sectionLabel}>SUMMARY</Text>
              <Text style={s.bodyText}>{displaySummary}</Text>
            </View>
          ) : null}

          {/* Experience */}
          <View>
            <Text style={s.sectionLabel}>EXPERIENCE</Text>
            {renderExps.map((exp, i) => {
              const bullets = exp.aiBullets ?? (activeExps.length === 0 && i === 0 ? phExp.aiBullets : null);
              return (
                <View key={exp.id} style={s.entryBlock} wrap={false}>
                  <View style={s.entryRow}>
                    <Text style={s.entryTitle}>{exp.role || phExp.role}</Text>
                    <Text style={s.entryDate}>{exp.duration || phExp.duration}</Text>
                  </View>
                  <Text style={s.entryCompany}>{exp.company || phExp.company}</Text>
                  {(bullets ?? []).map((b, j) => (
                    <Text key={j} style={s.bullet}>{"·  "}{b}</Text>
                  ))}
                </View>
              );
            })}
          </View>

          {/* Education */}
          <View>
            <Text style={s.sectionLabel}>EDUCATION</Text>
            {renderEdus.map((edu) => (
              <View key={edu.id} style={s.entryBlock} wrap={false}>
                <View style={s.entryRow}>
                  <Text style={s.entryTitle}>{edu.degree || phEdu.degree}</Text>
                  <Text style={s.entryDate}>{edu.graduationYear || phEdu.graduationYear}</Text>
                </View>
                <Text style={s.entryCompany}>{edu.school || phEdu.school}</Text>
                {edu.gpa || edu.achievements ? (
                  <Text style={s.meta}>
                    {[edu.gpa ? `GPA: ${edu.gpa}` : null, edu.achievements ?? null]
                      .filter(Boolean)
                      .join("   ·   ")}
                  </Text>
                ) : null}
              </View>
            ))}
          </View>

          {/* Skills */}
          <View>
            <Text style={s.sectionLabel}>SKILLS</Text>
            <View style={s.skillsWrap}>
              {displaySkills.map((skill, i) => (
                <Text key={i} style={s.pill}>{skill}</Text>
              ))}
            </View>
          </View>

          {/* Certifications */}
          {certifications && certifications.length > 0 ? (
            <View>
              <Text style={s.sectionLabel}>CERTIFICATIONS</Text>
              {certifications.map((cert) => (
                <View key={cert.id} style={s.entryBlock} wrap={false}>
                  <Text style={s.blockTitle}>{cert.name}</Text>
                  <Text style={s.entryCompany}>
                    {cert.issuer}{"  ·  "}{cert.date}
                    {cert.expires ? `  (exp. ${cert.expires})` : ""}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* Languages */}
          {languages && languages.length > 0 ? (
            <View>
              <Text style={s.sectionLabel}>LANGUAGES</Text>
              <View style={s.skillsWrap}>
                {languages.map((lang) => (
                  <Text key={lang.id} style={s.pill}>
                    {lang.language} ({lang.proficiency})
                  </Text>
                ))}
              </View>
            </View>
          ) : null}

          {/* Projects */}
          {projects && projects.length > 0 ? (
            <View>
              <Text style={s.sectionLabel}>PROJECTS</Text>
              {projects.map((proj) => (
                <View key={proj.id} style={s.entryBlock} wrap={false}>
                  <Text style={s.blockTitle}>{proj.name}</Text>
                  {proj.technologies.length > 0 ? (
                    <Text style={s.entryCompany}>{proj.technologies.join("  ·  ")}</Text>
                  ) : null}
                  <Text style={s.bodyText}>{proj.description}</Text>
                </View>
              ))}
            </View>
          ) : null}

        </View>
      </Page>
    </Document>
  );
}
