import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../../assets/sliderImg1.jpg";
import img2 from "../../assets/sliderImg2.jpg";
import img3 from "../../assets/sliderImg3.jpg";
import bg from "../../assets/backgroundImages/aboutus.jpg";
import style from "./index.module.scss";
import variants from "../../utils/variants";

const HeroCard = () => {
  const [counter, setCounter] = useState(0);

  //   const heroSectionCardsData = [
  //     {
  //       bg: img1,
  //     },
  //     {
  //       bg: img2,
  //     },
  //     {
  //       bg: img3,
  //     },
  //   ];
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prev) => {
  //         if (prev == heroSectionCardsData.length - 1) {
  //           return 0;
  //         }
  //         return prev + 1;
  //       });
  //     }, 5000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  //   const { bg } = heroSectionCardsData[counter];

  return (
    <motion.div className={style.container}>
      <div className={style.fade} />
      <AnimatePresence>
        <motion.div
          className={style.imgContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          key={counter}
        >
          <motion.img src={bg} />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className={style.textContainer}
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.5,
              duration: 0.7,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          WELCOME TO UMINO
        </motion.span>
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          Our Perfect Store
        </motion.h1>
        <motion.span
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          Over 20 years of experience, we have crafted thousands of strategic
          discovery process that enables us to peel back the layers which enable
          us to understand, connect.
        </motion.span>
        {/* 
        <motion.div
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
          className={style.buttonContainer}
        >
          <div className="button">EXPLORE NOW</div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
