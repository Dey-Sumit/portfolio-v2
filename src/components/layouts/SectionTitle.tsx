import { FC } from "react";

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex mb-2 space-x-2 ">
      <h1 className="text-2xl font-bold tracking-wide text-green-400 md:text-3xl font-hina ">
        {title}{" "}
      </h1>
      <div className="flex-1 w-10 h-[1px] bg-green-400 8px; my-[23px] mx-2 "> </div>
    </div>
  );
};

export default SectionTitle;
