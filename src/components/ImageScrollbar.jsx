import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className="flex justify-center items-center mr-1">
      <div className="text-2xl pointer">
        <FaArrowAltCircleLeft
          className="cursor-pointer"
          onClick={() => scrollPrev()}
        />
      </div>
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div className="flex justify-center items-center mr-1">
      <div className="text-2xl pointer">
        <FaArrowAltCircleRight
          className="cursor-pointer"
          onClick={() => scrollNext()}
        />
      </div>
    </div>
  );
};
export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <div className="w-[910px] p-1 overflow-hidden" itemId={item.id}>
          <img src={item.url} className="w-[1000px] h-[500px]" />
        </div>
      ))}
    </ScrollMenu>
  );
}
