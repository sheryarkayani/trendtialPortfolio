import Hero from "../../components/Hero";
import Features from "../../components/Features";
import WhoThisIsFor from "../../components/WhoThisIsFor";
import BuildRevenueMachine from "../../components/BuildRevenueMachine";
import DataVisuals from "../../components/DataVisuals";
import OurProcess from "../../components/OurProcess";
import Pricing from "../../components/Pricing";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import BrandingEvolution from "../../components/BrandingEvolution";
import FAQ from "../../components/FAQ";
import WhyChooseUs from "../../components/WhyChooseUs";
import PartnerForm from "../../components/PartnerForm";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <BrandingEvolution />
      <Features />
      <WhoThisIsFor />
      <BuildRevenueMachine />
      <DataVisuals />
      <OurProcess />
      <Pricing />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <WhyChooseUs />
      <PartnerForm />
    </main>
  );
};

export default HomePage;
