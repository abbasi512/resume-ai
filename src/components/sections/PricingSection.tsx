"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

interface Plan {
  name: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  ctaAction?: () => void;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    description: "Perfect for trying it out",
    features: ["1 resume", "5 AI generations / month", "3 templates", "PDF export"],
    cta: "Get started free",
  },
  {
    name: "Pro",
    monthly: 12,
    annual: 9,
    description: "For active job seekers",
    features: [
      "Unlimited resumes",
      "Unlimited AI generations",
      "All 5 templates",
      "ATS keyword optimization",
      "Job tailoring",
      "Interview prep AI",
    ],
    cta: "Start 7-day free trial",
    popular: true,
  },
  {
    name: "Team",
    monthly: 29,
    annual: 22,
    description: "For career coaches & teams",
    features: [
      "Up to 10 users",
      "Everything in Pro",
      "Client portal",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Contact sales →",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  const scrollToBuilder = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-6 border-t border-black/[0.06]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-purple mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-[38px] text-brand-900 mb-3 leading-tight">
            Simple, honest pricing
          </h2>
          <p className="text-[15px] text-gray-500 mb-8">
            Start free, upgrade when you&apos;re ready to get serious
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-1.5 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                !annual ? "bg-white text-brand-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all flex items-center gap-1.5 ${
                annual ? "bg-white text-brand-900 shadow-sm" : "text-gray-500"
              }`}
            >
              Annual
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                −25%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 border bg-white transition-all ${
                  plan.popular
                    ? "border-accent-purple border-2 shadow-xl shadow-accent-purple/10"
                    : "border-black/[0.08] hover:border-black/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-purple to-blue-500 text-white text-[11px] font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Most popular
                  </div>
                )}

                <div className="text-[11px] font-bold text-gray-400 tracking-[0.14em] uppercase mb-2">
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-serif text-[40px] text-brand-900 leading-none">
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-[13px] text-gray-400 mb-1.5">/ mo</span>
                  )}
                </div>
                {annual && plan.annual > 0 && (
                  <p className="text-[11px] text-emerald-600 font-medium mb-1">
                    Billed ${plan.annual * 12}/yr — save ${(plan.monthly - plan.annual) * 12}
                  </p>
                )}
                <p className="text-[12px] text-gray-400 mb-6">{plan.description}</p>

                <ul className="flex flex-col gap-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-brand-900">
                      <Check size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.name === "Team" ? (
                  <Link
                    href="/contact"
                    className={`block w-full py-2.5 rounded-xl text-[13px] font-semibold text-center transition-all border border-black/10 text-brand-900 hover:bg-gray-50 hover:border-black/20`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    onClick={scrollToBuilder}
                    className={`w-full py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-accent-purple to-blue-500 text-white hover:opacity-90 shadow-lg shadow-accent-purple/25"
                        : "border border-black/10 text-brand-900 hover:bg-gray-50 hover:border-black/20"
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-[12px] text-gray-400">
          All plans include SSL security, GDPR-compliant data handling, and 99.9% uptime SLA.
        </p>
      </div>
    </section>
  );
}
