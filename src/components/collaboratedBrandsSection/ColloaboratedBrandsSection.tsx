import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import collabBrandsData from "../../data/collabBrandsData";
import useWindowSize from "../../hooks/useWindowSize";
import settings from "../../utils/sliderSettings";
import style from "./index.module.scss";
import "./style.css";
const ColloaboratedBrandsSection = () => {
  const [width, height] = useWindowSize();
  let numberofSlidesToShow = 5;
  if (width < 900) {
    numberofSlidesToShow = 4;
  }
  if (width < 630) {
    numberofSlidesToShow = 1;
  }

  return (
    <div className={style.container}>
      <div className={style.mainTextSection}>
        <Slider
          {...settings}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          lazyLoad="anticipated"
          slidesToShow={numberofSlidesToShow}
          className={style.collaboratedBrandSlider}
        >
          {collabBrandsData.map((item: any, i: number) => {
            return (
              <div className={style.sliderItemContainer} key={i}>
                <div className={style.padding}>
                  <img src={item.img} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ColloaboratedBrandsSection;
