// filepath: src/components/resume/ResumePreview.tsx
"use client";

import type { ResumeData, ResumeTemplate } from "@/types/resume";
import { PLACEHOLDER_RESUME_DATA, TEMPLATE_INFO } from "@/lib/defaults";
import { cn } from "@/lib/utils";

interface ResumePreviewProps {
  data: ResumeData;
}

function getDisplayValue(value: string, placeholder: string): string {
  return value.trim() || placeholder;
}

function getSkills(data: ResumeData, ph: typeof PLACEHOLDER_RESUME_DATA): string[] {
  return data.skills.aiSkills ??
    (data.skills.rawSkills.trim()
      ? data.skills.rawSkills.split(",").map((s) => s.trim()).filter(Boolean)
      : ph.skills.rawSkills.split(",").map((s) => s.trim()).filter(Boolean));
}

function getBullets(data: ResumeData, ph: typeof PLACEHOLDER_RESUME_DATA): string[] | null {
  return data.experience.aiBullets ??
    (data.experience.rawDescription.trim() ? null : ph.experience.aiBullets);
}

function ModernTemplate({ data, ph }: { data: ResumeData; ph: typeof PLACEHOLDER_RESUME_DATA }) {
  const firstName = getDisplayValue(data.basics.firstName, ph.basics.firstName);
  const lastName = getDisplayValue(data.basics.lastName, ph.basics.lastName);
  const jobTitle = getDisplayValue(data.basics.jobTitle, ph.basics.jobTitle);
  const email = getDisplayValue(data.basics.email, ph.basics.email);
  const location = getDisplayValue(data.basics.location, ph.basics.location);
  const url = getDisplayValue(data.basics.url, ph.basics.url);
  const phone = data.basics.phone || "";
  const summary = data.basics.summary || ph.basics.summary;
  const company = getDisplayValue(data.experience.company, ph.experience.company);
  const role = getDisplayValue(data.experience.role, ph.experience.role);
  const duration = getDisplayValue(data.experience.duration, ph.experience.duration);
  const school = getDisplayValue(data.education.school, ph.education.school);
  const degree = getDisplayValue(data.education.degree, ph.education.degree);
  const graduationYear = getDisplayValue(data.education.graduationYear, ph.education.graduationYear);
  const displaySkills = getSkills(data, ph);
  const bullets = getBullets(data, ph);
  const rawDescription = data.experience.rawDescription.trim();

  return (
    <div className="font-sans text-brand-900">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
      
      <div className="pl-4">
        {/* Header */}
        <h1 className="font-serif text-[26px] text-brand-900 mb-0.5">{firstName} {lastName}</h1>
        <p className="text-[13px] text-blue-600 font-medium mb-2.5 tracking-wide">{jobTitle}</p>

        {/* Contact */}
        <div className="flex flex-wrap gap-3 text-[12px] text-gray-400 pb-4 border-b-2 border-blue-600 mb-0">
          <span>{email}</span>
          {phone && <span>• {phone}</span>}
          <span>• {location}</span>
          <span>• {url}</span>
        </div>

        {/* Summary */}
        {summary && (
          <ResumeSection title="Professional summary">
            <p className="text-[12.5px] text-[#3a3a50] leading-[1.65]">{summary}</p>
          </ResumeSection>
        )}

        {/* Experience */}
        <ResumeSection title="Experience">
          <div>
            <div className="flex items-start justify-between mb-0.5">
              <span className="text-[13px] font-semibold text-brand-900">{role}</span>
              <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">{duration}</span>
            </div>
            <p className="text-[12px] text-blue-600 font-medium mb-1.5">{company}</p>

            {bullets ? (
              <ul className="pl-3.5 text-[12px] text-[#3a3a50] leading-[1.6] list-disc space-y-1">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            ) : rawDescription ? (
              <p className="text-[12px] text-gray-400 italic leading-relaxed">{rawDescription}</p>
            ) : null}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <div>
            <div className="flex items-start justify-between mb-0.5">
              <span className="text-[13px] font-semibold text-brand-900">{degree}</span>
              <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">{graduationYear}</span>
            </div>
            <p className="text-[12px] text-blue-600 font-medium">{school}</p>
            {data.education.gpa && <p className="text-[11px] text-gray-400 mt-1">GPA: {data.education.gpa}</p>}
          </div>
        </ResumeSection>

        {/* Skills */}
        {displaySkills.length > 0 && (
          <ResumeSection title="Skills">
            <div className="flex flex-wrap gap-1.5">
              {displaySkills.map((skill) => (
                <span key={skill} className="px-2.5 py-0.5 rounded-full bg-[#f0efe9] text-[11px] text-brand-900 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <ResumeSection title="Certifications">
            <div className="space-y-2">
              {data.certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="text-[12px] font-semibold text-brand-900">{cert.name}</div>
                  <div className="text-[11px] text-gray-400">{cert.issuer} • {cert.date}</div>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <ResumeSection title="Languages">
            <div className="flex flex-wrap gap-3 text-[12px] text-[#3a3a50]">
              {data.languages.map((lang) => (
                <span key={lang.id}>
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-gray-400"> ({lang.proficiency})</span>
                </span>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <ResumeSection title="Projects">
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-start justify-between mb-0.5">
                    <span className="text-[13px] font-semibold text-brand-900">{proj.name}</span>
                    {proj.url && <span className="text-[11px] text-blue-600 flex-shrink-0 ml-2">↗</span>}
                  </div>
                  {proj.technologies.length > 0 && (
                    <p className="text-[11px] text-blue-600 font-medium mb-1">{proj.technologies.join(", ")}</p>
                  )}
                  <p className="text-[12px] text-[#3a3a50] leading-[1.5]">{proj.description}</p>
                </div>
              ))}
            </div>
          </ResumeSection>
        )}
      </div>
    </div>
  );
}

function ClassicTemplate({ data, ph }: { data: ResumeData; ph: typeof PLACEHOLDER_RESUME_DATA }) {
  const firstName = getDisplayValue(data.basics.firstName, ph.basics.firstName);
  const lastName = getDisplayValue(data.basics.lastName, ph.basics.lastName);
  const jobTitle = getDisplayValue(data.basics.jobTitle, ph.basics.jobTitle);
  const email = getDisplayValue(data.basics.email, ph.basics.email);
  const location = getDisplayValue(data.basics.location, ph.basics.location);
  const url = getDisplayValue(data.basics.url, ph.basics.url);
  const phone = data.basics.phone || "";
  const summary = data.basics.summary || "";
  const company = getDisplayValue(data.experience.company, ph.experience.company);
  const role = getDisplayValue(data.experience.role, ph.experience.role);
  const duration = getDisplayValue(data.experience.duration, ph.experience.duration);
  const school = getDisplayValue(data.education.school, ph.education.school);
  const degree = getDisplayValue(data.education.degree, ph.education.degree);
  const graduationYear = getDisplayValue(data.education.graduationYear, ph.education.graduationYear);
  const displaySkills = getSkills(data, ph);
  const bullets = getBullets(data, ph);

  return (
    <div className="font-sans text-brand-900">
      {/* Header */}
      <h1 className="font-serif text-[24px] text-slate-800 mb-0.5">{firstName} {lastName}</h1>
      <p className="text-[13px] text-slate-600 font-medium mb-2.5">{jobTitle}</p>

      {/* Contact */}
      <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 pb-3 border-b-2 border-slate-800 mb-0">
        <span>{email}</span>
        {phone && <span>• {phone}</span>}
        <span>• {location}</span>
        <span>• {url}</span>
      </div>

      {/* Summary */}
      {summary && (
        <ResumeSection title="Summary">
          <p className="text-[12px] text-slate-600 leading-[1.6]">{summary}</p>
        </ResumeSection>
      )}

      {/* Experience */}
      <ResumeSection title="Experience">
        <div>
          <div className="flex items-start justify-between mb-0.5">
            <span className="text-[13px] font-semibold text-slate-800">{role}</span>
            <span className="text-[11px] text-slate-400 flex-shrink-0 ml-2">{duration}</span>
          </div>
          <p className="text-[12px] text-slate-600 font-medium mb-1.5">{company}</p>

          {bullets && (
            <ul className="pl-3.5 text-[12px] text-slate-600 leading-[1.6] list-disc space-y-1">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div>
          <div className="flex items-start justify-between mb-0.5">
            <span className="text-[13px] font-semibold text-slate-800">{degree}</span>
            <span className="text-[11px] text-slate-400 flex-shrink-0 ml-2">{graduationYear}</span>
          </div>
          <p className="text-[12px] text-slate-600 font-medium">{school}</p>
        </div>
      </ResumeSection>

      {/* Skills */}
      {displaySkills.length > 0 && (
        <ResumeSection title="Skills">
          <p className="text-[12px] text-slate-600 leading-[1.6]">{displaySkills.join(" • ")}</p>
        </ResumeSection>
      )}
    </div>
  );
}

function MinimalTemplate({ data, ph }: { data: ResumeData; ph: typeof PLACEHOLDER_RESUME_DATA }) {
  const firstName = getDisplayValue(data.basics.firstName, ph.basics.firstName);
  const lastName = getDisplayValue(data.basics.lastName, ph.basics.lastName);
  const jobTitle = getDisplayValue(data.basics.jobTitle, ph.basics.jobTitle);
  const email = getDisplayValue(data.basics.email, ph.basics.email);
  const location = getDisplayValue(data.basics.location, ph.basics.location);
  const url = getDisplayValue(data.basics.url, ph.basics.url);
  const phone = data.basics.phone || "";
  const summary = data.basics.summary || "";
  const company = getDisplayValue(data.experience.company, ph.experience.company);
  const role = getDisplayValue(data.experience.role, ph.experience.role);
  const duration = getDisplayValue(data.experience.duration, ph.experience.duration);
  const school = getDisplayValue(data.education.school, ph.education.school);
  const degree = getDisplayValue(data.education.degree, ph.education.degree);
  const graduationYear = getDisplayValue(data.education.graduationYear, ph.education.graduationYear);
  const displaySkills = getSkills(data, ph);
  const bullets = getBullets(data, ph);

  return (
    <div className="font-sans text-brand-900 max-w-2xl">
      {/* Header */}
      <h1 className="text-[22px] text-slate-700 font-light mb-1">{firstName} {lastName}</h1>
      <p className="text-[14px] text-slate-400 mb-4">{jobTitle}</p>

      {/* Contact */}
      <div className="flex flex-wrap gap-4 text-[11px] text-slate-400 mb-6">
        <span>{email}</span>
        {phone && <span>{phone}</span>}
        <span>{location}</span>
        <span>{url}</span>
      </div>

      {/* Summary */}
      {summary && (
        <ResumeSection title="About">
          <p className="text-[13px] text-slate-500 leading-[1.7]">{summary}</p>
        </ResumeSection>
      )}

      {/* Experience */}
      <ResumeSection title="Experience">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-1">
            <span className="text-[14px] font-medium text-slate-700">{role}</span>
            <span className="text-[11px] text-slate-400">{duration}</span>
          </div>
          <p className="text-[12px] text-slate-500 mb-2">{company}</p>

          {bullets && (
            <ul className="pl-4 text-[12px] text-slate-500 leading-[1.7] space-y-1">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="mb-4">
          <span className="text-[14px] font-medium text-slate-700">{degree}</span>
          <p className="text-[12px] text-slate-500">{school}, {graduationYear}</p>
        </div>
      </ResumeSection>

      {/* Skills */}
      {displaySkills.length > 0 && (
        <ResumeSection title="Skills">
          <p className="text-[12px] text-slate-500">{displaySkills.join(", ")}</p>
        </ResumeSection>
      )}
    </div>
  );
}

function CreativeTemplate({ data, ph }: { data: ResumeData; ph: typeof PLACEHOLDER_RESUME_DATA }) {
  const firstName = getDisplayValue(data.basics.firstName, ph.basics.firstName);
  const lastName = getDisplayValue(data.basics.lastName, ph.basics.lastName);
  const jobTitle = getDisplayValue(data.basics.jobTitle, ph.basics.jobTitle);
  const email = getDisplayValue(data.basics.email, ph.basics.email);
  const location = getDisplayValue(data.basics.location, ph.basics.location);
  const url = getDisplayValue(data.basics.url, ph.basics.url);
  const phone = data.basics.phone || "";
  const summary = data.basics.summary || "";
  const company = getDisplayValue(data.experience.company, ph.experience.company);
  const role = getDisplayValue(data.experience.role, ph.experience.role);
  const duration = getDisplayValue(data.experience.duration, ph.experience.duration);
  const school = getDisplayValue(data.education.school, ph.education.school);
  const degree = getDisplayValue(data.education.degree, ph.education.degree);
  const graduationYear = getDisplayValue(data.education.graduationYear, ph.education.graduationYear);
  const displaySkills = getSkills(data, ph);
  const bullets = getBullets(data, ph);

  return (
    <div className="font-sans text-brand-900">
      {/* Header with purple accent */}
      <div className="border-l-4 border-violet-500 pl-4 mb-4">
        <h1 className="font-serif text-[26px] text-violet-600 mb-0.5">{firstName} {lastName}</h1>
        <p className="text-[13px] text-violet-500 font-medium mb-2 tracking-wide">{jobTitle}</p>
      </div>

      {/* Contact */}
      <div className="flex flex-wrap gap-3 text-[12px] text-gray-400 pb-4 border-b border-violet-200 mb-0">
        <span>{email}</span>
        {phone && <span>• {phone}</span>}
        <span>• {location}</span>
        <span>• {url}</span>
      </div>

      {/* Summary */}
      {summary && (
        <ResumeSection title="About me">
          <p className="text-[12.5px] text-slate-600 leading-[1.65]">{summary}</p>
        </ResumeSection>
      )}

      {/* Experience */}
      <ResumeSection title="Work experience">
        <div>
          <div className="flex items-start justify-between mb-0.5">
            <span className="text-[13px] font-semibold text-slate-800">{role}</span>
            <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">{duration}</span>
          </div>
          <p className="text-[12px] text-violet-500 font-medium mb-1.5">{company}</p>

          {bullets && (
            <ul className="pl-3.5 text-[12px] text-slate-600 leading-[1.6] list-disc space-y-1">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div>
          <div className="flex items-start justify-between mb-0.5">
            <span className="text-[13px] font-semibold text-slate-800">{degree}</span>
            <span className="text-[11px] text-gray-400 flex-shrink-0 ml-2">{graduationYear}</span>
          </div>
          <p className="text-[12px] text-violet-500 font-medium">{school}</p>
        </div>
      </ResumeSection>

      {/* Skills */}
      {displaySkills.length > 0 && (
        <ResumeSection title="Tech stack">
          <div className="flex flex-wrap gap-1.5">
            {displaySkills.map((skill) => (
              <span key={skill} className="px-2.5 py-0.5 rounded-full bg-violet-100 text-[11px] text-violet-700 font-medium">
                {skill}
              </span>
            ))}
          </div>
        </ResumeSection>
      )}
    </div>
  );
}

function ExecutiveTemplate({ data, ph }: { data: ResumeData; ph: typeof PLACEHOLDER_RESUME_DATA }) {
  const firstName = getDisplayValue(data.basics.firstName, ph.basics.firstName);
  const lastName = getDisplayValue(data.basics.lastName, ph.basics.lastName);
  const jobTitle = getDisplayValue(data.basics.jobTitle, ph.basics.jobTitle);
  const email = getDisplayValue(data.basics.email, ph.basics.email);
  const location = getDisplayValue(data.basics.location, ph.basics.location);
  const url = getDisplayValue(data.basics.url, ph.basics.url);
  const phone = data.basics.phone || "";
  const summary = data.basics.summary || "";
  const company = getDisplayValue(data.experience.company, ph.experience.company);
  const role = getDisplayValue(data.experience.role, ph.experience.role);
  const duration = getDisplayValue(data.experience.duration, ph.experience.duration);
  const school = getDisplayValue(data.education.school, ph.education.school);
  const degree = getDisplayValue(data.education.degree, ph.education.degree);
  const graduationYear = getDisplayValue(data.education.graduationYear, ph.education.graduationYear);
  const displaySkills = getSkills(data, ph);
  const bullets = getBullets(data, ph);

  return (
    <div className="font-sans text-brand-900 text-center">
      {/* Header */}
      <h1 className="font-serif text-[28px] text-slate-900 tracking-widest uppercase mb-1">{firstName} {lastName}</h1>
      <p className="text-[14px] text-slate-600 font-medium mb-3 tracking-wider">{jobTitle.toUpperCase()}</p>

      {/* Contact */}
      <div className="flex flex-wrap justify-center gap-4 text-[11px] text-slate-500 pb-4 border-b-2 border-slate-900 mb-0">
        <span>{email}</span>
        {phone && <span>• {phone}</span>}
        <span>• {location}</span>
        <span>• {url}</span>
      </div>

      {/* Summary */}
      {summary && (
        <ResumeSection title="Executive profile">
          <p className="text-[12px] text-slate-600 leading-[1.7] text-center max-w-lg mx-auto">{summary}</p>
        </ResumeSection>
      )}

      {/* Experience */}
      <ResumeSection title="Professional experience">
        <div className="text-center">
          <div className="mb-0.5">
            <span className="text-[14px] font-semibold text-slate-800">{role}</span>
          </div>
          <p className="text-[12px] text-slate-600 font-medium mb-1">{company} | {duration}</p>

          {bullets && (
            <ul className="pl-3.5 text-[12px] text-slate-600 leading-[1.6] list-disc space-y-1 text-left max-w-lg mx-auto">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title="Education">
        <div className="text-center">
          <span className="text-[14px] font-semibold text-slate-800">{degree}</span>
          <p className="text-[12px] text-slate-600">{school}, {graduationYear}</p>
        </div>
      </ResumeSection>

      {/* Skills */}
      {displaySkills.length > 0 && (
        <ResumeSection title="Core competencies">
          <p className="text-[12px] text-slate-600 leading-[1.6] text-center">{displaySkills.join(" • ")}</p>
        </ResumeSection>
      )}
    </div>
  );
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  const template = data.template || "modern";
  const ph = PLACEHOLDER_RESUME_DATA;

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} ph={ph} />;
      case "classic":
        return <ClassicTemplate data={data} ph={ph} />;
      case "minimal":
        return <MinimalTemplate data={data} ph={ph} />;
      case "creative":
        return <CreativeTemplate data={data} ph={ph} />;
      case "executive":
        return <ExecutiveTemplate data={data} ph={ph} />;
      default:
        return <ModernTemplate data={data} ph={ph} />;
    }
  };

  return (
    <div className="relative">
      {renderTemplate()}
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-blue-600 mb-2.5">
        {title}
      </p>
      {children}
    </div>
  );
}
