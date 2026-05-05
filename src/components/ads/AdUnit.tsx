"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot: string;       // Your ad unit slot ID from AdSense dashboard
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdUnit({ slot, format = "auto", className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const w = window as typeof window & { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet — safe to ignore
    }
  }, []);

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!publisherId) return null; // Render nothing until AdSense is configured

  return (
    <div className={`adsense-wrap overflow-hidden text-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
