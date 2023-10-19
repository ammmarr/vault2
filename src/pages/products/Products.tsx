import productsData from "../../data/productsData";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";
import Navbar from "../../components/navbar/NavBar";

import style from "./index.module.scss";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
const Products = () => {
  const handleFilterChange = () => {};
  return (
    <>
      <div className="gradientContainer">
        <Navbar />
        <div className={style.productsContainerAndFilter}>
          <DisplayProducts
            data={productsData}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </>
  );
};

export default transition(Products);
