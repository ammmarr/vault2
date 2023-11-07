import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";
import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/heroCard/HeroCard";
import Navbar from "../../components/navbar/NavBar";
import heroSectionCardsData from "../../data/heroSectionData";
import { servicesBackgroundImages } from "../../data/servicesData";

const Services = () => {
  return (
    <>
      <Navbar />
      <HeroCard data={servicesBackgroundImages} />
      <ServicesGrid />
      <Footer />
    </>
  );
};

export default Services;
