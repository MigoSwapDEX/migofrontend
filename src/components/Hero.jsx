import { motion } from "framer-motion";

import { styles } from "../styles";
import { amigoesImage } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} xs:flex items-start gap-5`}
      >
        <div className="xs:w-full md:w-1/2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">
              Amigos is a friend you love and trust.
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Trade, earn, stake and win crypto on the most friendly DEX{" "}
            <br className="sm:block hidden" />
            in the Metaverse.
          </p>
        </div>
        <div className="xs:w-full md:w-1/2 mt-5">
          <img
            src={amigoesImage}
            alt="Amigoes Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;