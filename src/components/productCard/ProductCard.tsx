import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../assets/categoryImages/leather.jpg";
import style from "./index.module.scss";

export interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { image, shortDescription, longDescription, name } = data;
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={p1} />
        </div>
        <div className={style.textSection}>
          <h1 className={style.h1}>{data.item_name}</h1>
          <p className={style.p}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus aut
            odit in libero provident fugiat at voluptas dolorum? Fuga, itaque?
            Delectus blanditiis velit nulla aspernatur accusamus nihil
            dignissimos dolores asperiores.
          </p>
          <div className={style.buttonContainer}>
            <Link
              className="button"
              style={{ fontSize: "10px" }}
              to={`/product/${data.id}`}
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
