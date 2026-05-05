declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    adsbygoogle?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
