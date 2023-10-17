import ColloaboratedBrandsSection from "../../components/collaboratedBrandsSection/ColloaboratedBrandsSection";
import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/heroCard/HeroCard";
import ImagesAndText from "../../components/imagesAndText/ImagesAndText";
import Navbar from "../../components/navbar/NavBar";
import QuoteSection from "../../components/quoteSection/QuoteSection";
import YouMightLikeSection from "../../components/youMightLikeSetion/YouMightLikeSection";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroCard />
      <YouMightLikeSection />
      <QuoteSection />
      <ImagesAndText />
      <ColloaboratedBrandsSection />
      <Footer />
    </>
  );
};

export default transition(Home);
