import { FC } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
interface ImagesAndTextCards {
  data?: any;
  direction: "left" | "right";
}

const ImagesAndTextCard: FC<ImagesAndTextCards> = ({ direction, data }) => {
  const width = window.innerWidth;
  let displayedDirection = direction.slice();

  if (width < 830) {
    displayedDirection = "left";
  }
  return (
    <div className={style.wrapperr}>
      {displayedDirection == "left" && (
        <div className={style.imageContainer}>
          <img src={data.image} />
        </div>
      )}

      <div className={style.textContainer}>
        <h2>{data.item_name}</h2>
        <p>{data.shortDescription}</p>
        <Link className="button" to={"/products"}>
          Learn more
        </Link>
      </div>
      {displayedDirection == "right" && (
        <div className={style.imageContainer}>
          <img src={data.image} />
        </div>
      )}
    </div>
  );
};

export default ImagesAndTextCard;
