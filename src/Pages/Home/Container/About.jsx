import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export default function About() {
  return (
    <div className=" mx-4 font-Poppins h-[44.3125rem] w-[90%]">
      <p className="font-semibold">About me</p>
      <h3 className="text-4xl font-semibold mb-10">
        I am{" "}
        <span className="bg-gradient-to-r from-[#FF4548] to-[#6915D8] bg-clip-text text-transparent">
          Mohammed!
        </span>
      </h3>

      <img src="Image\Me.png" alt="Me" className="w-[14.75rem] mx-auto" />

      <div className="p-6 mb-10">
        <h3 className="mb-3 font-semibold text-2xl">Introduction</h3>
        <p className="text-[0.875rem] leading-[1.3125rem] tracking-[0.04375rem]">
          Front-End Web Developer proficient in React, TypeScript, and Tailwind
          CSS. Currently expanding skills in PHP and to transition into
          Full-Stack Development. Committed to building scalable and efficient
          web applications.
        </p>
      </div>
      <Link
        to={"/Contact"}
        className="shadow-[0px_32px_54px_0px_rgba(3,3,3,0.14)] flex items-center justify-between rounded-[2.03125rem] border border-[#6D3AFD] w-[11.875rem] py-[1.36rem] px-[2.06rem] font-semibold mx-auto"
      >
        Know More <FaArrowRight className="inline text-xl" />
      </Link>
    </div>
  );
}
