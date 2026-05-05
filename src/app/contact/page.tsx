"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Mail, MessageSquare, Clock, CheckCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is Resume.ai really free?",
    a: "Yes — the core builder, AI generation, and PDF export are completely free. No credit card, no account required.",
  },
  {
    q: "Do you store my resume data?",
    a: "No. Your data lives in your browser session only. We don't store your resume on our servers unless you explicitly create an account (coming soon).",
  },
  {
    q: "Why isn't the AI generating bullets?",
    a: "The AI feature requires a valid API configuration. If you're using our hosted version and it's not working, please let us know via this form and we'll look into it right away.",
  },
  {
    q: "Can I use Resume.ai for commercial purposes?",
    a: "Resume.ai is designed for personal job-seeking use. For team or commercial licensing, please reach out via the contact form below.",
  },
  {
    q: "How do I report a bug?",
    a: "Use the contact form on this page — select 'Bug report' as the subject. Please include what you were doing when the issue occurred.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General enquiry", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire this to Formspree / Resend / your own API
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="border-b border-black/[0.06] pt-20 pb-12 px-6 bg-gradient-to-b from-violet-50/40 to-white">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-4">
              Contact us
            </p>
            <h1 className="font-serif text-[40px] leading-tight text-brand-900 mb-4">
              We&apos;d love to hear from you
            </h1>
            <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[480px] mx-auto">
              Have a question, found a bug, or want to talk about a partnership?
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Info cards */}
        <section className="px-6 py-10 border-b border-black/[0.06]">
          <div className="max-w-[860px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Mail,           title: "Email us",          body: "hello@resume-ai.com",       sub: "We reply within 24 h" },
              { icon: MessageSquare,  title: "Feedback",          body: "We read every message",      sub: "Feature requests welcome" },
              { icon: Clock,          title: "Response time",     body: "Under 24 hours",             sub: "Mon – Fri" },
            ].map(({ icon: Icon, title, body, sub }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-black/[0.08] bg-white">
                <div className="w-9 h-9 rounded-lg bg-accent-purple-light flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-brand-900 mb-0.5">{title}</p>
                  <p className="text-[13px] text-gray-700">{body}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form + FAQ */}
        <section className="px-6 py-14">
          <div className="max-w-[860px] mx-auto grid md:grid-cols-2 gap-12">

            {/* Contact form */}
            <div>
              <h2 className="font-serif text-[24px] text-brand-900 mb-6">Send us a message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                  <CheckCircle size={40} className="text-emerald-500" />
                  <h3 className="text-[18px] font-semibold text-brand-900">Message sent!</h3>
                  <p className="text-[14px] text-gray-500">Thanks for reaching out — we&apos;ll reply within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "General enquiry", message: "" }); }}
                    className="mt-2 text-[13px] text-accent-purple hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Your name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Chen"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-[14px] text-brand-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Email address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-[14px] text-brand-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-[14px] text-brand-900 focus:outline-none focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple/50 transition-all bg-white"
                    >
                      <option>General enquiry</option>
                      <option>Bug report</option>
                      <option>Feature request</option>
                      <option>Partnership / sales</option>
                      <option>Privacy request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what's on your mind…"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-[14px] text-brand-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl text-[14px] font-semibold bg-brand-900 text-white hover:bg-[#2d2d4e] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Send message →"}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    By submitting this form you agree to our{" "}
                    <Link href="/privacy" className="text-accent-purple hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-serif text-[24px] text-brand-900 mb-6">Frequently asked</h2>
              <div className="flex flex-col gap-4">
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="border-b border-black/[0.06] pb-4">
                    <h3 className="text-[14px] font-semibold text-brand-900 mb-1.5">{q}</h3>
                    <p className="text-[13px] text-gray-500 leading-[1.65]">{a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
