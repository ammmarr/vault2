import { FC, useState } from "react";
import style from "./index.module.scss";
interface ProductImagesUI {
  images: string[];
}
const ProductImagesUI: FC<ProductImagesUI> = ({ images }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className={style.productImagesUI}>
      <div className={style.mainImageContainer}>
        <img src={images[activeImg]} className={style.mainImage} />
      </div>
      <div className={style.imagesSlider}>
        {images.map((item, key) => (
          <div className={style.smallImagesContainer}>
            <img
              src={item}
              className={style.smallImage}
              key={key}
              onClick={() => setActiveImg(key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesUI;
