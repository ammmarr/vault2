import ColloaboratedBrandsSection from "../../components/collaboratedBrandsSection/ColloaboratedBrandsSection";
import HeroCard from "../../components/heroCard/HeroCard";
import ImagesAndText from "../../components/imagesAndText/ImagesAndText";
import QuoteSection from "../../components/quoteSection/QuoteSection";
import YouMightLikeSection from "../../components/youMightLikeSetion/YouMightLikeSection";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
const Home = () => {
  return (
    <>
      <HeroCard />
      <YouMightLikeSection />
      <QuoteSection />
      <ImagesAndText />
      <ColloaboratedBrandsSection />
    </>
  );
};

export default transition(Home);
