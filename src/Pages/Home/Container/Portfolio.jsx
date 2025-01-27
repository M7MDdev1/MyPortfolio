import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";
import Carousel from "../Components/Carousel";

export default function Portfolio() {
  return (
    <div className="mx-4 gap-y-10">
      <p className="text-[#797C86] text-[0.875rem] font-semibold">PORTFOLIO</p>
      <h1 className="text-[1.75rem] font-semibold mb-5">
        DISCOVER MY CODING WORLD.
      </h1>

      <Link to={"/Portfolio"} className="block w-fit px-5 py-[0.88rem] mb-[3.75rem] bg-[#1C1C21] border border-[#2F2F37] rounded-lg text-[0.875rem]">
      View All Works <GoArrowRight className="inline" />
      </Link>
      <Carousel/>
    </div>
  );
}
