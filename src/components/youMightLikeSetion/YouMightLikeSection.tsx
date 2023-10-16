import style from "./index.module.scss";
import leather from "../../assets/categoryImages/leather.jpg";
import sound from "../../assets/categoryImages/sound system.jpg";

const YouMightLikeSection = () => {
  return (
    <div className={style.container}>
      <h2>You Might Like</h2>
      <p>Our products are designed for everyone, environmentally friendly.</p>
      <div className={style.categoriesContainer}>
        <div className={style.categoryCard}>
          <img src={leather}></img>
          <div className={style.buttonContainer}>
            <div className="button">ISOLATION</div>
          </div>
        </div>
        <div className={style.categoryCard}>
          <img src={sound}></img>
          <div className={style.buttonContainer}>
            <div className="button">ISOLATION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeSection;
