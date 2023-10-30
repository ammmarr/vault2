import { useParams } from "react-router-dom";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import useGetData from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import BloggerCard from "../../components/bloggerCard/BloggerCard";
// import Back from "../../components/back Button/Back";
import { BlogTimeInfo } from "../../components/blogtimeInfo/BlogTimeInfo";
import Navbar from "../../components/navbar/NavBar";
const Blog = () => {
  const params = useParams();
  const { data, loading, error } = useGetData(
    `https://tazzweed.com/api/method/tazzweed.api.blogfilter?name=${params.id}`
  );
  const moreData = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.blog"
  )?.data.slice(0, 4);

  // const { content } = data[0];
  // const rawDate = new Date(data[0]?.creation);
  // const year = rawDate.getDate();
  // const month = rawDate.getMonth();
  // const day = rawDate.getDay();
  return (
    <>
      <Navbar />

      <div className={style.container}>
        {/* <div className={style.backButtonContainer}>
          <Back />
        </div> */}
        <div className={style.blog}>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>

          {/* <div
            dangerouslySetInnerHTML={{ __html: data[0].content }}
            className={style.content}
          /> */}
          <div className={style.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum corporis aperiam expedita ea veritatis sequi autem
              illo, ab eaque recusandae at totam quas aspernatur earum vel
              dolore eius sed unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum corporis aperiam expedita ea veritatis sequi autem
              illo, ab eaque recusandae at totam quas aspernatur earum vel
              dolore eius sed unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum corporis aperiam expedita ea veritatis sequi autem
              illo, ab eaque recusandae at totam quas aspernatur earum vel
              dolore eius sed unde.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis illum provident obcaecati, hic impedit cumque a fugit
              tempora adipisci cum recusandae non dolores totam repellat harum
              vitae qui quae eum. Ut tempora saepe minima ratione architecto
              ipsam dicta nemo rem, est magni itaque harum, dolores veniam,
              cupiditate fugiat? Harum maxime odio eligendi sunt non. Laborum,
              exercitationem facilis. Consequatur, accusantium possimus. Iusto
              omnis deleniti, praesentium sit facere dolore minima unde sint
              quod soluta. Sunt architecto quaerat, quisquam voluptates tempora
              ipsa dolorem. Neque sit accusantium natus illum odit doloremque
              ducimus, hic nemo? Impedit numquam excepturi quasi earum
              accusantium voluptatem corrupti aperiam, id explicabo deserunt
              vero repellendus inventore eaque eligendi ullam placeat facilis
              alias voluptatum odit praesentium velit nulla a dicta natus. Vel!
              Enim ex rerum pariatur cumque ipsa distinctio quis doloribus?
              Repellat libero quibusdam id esse alias aspernatur veniam quisquam
              qui vero voluptatum quam porro aperiam nisi sunt reprehenderit
              est, quaerat rerum? Adipisci molestias esse omnis natus atque quo
              sunt aut inventore non repellendus modi corporis, laborum
              deserunt, veritatis ullam odio aliquid possimus est quae vero
              suscipit minus dolore expedita et? Deserunt. Adipisci tenetur
              dignissimos necessitatibus ipsum amet incidunt, ex nobis accusamus
              molestiae corrupti at totam similique, error asperiores dolore
              maiores eaque numquam voluptatem natus atque aperiam ipsa, quod
              doloremque architecto! Velit. Ea sunt omnis, fugiat et debitis
              quisquam cupiditate. Sint aspernatur et natus maiores accusantium
              ut rerum porro odio non fugit laborum illo molestias, soluta
              perspiciatis commodi labore provident quisquam perferendis. Dolore
              perferendis quis magni odio ex nobis dolorum accusamus obcaecati
              ipsa dignissimos? Illo ab, dicta excepturi est expedita tempore
              sapiente. Delectus vel quibusdam porro quam voluptatibus. Odit,
              recusandae voluptate! Fugiat. Alias a distinctio exercitationem
              neque libero fuga, iure animi dignissimos iusto nobis et? Numquam
              minus dolores id, iure voluptas adipisci praesentium iusto tempore
              voluptatem distinctio consequuntur. Repellat, quis at! Magnam.
            </p> */}
          </div>
          <div className={style.blogTimeInfoMargin}>
            <BlogTimeInfo published_on={"20 - 10 - 2023"} read_time={"1"} />
          </div>

          {/* <div dangerouslySetInnerHTML={{ __html: data.content }}></div> */}
          <BloggerCard data={"data[0]"} />
        </div>
        <div className={style.moreBlogsContainer}>
          <h3>
            More <span>Blogs!</span>
          </h3>
          {moreData?.map((item: any, i: number) => (
            <BlogPostCard data={item} key={i} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default transition(Blog);
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
