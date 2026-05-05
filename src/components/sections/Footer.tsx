const LINKS = {
  Product: ["Features", "Templates", "Pricing", "Changelog"],
  Resources: ["Blog", "Resume tips", "Interview prep", "ATS guide"],
  Company: ["About", "Privacy", "Terms", "Support"],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-gray-50/50">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-serif text-[18px] text-brand-900 mb-3">
              <div className="relative w-6 h-6 bg-accent-gold rounded-[5px] flex items-center justify-center">
                <div className="absolute inset-[4px] border-[1.5px] border-brand-900 rounded-[1px]" />
              </div>
              Resumé.ai
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
                  <li key={item}>
                    <a href="#" className="text-[13px] text-gray-500 hover:text-brand-900 transition-colors">
                      {item}
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
            Made with ♥ using{" "}
            <span className="font-medium text-gray-500">Claude AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
