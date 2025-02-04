import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";
import Carousel from "../Components/Carousel";
import SubTitle from "../../../Components/SubTitle";

export default function Projects() {
  return (
    <div className="gap-y-10 font-Poppins mb-8">
      <SubTitle className="mb-4">Project</SubTitle>
      <p className="font-medium mb-7">Discover my coding world.</p>
      <Carousel />
      <a
        href={"https://github.com/M7MDdev1?tab=repositories"}
        className="block w-fit p-[0.875rem_1.25rem] mt-[1.6rem] bg-[radial-gradient(49.91%_114.11%_at_22.77%_50%,#F0E9FF_0%,#FFF_100%)] border border-[#6D3AFD] text-[0.875rem] text-black rounded-[2rem] mx-auto font-medium"
      >
        View All Works <GoArrowRight className="inline" />
      </a>
    </div>
  );
}
