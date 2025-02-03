import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const handleVisibility = () => {
    setNavMenuVisibility(!visibility);
  };
  return (
    <div
      className={`flex absolute top-10 flex-col items-center justify-center px-12 py-[2.70rem] mx-8 bg-[linear-gradient(180deg,_#000_1.26%,rgba(0,0,0,0.61)100%),radial-gradient(58.09%_74.45%_at_26.15%_31.82%,rgba(82,1,227,0.82)0%,#000_62.83%)] left-0 right-0 rounded-[1.25rem] ${
        !visibility && "hidden"
      }`}
    >
      <button onClick={handleVisibility}>
        <IoIosCloseCircleOutline
          className="absolute top-8 left-8 z-50"
          color="#AFB0B6"
          size={40}
        />
      </button>

      <div className="flex flex-col items-center gap-y-12">
        <img src="/W_Logo.png" alt="Logo" className={"h-16"} />

        <div className="flex flex-col items-center justify-center gap-y-4 px-[0.88rem] py-[2.19rem] text-[#AFB0B6] text-[0.875rem] font-Manrope rounded-[0.625rem_0.625rem_0rem_0rem] border-l border-t border-r border-[#1C1C21]">
          <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
            <Link to="/">Home</Link>
          </button>
          <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
            <Link to="/Portfolio">Portfolio</Link>
          </button>

          <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
            <Link to="/About">About me</Link>
          </button>

          <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
            <Link to="/Contact">Contact me</Link>
          </button>
        </div>

        <div className="bg-[#564082] px-[1.25rem] py-[0.88rem] text-white rounded-lg w-56 text-center">
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
