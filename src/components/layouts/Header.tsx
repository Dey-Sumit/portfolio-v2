import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoMdGitNetwork } from "react-icons/io";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";

const Header: FC<{ setShowHeader: any }> = ({ setShowHeader }) => {
  //const [idleSeconds, setIdleSeconds] = useState(0);
  const [scrolled, setScrolled] = useState<boolean>();

  // checks the idle-time of the scroll,used to show the header animation
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     setIdleSeconds(idleSeconds + 1);
  //     console.log("effect", idleSeconds);
  //     if (idleSeconds > 2) setShowHeader(true);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [idleSeconds]);

  useEffect(() => {
    const onScroll = () => {
      // setIdleSeconds(0);
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
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          delay: 1,
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      // exit={{
      //   y: -100,
      //   transition: {
      //     duration: 0.6,
      //     ease: "easeInOut",
      //   },
      // }}

      // TODO add tailwind css for y transition, don't remove the element
      className={classNames("fixed top-0 bg-red left-0 z-20 w-full py-4 h-14", {
        "shadow-lg bg-gradient": scrolled,
      })}
    >
      <nav className={classNames(" flex items-center justify-around w-full uppercase")}>
        <ul className="flex justify-center flex-auto tracking-wide space-x-14 ">
          <li className="cursor-pointer">
            <a aria-label="hero" href="#hero">
              <AiFillHome className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Home</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a aria-label="about" href="#about">
              <SiJavascript className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">About</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a aria-label="projects" href="#projects">
              <IoMdGitNetwork className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Projects</span>
            </a>
          </li>

          <li className="cursor-pointer">
            <a aria-label="YouTube" href="#youtube">
              <GrYoutube className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">YouTube</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a aria-label="contacts" href="#contacts">
              <MdEmail className="block w-5 h-5 md:hidden" />
              <span className="hidden md:block">Contacts</span>
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
