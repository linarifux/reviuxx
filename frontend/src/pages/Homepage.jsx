import AboutUs from '../components/home/AboutUs';
import ContactSection from '../components/home/ContactSection';
import FaqSection from '../components/home/FaqSection';
import FeaturesAndIndustries from '../components/home/FeaturesAndIndustries';
import Hero from '../components/home/Hero';
import IntegrationBanner from '../components/home/IntegrationBanner';
import PricingSection from '../components/home/PricingSection';
import SoftwareSection from '../components/home/SoftwareSection';
import TrustSection from '../components/home/TrustSection';
import VideoAndStats from '../components/home/VideoAndStats';

const Homepage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Hero />
      <VideoAndStats />
      <AboutUs />
      <FeaturesAndIndustries />
      <IntegrationBanner />
      <SoftwareSection />
      <TrustSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
};

export default Homepage;