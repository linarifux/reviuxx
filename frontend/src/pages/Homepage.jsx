import AboutUs from '../components/home/AboutUs';
import Hero from '../components/home/Hero';
import IntegrationBanner from '../components/home/IntegrationBanner';
import SoftwareSection from '../components/home/SoftwareSection';

const Homepage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Hero />
      <AboutUs />
      <IntegrationBanner />
      <SoftwareSection />
    </main>
  );
};

export default Homepage;