import AboutUs from '../components/home/AboutUs';
import Hero from '../components/home/Hero';
import IntegrationBanner from '../components/home/IntegrationBanner';

const Homepage = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Future sections will go here 
        <Features />
        <SocialProof />
        <Footer />
      */}
      <Hero />
      <AboutUs />
      {/* <AboutUs />
      <IntegrationBanner /> */}
    </main>
  );
};

export default Homepage;