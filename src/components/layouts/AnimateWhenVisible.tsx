import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimateWhenVisible = ({ children, variants }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="initial" variants={variants}>
      {children}
    </motion.div>
  );
};
export default AnimateWhenVisible;
