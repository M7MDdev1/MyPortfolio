import { ImArrowUpRight2 } from "react-icons/im";

export default function CarouselCard({ Img, index, Title, Link }) {
  return (
    <div className="shrink-0 grow-0 rounded-2xl duration-300 transition-all"
    style={{ transform: `translateX(${`-${index * 100}%`})` }}

    >
      <img
        src={Img}
        className={
          "  h-[400px]   object-cover select-none p-4"
        }
        alt="carousel image"
      />
      <div className=" pb-12 px-6 flex justify-between">
        <div>
          <p className="text-[#CACACE]">{Title}</p>
        </div>
        <a
          href={Link}
          target="_blank"
          className="flex items-center gap-x-2 justify-center border-b border-[#2F2F37] text-[#F2F2F3] text-[0.875rem]"
        >
          View Project <ImArrowUpRight2 className="inline" />
        </a>
      </div>
    </div>
  );
}
