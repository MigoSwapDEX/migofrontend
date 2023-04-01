import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { footerConfig } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={`mt-12 bg-black-800 rounded-[20px]`}>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {footerConfig?.map((item, index) => (
          <>
            <div
              key={index}
              className="mt-16 px-20 justify-between items-center"
            >
              <span className="text-[#915EFF] font-extrabold">{item.label}</span>
              {item.items?.map(({ label, href }) => (
                <li key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <div>{label}</div>
                  )}
                </li>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "");
