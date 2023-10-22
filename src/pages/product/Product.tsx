import HeroProductCard from "../../components/HeroProductCard/HeroProductCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import ProductCard from "../../components/productCard/ProductCard";
import productsData from "../../data/productsData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
const Product = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <HeroProductCard />
        <div className={style.moreProducts}>
          <h3>
            Similar <span>Products</span>
          </h3>
          {productsData.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(Product);
