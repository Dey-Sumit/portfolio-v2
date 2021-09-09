import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Header } from "@components/layouts";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState<boolean>();
  const [idleSeconds, setIdleSeconds] = useState(0);

  // checks the idle-time of the scroll,used to show the header animation
  useEffect(() => {
    let timer1 = setInterval(() => {
      setIdleSeconds((idleSeconds) => idleSeconds + 1);
    }, 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  // checks the scroll length , used to show the header bg color and more
  useEffect(() => {
    const onScroll = () => {
      setIdleSeconds(0);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="text-white bg-gradient">
      <AnimatePresence>
        {(!scrolled || idleSeconds > 1) && <Header scrolled={scrolled} />}
      </AnimatePresence>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
