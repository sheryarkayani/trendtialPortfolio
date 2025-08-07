import Hero from "../../components/Hero";
import Features from "../../components/Features";
import DataVisuals from "../../components/DataVisuals";
import OurProcess from "../../components/OurProcess";
import Pricing from "../../components/Pricing";
import BrandingEvolution from "../../components/BrandingEvolution";
import FAQ from "../../components/FAQ";
import PartnerForm from "../../components/PartnerForm";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <DataVisuals />
      <OurProcess />
      <Pricing />
      <BrandingEvolution />
      <FAQ />
      <PartnerForm />
    </main>
  );
};

export default HomePage;
