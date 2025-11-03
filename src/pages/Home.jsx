import Hero from "../components/Hero";
import Overview from "../components/Overview";
import AboutUs from "../components/AboutUs";
import Software from "../components/Software";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Overview />
      <AboutUs />
      <Software />
      <Pricing />
      <FAQ />
    </div>
  );
}
