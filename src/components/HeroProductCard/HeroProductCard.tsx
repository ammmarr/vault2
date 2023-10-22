import { useParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
// import WhatsappButton from "../whatsappButton/WhatsappButton";
import style from "./index.module.scss";
import productsData from "../../data/productsData.tsx";
import img from "../../assets/categoryImages/sound system.jpg";
// import Back from "../back Button/Back";
const HeroProductCard = () => {
  const params = useParams();
  // const { data, loading, error } = useGetData(
  //   `https://tazzweed.com/api/method/tazzweed.api.product_filter?name=${params.id}`
  // );
  var htmlRegex = new RegExp("/</?[a-z][sS]*>/i");
  let content = <p className={style.p}>{productsData[0].description}</p>;
  if (/<\/?[a-z][\s\S]*>/i.test(productsData[0].description)) {
    content = (
      <p
        className={style.p}
        dangerouslySetInnerHTML={{ __html: productsData[0].description }}
      ></p>
    );
  }
  console.log(productsData[0], "data");
  return (
    <>
      {productsData[0] && (
        <div className={style.container}>
          <div className={style.imageContainer}>
            <img src={img} />
          </div>
          <div className={style.textSection}>
            <div className={style.groupAndBack}>
              <h3 className={style.h3}>{productsData[0].name}</h3>

              {/* <Back /> */}
            </div>

            <h1 className={style.h1}>{productsData[0].item_name}</h1>
            {content}
            <p className={style.p}>{productsData[0]?.description}</p>
            {/* <div className={style.buttonAndContainer}>
              <WhatsappButton />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroProductCard;
