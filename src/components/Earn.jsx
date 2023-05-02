import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { earnsvg, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Earn = () => {
  return (
    <div className="xs:flex md:flex-row">
      <div className="xs:w-full md:w-1/2 justify-center items-center">
        <img
          src={earnsvg}
          alt="Migo Coins"
          className="w-[500px] h-full object-contain"
        />
      </div>
      <div className="xs:w-full md:w-1/2 justify-center items-center my-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            <span className="text-[#915EFF]">Earn passive income </span>
            as you provide liquidy for trading.
          </h2>
        </motion.div>

        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            MigoSwap makes it easy to make your crypto work for you.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Earn, "earn");
