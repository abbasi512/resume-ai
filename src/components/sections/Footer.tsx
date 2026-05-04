// src/components/sections/Footer.tsx

export default function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-black/10 bg-white">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-serif text-lg text-brand-900">
          <span className="relative inline-block w-5 h-5 bg-accent-gold rounded-[4px]">
            <span className="absolute inset-[3px] border-[1.5px] border-brand-900 rounded-[1px]" />
          </span>
          Resumé.ai
        </div>

        <div className="flex items-center gap-6 text-[13px] text-gray-400">
          <a href="#" className="hover:text-brand-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-900 transition-colors">Support</a>
          <a href="#" className="hover:text-brand-900 transition-colors">Blog</a>
        </div>

        <p className="text-[12px] text-gray-400">
          © {new Date().getFullYear()} Resumé.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
