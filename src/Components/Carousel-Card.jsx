import { ImArrowUpRight2 } from "react-icons/im";

export default function CarouselCard({ Img, index, Title, Date, Link }) {
  return (
    <div className="shrink-0 grow-0 rounded-2xl">
      <img
        src={Img}
        className={
          " transition-all h-[400px]  duration-300 object-cover select-none p-4"
        }
        style={{ transform: `translateX(${`-${index * 100}%`})` }}
        alt="carousel image"
      />
      <div className=" pb-12 px-6 flex justify-between">
        <div>
          <p className="text-[#CACACE]">Tegan App</p>
        </div>
        <a href="" className="flex items-center gap-x-2 justify-center border-b border-[#2F2F37] text-[#F2F2F3] text-[0.875rem]">
          View Project <ImArrowUpRight2 className="inline"/>
        </a>
      </div>
    </div>
  );
}
