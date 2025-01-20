import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Head() {
  return (
    <div className={"px-4 py-10 font-Manrope gap-5"}>
    <p className="text-[#62646C] text-[0.875rem]">MADE BY ME</p>
    <h1 className=" text-[2.5rem] text-[#E4E4E6] font-semibold">
      MOHAMMED MAHJARY
    </h1>
    <div className="text-[1.75rem] font-semibold">
      <div className="flex items-center gap-x-2 mb-1">
        <p>LET&apos;s</p>
        <div className="rounded-[6.25rem] bg-[#4A2CED] shadow-arrow-shadow px-[1.875rem] py-[0.875rem]">
          <HiOutlineArrowUpRight />
        </div>
      </div>
      <p>WORK TOGETHER</p>
    </div>
  </div>
  )
}
