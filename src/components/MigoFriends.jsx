import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { migosvg } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const MigoFriends = () => {
  return (
    <div className="flex flex-row xs:flex-col md:flex-row">
      <div className="xs:w-full md:w-1/2 justify-center items-center my-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            What is friendship without{" "}
            <span className="text-[#915EFF]">MIGO </span>.
          </h2>
        </motion.div>

        <div className="md:w-1/2 flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            MIGO token is at the heart of our ecosystem. Buy and stake it today!
          </motion.p>
        </div>
      </div>
      <div className="xs:w-full md:w-1/2 justify-center items-center">
        <img
          src={migosvg}
          alt="Migo Coins"
          className="w-[500px] h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(MigoFriends, "");
