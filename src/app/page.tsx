import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BuilderSection from "@/components/sections/BuilderSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";
import AdUnit from "@/components/ads/AdUnit";

// Replace these slot IDs with your actual slot IDs from AdSense dashboard
// adsense.google.com → Ads → By ad unit → Create ad unit → copy the slot ID
const AD_SLOT_BETWEEN_FEATURES = "1234567890";
const AD_SLOT_BETWEEN_PRICING  = "0987654321";
//test

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      {/* Ad between Features and Builder */}
      <AdUnit
        slot={AD_SLOT_BETWEEN_FEATURES}
        format="horizontal"
        className="max-w-[1100px] mx-auto px-6 py-4"
      />

      <BuilderSection />
      <PricingSection />

      {/* Ad between Pricing and Footer */}
      <AdUnit
        slot={AD_SLOT_BETWEEN_PRICING}
        format="horizontal"
        className="max-w-[1100px] mx-auto px-6 py-4"
      />

      <Footer />
    </main>
  );
}
