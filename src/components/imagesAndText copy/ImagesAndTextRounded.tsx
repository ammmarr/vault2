import aboutUsData from "../../data/aboutUsData";
import productsData from "../../data/productsData";
import ImagesAndTextCard from "./imagesAndTextCard/ImagesAndTextCardRounded";
import style from "./index.module.scss";

const ImagesAndText = () => {
  const data = [...aboutUsData];
  const featuredData = data.slice(0, 3);

  return (
    <div className={style.container}>
      <ImagesAndTextCard direction="left" data={data[0]} key={1} />
      <ImagesAndTextCard direction="right" data={data[1]} key={2} />
      <ImagesAndTextCard direction="left" data={data[2]} key={3} />
      {/* <div className={style.buttonContainer}>
        <div className="button">
          <span>More ...</span>
        </div>
      </div> */}
    </div>
  );
};

export default ImagesAndText;
