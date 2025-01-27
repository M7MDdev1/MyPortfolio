import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

export default function About() {
  return (
    <div className="font-Manrope mx-4">
      <p className="text-[#797C86] text-[0.875rem] font-semibold">
        ABOUT
      </p>
      <h3 className="text-[1.75rem] font-semibold">THIS IS MOHAMMED</h3>
      <button className="px-5 py-[0.88rem] mb-[3.75rem] bg-[#1C1C21] border border-[#2F2F37] rounded-lg text-[0.875rem]">
        <Link to={"/Contact"}>Know More <GoArrowRight className="inline"/></Link>
      </button>

      <img src="Image\Me.png" alt="Me" />
      
    </div>
  );
}
