import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Resume.ai's privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

const LAST_UPDATED = "1 May 2026";

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: `Resume.ai ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect when you use our AI-powered resume builder at resume-ai.com (the "Service"), how we use it, and the choices you have.

By using the Service you agree to the practices described in this policy. If you do not agree, please discontinue use of the Service.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    content: `We collect the following categories of information:

**Information you provide directly**
When you use the resume builder you enter personal information such as your name, email address, phone number, work history, education, and skills. This data is processed in your browser and sent to our AI service solely to generate resume content. We do not store this data on our servers after your session ends unless you explicitly save your resume (feature coming soon).

**Usage data**
We automatically collect standard server logs and analytics data when you visit our site, including your IP address (anonymised), browser type, pages visited, time spent, and referring URL. This helps us improve the Service.

**Cookies**
We use essential cookies to keep the Service functioning, and optional analytics cookies (Google Analytics 4) to understand how visitors use the site. You can opt out of analytics cookies at any time via your browser settings.`,
  },
  {
    id: "how-we-use",
    title: "3. How we use your information",
    content: `We use the information we collect to:

- Operate and improve the Service
- Generate AI-powered resume content in response to your inputs
- Analyse usage patterns to fix bugs and build better features
- Respond to support requests submitted via our contact form
- Comply with legal obligations

We do **not** sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    id: "ai-processing",
    title: "4. AI processing (Anthropic Claude)",
    content: `Resume content is generated using Anthropic's Claude AI. When you request AI-generated bullet points or skills, your job description and role information are sent to Anthropic's API. This data is processed according to Anthropic's privacy policy and data processing agreement.

Anthropic does not use API inputs to train its models by default. We recommend you do not include highly sensitive personal information (e.g. national ID numbers, financial details) in your job descriptions.`,
  },
  {
    id: "analytics",
    title: "5. Analytics & advertising",
    content: `We use Google Analytics 4 to measure site traffic and user behaviour. Google Analytics may set cookies in your browser. You can opt out using the Google Analytics Opt-out Browser Add-on or by adjusting your browser's cookie settings.

If we run Google Ads campaigns, we may use conversion tracking to measure how many users download a PDF after arriving from an ad. This uses a cookie that expires after 90 days. No personally identifiable information is shared with Google through this tracking.`,
  },
  {
    id: "data-retention",
    title: "6. Data retention",
    content: `Resume data entered in the builder is not retained on our servers — it lives only in your browser's memory for the duration of your session and is cleared when you close the tab or refresh the page.

Support emails and contact form submissions are retained for up to 12 months to resolve your query and for our records.

Analytics data is retained for 26 months in line with Google Analytics 4 defaults.`,
  },
  {
    id: "your-rights",
    title: "7. Your rights",
    content: `Depending on your location, you may have the following rights under applicable data protection law (including GDPR and CCPA):

- **Access** — request a copy of personal data we hold about you
- **Correction** — ask us to correct inaccurate data
- **Deletion** — request that we delete your personal data
- **Objection** — object to our processing of your data
- **Portability** — receive your data in a structured, machine-readable format
- **Withdrawal of consent** — withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at **privacy@resume-ai.com** or use the form on our Contact page.`,
  },
  {
    id: "cookies",
    title: "8. Cookies",
    content: `We use the following types of cookies:

| Type | Purpose | Duration |
|------|---------|----------|
| Essential | Keep the resume builder functioning | Session |
| Analytics (GA4) | Understand how visitors use the site | Up to 26 months |
| Advertising (Google Ads) | Measure ad conversions | 90 days |

You can manage cookies through your browser settings. Blocking essential cookies may cause the Service to malfunction.`,
  },
  {
    id: "security",
    title: "9. Security",
    content: `All data transmitted between your browser and our servers is encrypted using TLS (HTTPS). We follow industry best practices for web application security. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "children",
    title: "10. Children's privacy",
    content: `The Service is not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
  },
  {
    id: "changes",
    title: "11. Changes to this policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of the Service after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** privacy@resume-ai.com
**Contact form:** resume-ai.com/contact

We aim to respond to all privacy-related enquiries within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="border-b border-black/[0.06] pt-20 pb-12 px-6 bg-gray-50/60">
          <div className="max-w-[760px] mx-auto">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-4">
              Legal
            </p>
            <h1 className="font-serif text-[40px] leading-tight text-brand-900 mb-3">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-gray-400">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 py-14">
          <div className="max-w-[860px] mx-auto flex gap-12">

            {/* Table of contents — desktop only */}
            <aside className="hidden lg:block w-[200px] flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">Contents</p>
                <nav className="flex flex-col gap-1.5">
                  {SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-[12px] text-gray-500 hover:text-accent-purple transition-colors leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="prose-like flex flex-col gap-10">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id}>
                    <h2 className="font-serif text-[22px] text-brand-900 mb-3 leading-tight">{s.title}</h2>
                    <div className="text-[14px] text-gray-600 leading-[1.75] whitespace-pre-line">
                      {s.content.split("\n").map((line, i) => {
                        if (line.startsWith("**") && line.endsWith("**")) {
                          return <p key={i} className="font-semibold text-brand-900 mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>;
                        }
                        if (line.startsWith("- ")) {
                          return <li key={i} className="ml-4 list-disc text-gray-600">{line.slice(2).replace(/\*\*(.*?)\*\*/g, "$1")}</li>;
                        }
                        if (line.startsWith("| ")) {
                          return null;
                        }
                        return line ? <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, (_, m) => m)}</p> : <br key={i} />;
                      })}
                      {/* Cookie table */}
                      {s.id === "cookies" && (
                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full text-[13px] border-collapse">
                            <thead>
                              <tr className="bg-gray-50 border-b border-black/[0.08]">
                                <th className="text-left px-4 py-2.5 font-semibold text-brand-900">Type</th>
                                <th className="text-left px-4 py-2.5 font-semibold text-brand-900">Purpose</th>
                                <th className="text-left px-4 py-2.5 font-semibold text-brand-900">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                ["Essential", "Keep the resume builder functioning", "Session"],
                                ["Analytics (GA4)", "Understand how visitors use the site", "Up to 26 months"],
                                ["Advertising (Google Ads)", "Measure ad conversions", "90 days"],
                              ].map(([type, purpose, duration]) => (
                                <tr key={type} className="border-b border-black/[0.06]">
                                  <td className="px-4 py-2.5 text-gray-700 font-medium">{type}</td>
                                  <td className="px-4 py-2.5 text-gray-500">{purpose}</td>
                                  <td className="px-4 py-2.5 text-gray-500">{duration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-accent-purple-light border border-accent-purple-border">
                <h3 className="text-[15px] font-semibold text-brand-900 mb-2">Questions about your privacy?</h3>
                <p className="text-[13px] text-gray-500 mb-4">
                  We&apos;re happy to help. Reach out through our contact page and we&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-900 text-white text-[13px] font-semibold hover:bg-[#2d2d4e] transition-colors"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
