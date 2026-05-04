// src/app/page.tsx
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BuilderSection from "@/components/sections/BuilderSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BuilderSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
