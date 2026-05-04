// src/components/sections/PricingSection.tsx

interface PlanFeature {
  label: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    description: "Perfect for trying it out",
    features: [
      { label: "1 resume" },
      { label: "5 AI generations" },
      { label: "3 templates" },
      { label: "PDF export" },
    ],
    cta: "Get started free",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/ month",
    description: "For active job seekers",
    features: [
      { label: "Unlimited resumes" },
      { label: "Unlimited AI generations" },
      { label: "All 30+ templates" },
      { label: "ATS optimization" },
      { label: "Job tailoring" },
      { label: "Interview prep" },
    ],
    cta: "Start 7-day free trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/ month",
    description: "For career coaches & teams",
    features: [
      { label: "Up to 10 users" },
      { label: "Everything in Pro" },
      { label: "Client portal" },
      { label: "Analytics dashboard" },
      { label: "Priority support" },
    ],
    cta: "Contact sales →",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 px-8 bg-gray-50 border-t border-black/10 mt-[72px]"
    >
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-brand-900 mb-2.5">
            Simple, honest pricing
          </h2>
          <p className="text-gray-500">
            Start free, upgrade when you&apos;re ready to get serious
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 border bg-white transition-shadow ${
                plan.popular
                  ? "border-accent-purple border-2 shadow-lg shadow-accent-purple/10"
                  : "border-black/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-accent-purple text-white text-[11px] font-semibold px-3.5 py-1 rounded-full whitespace-nowrap tracking-wide">
                  Most popular
                </div>
              )}

              <div className="text-[13px] font-semibold text-gray-400 tracking-widest uppercase mb-2.5">
                {plan.name}
              </div>
              <div className="font-serif text-[38px] text-brand-900 leading-none">
                {plan.price}{" "}
                <span className="font-sans text-sm font-normal text-gray-400">
                  {plan.period}
                </span>
              </div>
              <div className="text-[13px] text-gray-400 mt-2 mb-5 leading-snug">
                {plan.description}
              </div>

              <ul className="flex flex-col gap-2.5 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="text-[13px] flex items-center gap-2"
                  >
                    <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-green-500 bg-green-50 flex-shrink-0" />
                    {f.label}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg text-[13px] font-medium transition-all ${
                  plan.popular
                    ? "bg-accent-purple text-white hover:opacity-90"
                    : "border border-black/10 text-brand-900 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-400">
          All plans include SSL security, GDPR-compliant data handling, and 99.9% uptime SLA.
        </p>
      </div>
    </section>
  );
}
