import { Category } from "@libs/types";
import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
};

export const NavItem: FC<Props> = ({ value, handlerFilterCategory, active }) => {
  let className = "text-lg capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  const ref = useRef<HTMLDivElement>();

  const [stickedToTop, setStickedToTop] = useState(false);

  const scrollHandler = () => {
    ref.current.getBoundingClientRect().y === 0 ? setStickedToTop(true) : setStickedToTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  console.log({ stickedToTop });

  return (
    <nav
      ref={ref}
      onScroll={scrollHandler}
      className={classNames(" sticky z-[25] flex items-center w-full h-16 bg-transparent top-0", {
        "bg-gradient": stickedToTop,
      })}
    >
      <ul className="flex flex-wrap justify-center w-full my-4 space-x-4">
        <NavItem value="all" {...props} />
        <NavItem value="react" {...props} />
        <NavItem value="mongo" {...props} />
        <NavItem value="django" {...props} />
        <NavItem value="node" {...props} />
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
