import { Variants } from "framer-motion";

export const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const fadeIn = (direction = "up") => {
  return {
    initial: {
      y: direction === "down" ? -40 : 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      //  y: direction === "down" ? -40 : 30,
      opacity: 0,
      transition: {
        delay: 10,
        //  duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
};

export const textContainer: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const mapAnimation: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // borderWidth: 0,
    scale: 1,
    transition: {
      delay: 1.2,
      duration: 1,
      // ease: [0.06, 0.69, 0.33, 0.97],
      ease: "easeOut",
    },
  },
};
