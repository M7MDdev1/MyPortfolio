import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function CarouselControls({
  handleBackButton,
  handleNextButton,
  Image,
  setIndex,
  index,
}) {
  return (
    <div className="absolute z-50 bottom-0 left-0 right-0 items-center p-2 border text-white border-[#1C1C21] rounded-[6.25rem] bg-[#070708] flex w-fit gap-x-2 mx-auto ">
      <div className="p-2 border border-[#2F2F37] rounded-[6.25rem] bg-[#1C1C21] flex">
        <FaAngleLeft onClick={handleBackButton} size={28}/>
      </div>

      <div className="p-2 border border-[#2F2F37] rounded-[6.25rem] bg-[#1C1C21] flex">
        <FaAngleRight onClick={handleNextButton} size={28}/>
      </div>
    </div>
  );
}
