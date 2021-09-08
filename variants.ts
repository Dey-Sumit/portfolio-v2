import { Variants } from "framer-motion";

export const fadeIn = (direction = "up") => {
  return {
    initial: {
      y: direction === "down" ? -40 : 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const textContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

export const borderAnimation: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // borderWidth: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      // ease: [0.06, 0.69, 0.33, 0.97],
      ease: "easeOut",
    },
  },
};
