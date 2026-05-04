// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resumé.ai — AI-Powered Resume Builder",
  description:
    "Land interviews 3× faster. Our AI writes tailored, ATS-optimized resumes for your target role in seconds.",
  keywords: ["resume builder", "AI resume", "ATS optimization", "job search"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-brand-900 antialiased">{children}</body>
    </html>
  );
}
