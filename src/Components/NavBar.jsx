import { HiMenuAlt3 } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export default function NavBar({ visibility, setVisibility }) {
  return (
    <>
      {/* Mobile */}
      <div
        className={`bg-[linear-gradient(180deg,#000_1.26%,rgba(0,0,0,0.00)100%),radial-gradient(72.83%_40.4%_at_50%_27.17%,#5201E3_0%,rgba(0,0,0,0.50)100%)] rounded-[4.8125rem] border border-[#6D3AFD]
        flex items-center justify-between h-24 px-8 mb-10 mx-4
        md:hidden
        `}
      >
        <img src="W_Logo.png" alt="Logo" className={"h-14"} />
        <HiMenuAlt3
          color="white"
          className="cursor-pointer"
          size={28}
          onClick={() => setVisibility(!visibility)}
        />
      </div>
      {/* Desktop */}
      <div
        className={`md:flex hidden items-center justify-between w-[40rem] mx-auto px-2 rounded-[3.125rem] border border-[rgba(109,58,253,0.54)] navbar-gradient backdrop-blur-[7.5px]
        `}
      >
        <a
          href="#about"
          className="py-5 px-10 bg-[#5834BB] rounded-[3.75rem] block"
        >
          Home
        </a>
        <a href="#skills" className="py-5 px-10  rounded-[3.75rem] block ">
          About
        </a>
        <button className="py-5 px-10  rounded-[3.75rem] block ">Resume</button>
        <a href="#experties" className="py-5 px-10 rounded-[3.75rem] block">
          Contact
        </a>
      </div>
    </>
  );
}
