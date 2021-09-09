import { FC } from "react";

const SectionContainer: FC<{ id: string }> = ({ children, id }) => {
  return (
    <div className="w-full p-6 xl:px-40 lg:px-18 " id={id}>
      {children}
    </div>
  );
};

export default SectionContainer;
