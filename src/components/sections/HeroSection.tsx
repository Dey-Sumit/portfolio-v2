import abstract from "@public/images/abstract.png";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, textContainer } from "@libs/variants";
import { useEffect, useState } from "react";

const INTERVAL_TEXT_TO_SHOW_IN_SECONDS = 3;

const HeroSection = () => {
  // create a timer that will change text after a certain interval
  const [timer, setTimer] = useState(0);

  const [showTextIndex, setShowTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);

      if (timer <= INTERVAL_TEXT_TO_SHOW_IN_SECONDS) setShowTextIndex(0);
      else if (timer > INTERVAL_TEXT_TO_SHOW_IN_SECONDS && timer <= INTERVAL_TEXT_TO_SHOW_IN_SECONDS * 2)
        setShowTextIndex(1);
      else setShowTextIndex(2);

      // reset the time
      if (timer >= INTERVAL_TEXT_TO_SHOW_IN_SECONDS * 3) setTimer(0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <section className="relative grid h-screen ">
      {/* <Image src={abstract} className="opacity-30" objectFit="contain" /> */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [10, 0, 10],
          transition: {
            delay: 1,
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="absolute -translate-x-1/2 bottom-12 left-1/2"
      >
        <RiArrowDownSLine className="w-6 h-6" />
      </motion.span>
      <div className="grid place-items-center">
        <motion.div variants={textContainer} initial="initial" animate="animate" className="space-y-3">
          <motion.p variants={fadeIn("up")} className="text-sm text-green-100 md:text-lg">
            Code • Coffee • Coldplay
          </motion.p>
          <motion.h1 variants={fadeIn("up")} className="text-4xl font-extrabold sm:text-7xl md:text-8xl">
            Hi, I'm Sumit <span className="text-[#24282B] text-stroke">Dey</span>
          </motion.h1>

          <AnimatePresence>
            {showTextIndex === 0 && (
              <motion.h3
                variants={fadeIn("up")}
                className="text-4xl font-extrabold text-transparent from-orange-500 bg-clip-text bg-gradient-to-t to-white md:text-6xl"
              >
                Frontend Dev
              </motion.h3>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showTextIndex === 1 && (
              <motion.h3
                variants={fadeIn("up")}
                className="text-4xl font-extrabold text-transparent from-red-500 bg-clip-text bg-gradient-to-t to-white md:text-6xl"
              >
                YouTuber
              </motion.h3>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showTextIndex === 2 && (
              <motion.h3
                variants={fadeIn("up")}
                className="text-4xl font-extrabold text-transparent from-green-400 bg-clip-text bg-gradient-to-t to-white md:text-6xl"
              >
                Traveller
              </motion.h3>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
