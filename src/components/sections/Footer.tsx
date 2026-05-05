import Logo from "@/components/Logo";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features",     href: "/#features" },
    { label: "Templates",    href: "/#builder" },
    { label: "Pricing",      href: "/#pricing" },
    { label: "Resume Builder", href: "/#builder" },
  ],
  Resources: [
    { label: "Blog",                href: "/blog" },
    { label: "ATS guide",           href: "/blog/what-is-ats" },
    { label: "Resume tips",         href: "/blog/resume-mistakes-to-avoid" },
    { label: "AI resume builder",   href: "/blog/ai-resume-builder-guide" },
    { label: "Sitemap",             href: "/sitemap-page" },
  ],
  Company: [
    { label: "About us",   href: "/about"   },
    { label: "Contact",    href: "/contact" },
    { label: "Privacy",    href: "/privacy" },
    { label: "Sitemap",    href: "/sitemap-page" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-gray-50/50">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3">
              <Logo size="sm" />
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[200px]">
              AI-powered resumes that land interviews — built for modern job seekers.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-4">{heading}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[13px] text-gray-500 hover:text-brand-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/[0.07] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Resumé.ai · All rights reserved.
          </p>
          <p className="text-[12px] text-gray-400">
            Made with ♥ by{" "}
            <span className="font-medium text-gray-500">Tanzeel Abbas</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
