import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import style from "./index.module.scss";
import variants from "../../utils/variants";

const HeroCard = ({ data }: any) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev == data.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { bg, h1, h2 } = data[counter];

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
          {" "}
          <motion.h1
            variants={variants}
            transition={{ delay: 0, ease: "easeIn" }}
          >
            {h1}
          </motion.h1>
          <motion.span
            variants={variants}
            transition={{ delay: 0, ease: "easeIn" }}
          >
            {h2}
          </motion.span>
          <motion.span
            variants={variants}
            transition={{ delay: 0, ease: "easeIn" }}
          ></motion.span>
          <motion.div
            variants={variants}
            transition={{ delay: 0, ease: "easeIn" }}
            className={style.buttonContainer}
          >
            <div className="button">EXPLORE NOW</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroCard;
