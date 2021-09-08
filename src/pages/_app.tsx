import Header from "@components/Header";
import "@styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import "aos/dist/aos.css";

import AOS from "aos";
function MyApp({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState<boolean>();
  const [idleSeconds, setIdleSeconds] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    let timer1 = setInterval(() => {
      setIdleSeconds((idleSeconds) => idleSeconds + 1);
    }, 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
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
    <div className="text-white ">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence>
        {" "}
        {(!scrolled || idleSeconds > 1) && <Header scrolled={scrolled} />}{" "}
      </AnimatePresence>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
