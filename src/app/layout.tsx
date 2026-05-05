import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const BASE_URL      = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";
const GA_ID         = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;   // e.g. G-XXXXXXXXXX
const ADSENSE_ID    = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID; // e.g. ca-pub-XXXXXXXXXX

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Resume.ai — Free AI Resume Builder & ATS Optimizer",
    template: "%s | Resume.ai",
  },
  description:
    "Build a job-winning resume in minutes with AI. Resume.ai writes tailored, ATS-optimized bullet points for your role, exports a polished PDF, and helps you land interviews 3× faster — completely free.",
  keywords: [
    "AI resume builder",
    "free resume builder",
    "ATS resume",
    "ATS optimized resume",
    "resume maker",
    "CV builder",
    "AI CV writer",
    "resume templates",
    "job application",
    "cover letter AI",
    "professional resume",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Resume.ai",
    title: "Resume.ai — Free AI Resume Builder & ATS Optimizer",
    description:
      "Build a job-winning resume in minutes with AI. Tailored, ATS-optimized bullet points + polished PDF export. Free.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Resume.ai — AI-powered resume builder",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Resume.ai — Free AI Resume Builder & ATS Optimizer",
    description:
      "Build a job-winning resume in minutes with AI. Tailored, ATS-optimized bullet points + polished PDF export. Free.",
    images: [`${BASE_URL}/og-image.png`],
    creator: "@resumeai",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${BASE_URL}/#webapp`,
      name: "Resume.ai",
      url: BASE_URL,
      description:
        "AI-powered resume builder that writes tailored, ATS-optimized resumes in seconds. Free PDF export.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free resume builder — no account required",
      },
      featureList: [
        "AI-generated bullet points",
        "ATS optimization",
        "PDF export",
        "Multiple resume templates",
        "Skills extraction",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "12000",
        bestRating: "5",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "Resume.ai",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Resume.ai",
      publisher: { "@id": `${BASE_URL}/#org` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-brand-900 antialiased">
        {children}

        {/* ── Google Analytics 4 ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* ── Google AdSense (shows ads on your site, you earn per click) ── */}
        {ADSENSE_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
