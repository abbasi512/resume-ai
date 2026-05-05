import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  iconOnly?: boolean;
  className?: string;
}

function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? 30 : size === "lg" ? 52 : 38;

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Background gradient — deep indigo → brand navy */}
        <linearGradient id="logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3730a3" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
        {/* Subtle inner shine */}
        <linearGradient id="logo-shine" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="40" height="40" rx="10" fill="url(#logo-bg)" />
      {/* Subtle top shine */}
      <rect width="40" height="40" rx="10" fill="url(#logo-shine)" />
      {/* Thin border */}
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="9.25" stroke="white" strokeOpacity="0.12" strokeWidth="0.5" />

      {/* ── Resume silhouette ── */}
      {/* Avatar / person circle */}
      <circle cx="16" cy="13" r="3.5" fill="white" fillOpacity="0.95" />

      {/* Neck + shoulders hint — gives clear "person on a page" read */}
      <path
        d="M11 22 Q11 18 16 18 Q21 18 21 22"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Resume lines */}
      <rect x="9"  y="24.5" width="13" height="1.7" rx="0.85" fill="white" fillOpacity="0.75" />
      <rect x="9"  y="27.8" width="10" height="1.7" rx="0.85" fill="white" fillOpacity="0.55" />
      <rect x="9"  y="31.1" width="7"  height="1.7" rx="0.85" fill="white" fillOpacity="0.35" />

      {/* ── AI sparkle (gold 4-point star) ── */}
      {/* Centered at (30, 12), outer r=4.5, inner r=1.6 */}
      <path
        d="M30 7.5 L31.6 10.4 L34.5 12 L31.6 13.6 L30 16.5 L28.4 13.6 L25.5 12 L28.4 10.4 Z"
        fill="#e8c56d"
      />
      {/* Tiny accent dot below sparkle */}
      <circle cx="30" cy="20" r="1.1" fill="#e8c56d" fillOpacity="0.45" />
    </svg>
  );
}

function LogoWordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { name: "text-[16px]", dot: "text-[16px]" },
    md: { name: "text-[20px]", dot: "text-[20px]" },
    lg: { name: "text-[26px]", dot: "text-[26px]" },
  };
  const s = sizes[size];

  return (
    <span className={`font-serif leading-none select-none ${s.name} text-brand-900`}>
      Resum<span>é</span>
      <span className="text-accent-purple">.ai</span>
    </span>
  );
}

export default function Logo({ size = "md", href = "/", iconOnly = false, className = "" }: LogoProps) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {!iconOnly && <LogoWordmark size={size} />}
    </span>
  );

  if (href === null) return inner;

  return (
    <Link href={href} className="hover:opacity-80 transition-opacity">
      {inner}
    </Link>
  );
}

/* Named export so you can also import just the mark */
export { LogoMark };
