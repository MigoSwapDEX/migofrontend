import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { tradesvg } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Trade = () => {
  return (
    <div className="xs:flex md:flex-row">
      <div className="xs:w-full md:w-1/2 justify-center items-center my-auto">
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>
            <span className="text-[#915EFF]">Trade </span>
            anything without KYC seamlessly.
          </h2>
        </motion.div>

        <div className="md:w-1/2 flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Trade any token on coreDAO in seconds, with a sinlge button by
            connecting your wallet.
          </motion.p>
        </div>
      </div>
      <div className="xs:w-full md:w-1/2 justify-center items-center">
        <img
          src={tradesvg}
          alt="Trade Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Trade, "");