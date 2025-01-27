import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";
import SocialMedia from "../../../Components/SocialMedia";

export default function About() {
  return (
    <div className="font-Manrope mx-4">
      <p className="text-[#797C86] text-[0.875rem] font-semibold">ABOUT</p>
      <h3 className="text-[1.75rem] font-semibold">THIS IS MOHAMMED</h3>
      <Link to={"/Contact"} className="block w-fit px-5 py-[0.88rem] mb-[3.75rem] bg-[#1C1C21] border border-[#2F2F37] rounded-lg text-[0.875rem]">
        Know More <GoArrowRight className="inline" />
      </Link>

      <img src="Image\Me.png" alt="Me" />

      <div className="p-6 text-[#E7DFF8]">
        <h1 className="text-xl mb-3">
          <img src="start.svg" alt="start" className="inline" /> Introduction
        </h1>
        <p className="text-[0.875rem]">
          Front-End Web Developer proficient in React, TypeScript, and Tailwind
          CSS. Currently expanding skills in PHP and to transition into
          Full-Stack Development. Committed to building scalable and efficient
          web applications.
        </p>
      </div>

      <div className="p-6 text-[#E7DFF8]">
        <h1 className="text-xl mb-5">
          <img src="start.svg" alt="start" className="inline" /> Contact
          Information
        </h1>
        <div className="mb-3">
          <p className="text-[#E4E4E6] text-[0.875rem]">Home</p>
          <a
            href="mailto:official.muhmmad.ahmad@gmail.com"
            className="text-[#AFB0B6] "
          >
            official.muhmmad.ahmad@gmail.com
          </a>
        </div>

        <div className="mb-5">
          <p className="text-[#E4E4E6] text-[0.875rem]">Phone Number</p>
          <a href="tel:+966556744016" className="text-[#AFB0B6] ">
            +966 556744016
          </a>
        </div>
        <SocialMedia />

        <Link
          to={"/Contact"}
          className="block text-center mt-5 px-6 py-[0.88rem] w-full text-white mb-4 bg-[#1C1C21] border border-[#2F2F37] rounded-lg text-[0.875rem]"
        >
          Let’s Work
        </Link>

        <a
          href={"SWE - Mohammed Mahjari .pdf"}
          className="block text-center px-6 py-[0.88rem] w-full text-white bg-[#1C1C21] border border-[#2F2F37] rounded-lg text-[0.875rem]"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
