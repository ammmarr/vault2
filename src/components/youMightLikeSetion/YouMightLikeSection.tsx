import style from "./index.module.scss";
import stp from "../../assets/categoryImages/AeroFlex.jpg";
import sound from "../../assets/categoryImages/stp.png";

const YouMightLikeSection = () => {
  return (
    <div className={style.container}>
      <h2>We are “Vault”</h2>
      <p>
        the distributor of The Russian manufacturer of STP, ACV and more makers
        of amazing luxury brands in Egypt.
      </p>
      <div className={style.categoriesContainer}>
        <div className={style.categoryCard}>
          <img src={sound}></img>
          <div className={style.buttonContainer}>
            <div className="button">ACV</div>
          </div>
        </div>
        <div className={style.categoryCard}>
          <img src={stp}></img>
          <div className={style.buttonContainer}>
            <div className="button">STP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeSection;
