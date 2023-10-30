import style from "./index.module.scss";
import p1 from "../../assets/images/p1.jfif";
import { useNavigate } from "react-router-dom";
import img from "../../assets/amir negm.jfif";
const BloggerCard = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={img} />
      </div>
      <div className={style.textSection}>
        <h4>Amir Negm</h4>
        {/* <p dangerouslySetInnerHTML={{ __html: data.blogger_bio }}></p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odio,
          quos itaque accusamus nam ipsum quo saepe ad assumenda architecto.
          Nemo mollitia nulla cupiditate veritatis. Ratione excepturi nostrum
          iusto beatae.
        </p>
      </div>
    </div>
  );
};

export default BloggerCard;
