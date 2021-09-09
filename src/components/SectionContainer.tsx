type Props = {
  id: string;
};
const SectionContainer = ({ children, id }) => {
  return (
    <div
      className="w-full p-6 xl:px-40 lg:px-18 lg:bg-red-600 xl:bg-yellow-500 sm:bg-green-600 "
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
