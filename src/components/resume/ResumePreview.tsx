"use client";

import type { ResumeData } from "@/types/resume";
import { PLACEHOLDER_RESUME_DATA } from "@/lib/defaults";

type Ph = typeof PLACEHOLDER_RESUME_DATA;

function val(v: string | undefined, fallback: string) {
  return (v ?? "").trim() || fallback;
}

function getSkills(data: ResumeData, ph: Ph) {
  return (
    data.skills.aiSkills ??
    (data.skills.rawSkills.trim()
      ? data.skills.rawSkills.split(",").map((s) => s.trim()).filter(Boolean)
      : ph.skills.rawSkills.split(",").map((s) => s.trim()).filter(Boolean))
  );
}

function Section({ title, children, accent = "text-blue-600" }: { title: string; children: React.ReactNode; accent?: string }) {
  return (
    <div className="mt-4">
      <p className={`text-[9.5px] font-bold tracking-[0.14em] uppercase mb-2 ${accent}`}>{title}</p>
      {children}
    </div>
  );
}

/* ─── MODERN ─── */
function ModernTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role || e.aiBullets?.length);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-full" />
      <div className="pl-4">
        <h1 className="font-serif text-[24px] text-brand-900 mb-0.5 leading-tight">
          {val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}
        </h1>
        <p className="text-[12px] text-blue-600 font-semibold mb-2 tracking-wide">
          {val(b.jobTitle, ph.basics.jobTitle)}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10.5px] text-gray-400 pb-3 border-b-2 border-blue-600">
          <span>{val(b.email, ph.basics.email)}</span>
          {(b.phone || ph.basics.phone) && <span>• {b.phone || ph.basics.phone}</span>}
          <span>• {val(b.location, ph.basics.location)}</span>
          <span>• {val(b.url, ph.basics.url)}</span>
        </div>

        {(b.summary || ph.basics.summary) && (
          <Section title="Summary">
            <p className="text-[11px] text-[#3a3a50] leading-[1.65]">{b.summary || ph.basics.summary}</p>
          </Section>
        )}

        <Section title="Experience">
          {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
            const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
            return (
              <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
                <div className="flex items-start justify-between">
                  <span className="text-[12px] font-semibold text-brand-900">{exp.role || phExp.role}</span>
                  <span className="text-[10px] text-gray-400 flex-shrink-0 ml-2">{exp.duration || phExp.duration}</span>
                </div>
                <p className="text-[11px] text-blue-600 font-medium mb-1">{exp.company || phExp.company}</p>
                {bullets && (
                  <ul className="pl-3 text-[11px] text-[#3a3a50] leading-[1.6] list-disc space-y-0.5">
                    {bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                {!bullets && exp.rawDescription && (
                  <p className="text-[11px] text-gray-400 italic">{exp.rawDescription}</p>
                )}
              </div>
            );
          })}
        </Section>

        <Section title="Education">
          {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
            <div key={edu.id ?? i} className={i > 0 ? "mt-3" : ""}>
              <div className="flex items-start justify-between">
                <span className="text-[12px] font-semibold text-brand-900">{edu.degree || phEdu.degree}</span>
                <span className="text-[10px] text-gray-400 flex-shrink-0 ml-2">{edu.graduationYear || phEdu.graduationYear}</span>
              </div>
              <p className="text-[11px] text-blue-600 font-medium">{edu.school || phEdu.school}</p>
              {edu.gpa && <p className="text-[10px] text-gray-400 mt-0.5">GPA: {edu.gpa}{edu.achievements ? ` · ${edu.achievements}` : ""}</p>}
            </div>
          ))}
        </Section>

        {skills.length > 0 && (
          <Section title="Skills">
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-[#f0efe9] text-[10px] text-brand-900 font-medium">{s}</span>
              ))}
            </div>
          </Section>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <Section title="Certifications">
            {data.certifications.map((c) => (
              <div key={c.id} className="mb-1.5">
                <div className="text-[11px] font-semibold text-brand-900">{c.name}</div>
                <div className="text-[10px] text-gray-400">{c.issuer} · {c.date}</div>
              </div>
            ))}
          </Section>
        )}

        {data.languages && data.languages.length > 0 && (
          <Section title="Languages">
            <div className="flex flex-wrap gap-2 text-[11px] text-[#3a3a50]">
              {data.languages.map((l) => (
                <span key={l.id}><span className="font-medium">{l.language}</span> <span className="text-gray-400">({l.proficiency})</span></span>
              ))}
            </div>
          </Section>
        )}

        {data.projects && data.projects.length > 0 && (
          <Section title="Projects">
            {data.projects.map((p) => (
              <div key={p.id} className="mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-brand-900">{p.name}</span>
                  {p.url && <span className="text-[10px] text-blue-600">↗</span>}
                </div>
                {p.technologies.length > 0 && <p className="text-[10px] text-blue-600 font-medium mb-0.5">{p.technologies.join(", ")}</p>}
                <p className="text-[11px] text-[#3a3a50] leading-[1.5]">{p.description}</p>
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

/* ─── CLASSIC ─── */
function ClassicTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900">
      <h1 className="font-serif text-[22px] text-slate-800 mb-0.5">{val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}</h1>
      <p className="text-[12px] text-slate-600 font-medium mb-2">{val(b.jobTitle, ph.basics.jobTitle)}</p>
      <div className="flex flex-wrap gap-x-3 text-[10px] text-slate-500 pb-2.5 border-b-2 border-slate-800 mb-0">
        <span>{val(b.email, ph.basics.email)}</span>
        {(b.phone || ph.basics.phone) && <span>• {b.phone || ph.basics.phone}</span>}
        <span>• {val(b.location, ph.basics.location)}</span>
        <span>• {val(b.url, ph.basics.url)}</span>
      </div>

      <Section title="Experience" accent="text-slate-500">
        {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
          const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
          return (
            <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
              <div className="flex items-start justify-between">
                <span className="text-[12px] font-semibold text-slate-800">{exp.role || phExp.role}</span>
                <span className="text-[10px] text-slate-400 ml-2 flex-shrink-0">{exp.duration || phExp.duration}</span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium mb-1">{exp.company || phExp.company}</p>
              {bullets && (
                <ul className="pl-3 text-[11px] text-slate-600 leading-[1.6] list-disc space-y-0.5">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Education" accent="text-slate-500">
        {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
          <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-semibold text-slate-800">{edu.degree || phEdu.degree}</span>
              <span className="text-[10px] text-slate-400 ml-2 flex-shrink-0">{edu.graduationYear || phEdu.graduationYear}</span>
            </div>
            <p className="text-[11px] text-slate-600">{edu.school || phEdu.school}</p>
          </div>
        ))}
      </Section>

      {skills.length > 0 && (
        <Section title="Skills" accent="text-slate-500">
          <p className="text-[11px] text-slate-600">{skills.join(" · ")}</p>
        </Section>
      )}
    </div>
  );
}

/* ─── MINIMAL ─── */
function MinimalTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900">
      <h1 className="text-[20px] text-slate-700 font-light mb-0.5">{val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}</h1>
      <p className="text-[12px] text-slate-400 mb-3">{val(b.jobTitle, ph.basics.jobTitle)}</p>
      <div className="flex flex-wrap gap-x-3 text-[10px] text-slate-400 mb-4">
        <span>{val(b.email, ph.basics.email)}</span>
        {(b.phone || ph.basics.phone) && <span>{b.phone || ph.basics.phone}</span>}
        <span>{val(b.location, ph.basics.location)}</span>
      </div>

      <Section title="Experience" accent="text-slate-400">
        {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
          const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
          return (
            <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
              <div className="flex items-start justify-between mb-0.5">
                <span className="text-[12px] font-medium text-slate-700">{exp.role || phExp.role}</span>
                <span className="text-[10px] text-slate-400 ml-2">{exp.duration || phExp.duration}</span>
              </div>
              <p className="text-[10.5px] text-slate-500 mb-1">{exp.company || phExp.company}</p>
              {bullets && (
                <ul className="pl-3 text-[11px] text-slate-500 leading-[1.65] space-y-0.5 list-disc">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Education" accent="text-slate-400">
        {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
          <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
            <span className="text-[12px] font-medium text-slate-700">{edu.degree || phEdu.degree}</span>
            <p className="text-[10.5px] text-slate-500">{edu.school || phEdu.school}{edu.graduationYear ? `, ${edu.graduationYear}` : ""}</p>
          </div>
        ))}
      </Section>

      {skills.length > 0 && (
        <Section title="Skills" accent="text-slate-400">
          <p className="text-[11px] text-slate-500">{skills.join(", ")}</p>
        </Section>
      )}
    </div>
  );
}

/* ─── CREATIVE ─── */
function CreativeTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900">
      <div className="border-l-4 border-violet-500 pl-4 mb-3">
        <h1 className="font-serif text-[24px] text-violet-600 mb-0.5">{val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}</h1>
        <p className="text-[12px] text-violet-500 font-medium tracking-wide">{val(b.jobTitle, ph.basics.jobTitle)}</p>
      </div>
      <div className="flex flex-wrap gap-x-3 text-[10px] text-gray-400 pb-3 border-b border-violet-200 mb-0">
        <span>{val(b.email, ph.basics.email)}</span>
        {(b.phone || ph.basics.phone) && <span>• {b.phone || ph.basics.phone}</span>}
        <span>• {val(b.location, ph.basics.location)}</span>
      </div>

      <Section title="Work Experience" accent="text-violet-500">
        {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
          const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
          return (
            <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
              <div className="flex items-start justify-between">
                <span className="text-[12px] font-semibold text-slate-800">{exp.role || phExp.role}</span>
                <span className="text-[10px] text-gray-400 ml-2 flex-shrink-0">{exp.duration || phExp.duration}</span>
              </div>
              <p className="text-[11px] text-violet-500 font-medium mb-1">{exp.company || phExp.company}</p>
              {bullets && (
                <ul className="pl-3 text-[11px] text-slate-600 leading-[1.6] list-disc space-y-0.5">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Education" accent="text-violet-500">
        {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
          <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-semibold text-slate-800">{edu.degree || phEdu.degree}</span>
              <span className="text-[10px] text-gray-400 ml-2 flex-shrink-0">{edu.graduationYear || phEdu.graduationYear}</span>
            </div>
            <p className="text-[11px] text-violet-500">{edu.school || phEdu.school}</p>
          </div>
        ))}
      </Section>

      {skills.length > 0 && (
        <Section title="Tech Stack" accent="text-violet-500">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-full bg-violet-100 text-[10px] text-violet-700 font-medium">{s}</span>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

/* ─── EXECUTIVE ─── */
function ExecutiveTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900 text-center">
      <h1 className="font-serif text-[26px] text-slate-900 tracking-widest uppercase mb-0.5">{val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}</h1>
      <p className="text-[12px] text-slate-600 font-medium mb-2 tracking-wider">{val(b.jobTitle, ph.basics.jobTitle).toUpperCase()}</p>
      <div className="flex flex-wrap justify-center gap-x-3 text-[10px] text-slate-500 pb-3 border-b-2 border-slate-900 mb-0">
        <span>{val(b.email, ph.basics.email)}</span>
        {(b.phone || ph.basics.phone) && <span>• {b.phone || ph.basics.phone}</span>}
        <span>• {val(b.location, ph.basics.location)}</span>
      </div>

      {(b.summary || ph.basics.summary) && (
        <Section title="Executive Profile" accent="text-slate-500">
          <p className="text-[11px] text-slate-600 leading-[1.7] max-w-lg mx-auto">{b.summary || ph.basics.summary}</p>
        </Section>
      )}

      <Section title="Professional Experience" accent="text-slate-500">
        {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
          const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
          return (
            <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
              <span className="text-[13px] font-semibold text-slate-800">{exp.role || phExp.role}</span>
              <p className="text-[11px] text-slate-600 mb-1">{exp.company || phExp.company} · {exp.duration || phExp.duration}</p>
              {bullets && (
                <ul className="pl-3 text-[11px] text-slate-600 leading-[1.6] list-disc space-y-0.5 text-left max-w-lg mx-auto">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}
      </Section>

      <Section title="Education" accent="text-slate-500">
        {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
          <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
            <span className="text-[12px] font-semibold text-slate-800">{edu.degree || phEdu.degree}</span>
            <p className="text-[11px] text-slate-600">{edu.school || phEdu.school}{edu.graduationYear ? `, ${edu.graduationYear}` : ""}</p>
          </div>
        ))}
      </Section>

      {skills.length > 0 && (
        <Section title="Core Competencies" accent="text-slate-500">
          <p className="text-[11px] text-slate-600">{skills.join(" · ")}</p>
        </Section>
      )}
    </div>
  );
}

/* ─── SIDEBAR ─── */
function SidebarTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role || e.aiBullets?.length);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900 flex min-h-full">
      {/* Left sidebar */}
      <div className="w-[34%] bg-[#1e293b] px-4 py-6 flex-shrink-0">
        <h1 className="text-[18px] font-bold text-white leading-tight mb-1">
          {val(b.firstName, ph.basics.firstName)}<br />{val(b.lastName, ph.basics.lastName)}
        </h1>
        <p className="text-[10px] text-sky-400 mb-3 leading-snug">{val(b.jobTitle, ph.basics.jobTitle)}</p>
        <div className="border-t border-slate-600 mb-3" />

        <p className="text-[8px] font-bold tracking-[0.16em] uppercase text-sky-400 mb-2">Contact</p>
        <p className="text-[9px] text-slate-400 mb-1.5 break-all">{val(b.email, ph.basics.email)}</p>
        <p className="text-[9px] text-slate-400 mb-1.5">{val(b.phone, ph.basics.phone ?? "+1 555 000 0000")}</p>
        <p className="text-[9px] text-slate-400 mb-1.5">{val(b.location, ph.basics.location)}</p>
        {(b.url || ph.basics.url) && <p className="text-[9px] text-slate-400 mb-1.5">{b.url || ph.basics.url}</p>}

        {skills.length > 0 && (
          <>
            <p className="text-[8px] font-bold tracking-[0.16em] uppercase text-sky-400 mt-4 mb-2">Skills</p>
            <div className="flex flex-wrap gap-1">
              {skills.map((s) => (
                <span key={s} className="px-1.5 py-0.5 bg-slate-700 text-[8.5px] text-slate-200 rounded">{s}</span>
              ))}
            </div>
          </>
        )}

        {data.languages && data.languages.length > 0 && (
          <>
            <p className="text-[8px] font-bold tracking-[0.16em] uppercase text-sky-400 mt-4 mb-2">Languages</p>
            {data.languages.map((l) => (
              <p key={l.id} className="text-[9px] text-slate-400 mb-1">
                <span className="text-slate-200 font-medium">{l.language}</span> ({l.proficiency})
              </p>
            ))}
          </>
        )}
      </div>

      {/* Right main */}
      <div className="flex-1 px-5 py-6">
        {(b.summary || ph.basics.summary) && (
          <div className="mb-3">
            <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-slate-700 border-b border-slate-200 pb-1 mb-2">Summary</p>
            <p className="text-[10.5px] text-slate-600 leading-[1.65]">{b.summary || ph.basics.summary}</p>
          </div>
        )}

        <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-slate-700 border-b border-slate-200 pb-1 mb-2 mt-3">Experience</p>
        {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
          const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
          return (
            <div key={exp.id ?? i} className={i > 0 ? "mt-2.5" : ""}>
              <div className="flex items-start justify-between">
                <span className="text-[11.5px] font-semibold text-brand-900">{exp.role || phExp.role}</span>
                <span className="text-[9.5px] text-slate-400 flex-shrink-0 ml-2">{exp.duration || phExp.duration}</span>
              </div>
              <p className="text-[10.5px] text-blue-600 font-medium mb-1">{exp.company || phExp.company}</p>
              {bullets && (
                <ul className="pl-3 text-[10.5px] text-slate-600 leading-[1.6] list-disc space-y-0.5">
                  {bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          );
        })}

        <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-slate-700 border-b border-slate-200 pb-1 mb-2 mt-3">Education</p>
        {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
          <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
            <div className="flex items-start justify-between">
              <span className="text-[11.5px] font-semibold text-brand-900">{edu.degree || phEdu.degree}</span>
              <span className="text-[9.5px] text-slate-400 ml-2 flex-shrink-0">{edu.graduationYear || phEdu.graduationYear}</span>
            </div>
            <p className="text-[10.5px] text-blue-600 font-medium">{edu.school || phEdu.school}</p>
            {edu.gpa && <p className="text-[9.5px] text-slate-400 mt-0.5">GPA: {edu.gpa}{edu.achievements ? ` · ${edu.achievements}` : ""}</p>}
          </div>
        ))}

        {data.projects && data.projects.length > 0 && (
          <>
            <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-slate-700 border-b border-slate-200 pb-1 mb-2 mt-3">Projects</p>
            {data.projects.map((p) => (
              <div key={p.id} className="mb-2">
                <span className="text-[11.5px] font-semibold text-brand-900">{p.name}</span>
                {p.technologies.length > 0 && <p className="text-[9.5px] text-blue-600 font-medium">{p.technologies.join(", ")}</p>}
                <p className="text-[10.5px] text-slate-600 leading-[1.5]">{p.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

/* ─── SHARP ─── */
function SharpTemplate({ data, ph }: { data: ResumeData; ph: Ph }) {
  const b = data.basics;
  const skills = getSkills(data, ph);
  const activeExps = data.experiences.filter((e) => e.company || e.role || e.aiBullets?.length);
  const activeEdus = data.educations.filter((e) => e.school || e.degree);
  const phExp = ph.experiences[0];
  const phEdu = ph.educations[0];

  return (
    <div className="font-sans text-brand-900">
      {/* Header band */}
      <div className="bg-teal-700 px-6 py-5 flex items-center justify-between -mx-7 -mt-7 mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-white tracking-wide mb-0.5">
            {val(b.firstName, ph.basics.firstName)} {val(b.lastName, ph.basics.lastName)}
          </h1>
          <p className="text-[11px] text-teal-200">{val(b.jobTitle, ph.basics.jobTitle)}</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] text-teal-100 mb-1">{val(b.email, ph.basics.email)}</p>
          <p className="text-[9px] text-teal-100 mb-1">{val(b.phone, ph.basics.phone ?? "+1 555 000 0000")}</p>
          <p className="text-[9px] text-teal-100">{val(b.location, ph.basics.location)}</p>
        </div>
      </div>

      {(b.summary || ph.basics.summary) && (
        <div className="mb-3">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">Summary</p>
          <p className="text-[11px] text-slate-600 leading-[1.65]">{b.summary || ph.basics.summary}</p>
        </div>
      )}

      <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2 mt-3">Experience</p>
      {(activeExps.length ? activeExps : [phExp]).map((exp, i) => {
        const bullets = exp.aiBullets ?? (i === 0 && !activeExps.length ? phExp.aiBullets : null);
        return (
          <div key={exp.id ?? i} className={i > 0 ? "mt-3" : ""}>
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-semibold text-brand-900">{exp.role || phExp.role}</span>
              <span className="text-[10px] text-slate-400 ml-2 flex-shrink-0">{exp.duration || phExp.duration}</span>
            </div>
            <p className="text-[11px] text-teal-700 font-medium mb-1">{exp.company || phExp.company}</p>
            {bullets && (
              <ul className="pl-3 text-[11px] text-slate-600 leading-[1.6] list-disc space-y-0.5">
                {bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        );
      })}

      <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2 mt-3">Education</p>
      {(activeEdus.length ? activeEdus : [phEdu]).map((edu, i) => (
        <div key={edu.id ?? i} className={i > 0 ? "mt-2" : ""}>
          <div className="flex items-start justify-between">
            <span className="text-[12px] font-semibold text-brand-900">{edu.degree || phEdu.degree}</span>
            <span className="text-[10px] text-slate-400 ml-2 flex-shrink-0">{edu.graduationYear || phEdu.graduationYear}</span>
          </div>
          <p className="text-[11px] text-teal-700 font-medium">{edu.school || phEdu.school}</p>
          {edu.gpa && <p className="text-[10px] text-slate-400 mt-0.5">GPA: {edu.gpa}{edu.achievements ? ` · ${edu.achievements}` : ""}</p>}
        </div>
      ))}

      {skills.length > 0 && (
        <div className="mt-3">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded bg-teal-50 text-[9.5px] text-teal-700 font-medium border border-teal-200">{s}</span>
            ))}
          </div>
        </div>
      )}

      {data.certifications && data.certifications.length > 0 && (
        <div className="mt-3">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">Certifications</p>
          {data.certifications.map((c) => (
            <div key={c.id} className="mb-1.5">
              <div className="text-[11px] font-semibold text-brand-900">{c.name}</div>
              <div className="text-[9.5px] text-slate-500">{c.issuer} · {c.date}</div>
            </div>
          ))}
        </div>
      )}

      {data.languages && data.languages.length > 0 && (
        <div className="mt-3">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">Languages</p>
          <div className="flex flex-wrap gap-3 text-[11px]">
            {data.languages.map((l) => (
              <span key={l.id}><span className="font-medium">{l.language}</span> <span className="text-slate-400">({l.proficiency})</span></span>
            ))}
          </div>
        </div>
      )}

      {data.projects && data.projects.length > 0 && (
        <div className="mt-3">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">Projects</p>
          {data.projects.map((p) => (
            <div key={p.id} className="mb-2">
              <span className="text-[12px] font-semibold text-brand-900">{p.name}</span>
              {p.technologies.length > 0 && <p className="text-[9.5px] text-teal-700 font-medium">{p.technologies.join(", ")}</p>}
              <p className="text-[11px] text-slate-600 leading-[1.5]">{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResumePreview({ data }: { data: ResumeData }) {
  const template = data.template || "modern";
  const ph = PLACEHOLDER_RESUME_DATA;

  switch (template) {
    case "modern":    return <ModernTemplate    data={data} ph={ph} />;
    case "classic":   return <ClassicTemplate   data={data} ph={ph} />;
    case "minimal":   return <MinimalTemplate   data={data} ph={ph} />;
    case "creative":  return <CreativeTemplate  data={data} ph={ph} />;
    case "executive": return <ExecutiveTemplate data={data} ph={ph} />;
    case "sidebar":   return <SidebarTemplate   data={data} ph={ph} />;
    case "sharp":     return <SharpTemplate     data={data} ph={ph} />;
    default:          return <ModernTemplate    data={data} ph={ph} />;
  }
}
