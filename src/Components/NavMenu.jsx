import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const handleVisibility = () => {
    setNavMenuVisibility(!visibility);
  };
  return (
    <div
      className={`flex absolute top-10 flex-col items-center justify-center px-12 py-[2.70rem] mx-8 bg-[#1D192B] rounded-[1.25rem] ${
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
        <img src="/B_Logo.png" alt="Logo" className={"h-16"} />

        <div className="flex flex-col items-center justify-center gap-y-4 px-[0.88rem] py-[2.19rem] text-[#AFB0B6] text-[0.875rem] font-Manrope">
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
