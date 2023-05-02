import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { idos } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const IdoCard = ({ ido }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={ido.date}
      iconStyle={{ background: ido.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={ido.icon}
            alt={ido.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{ido.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {ido.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {ido.points.map((point, index) => (
          <li
            key={`ido-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Ido = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Buy new tokens launching on CORE Chain
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          How to Take Part in the MigoSwap IDO
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {idos.map((ido, index) => (
            <IdoCard
              key={`ido-${index}`}
              ido={ido}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Ido, "ido");
