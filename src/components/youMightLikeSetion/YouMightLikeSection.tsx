import style from "./index.module.scss";
import isolationImage from "../../assets/categoryImages/isolationImage.jpg";
import sound from "../../assets/categoryImages/stp.png";

const YouMightLikeSection = () => {
  return (
    <div className={style.container}>
      <h2>You Might Like</h2>
      <p>Our products are designed for everyone, environmentally friendly.</p>
      <div className={style.categoriesContainer}>
        <div className={style.categoryCard}>
          <img src={isolationImage}></img>
          <div className={style.buttonContainer}>
            <div className="button">ACV</div>
          </div>
        </div>
        <div className={style.categoryCard}>
          <img src={sound}></img>
          <div className={style.buttonContainer}>
            <div className="button">STP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeSection;
