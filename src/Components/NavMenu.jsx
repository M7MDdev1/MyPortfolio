import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router"; // Fixed import

export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const handleVisibility = () => {
    setNavMenuVisibility(!visibility);
  };

  return (
    <div
      className={`absolute top-10 left-0 right-0 flex flex-col items-center justify-center px-12 py-[2.70rem] mx-8 bg-[linear-gradient(180deg,_#000_1.26%,rgba(0,0,0,0.61)100%),radial-gradient(58.09%_74.45%_at_26.15%_31.82%,rgba(82,1,227,0.82)0%,#000_62.83%)] rounded-[1.25rem] transition-all duration-300 ease-in-out ${
        visibility ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[-20px] scale-95 pointer-events-none"
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
        <img src="/W_Logo.png" alt="Logo" className="h-16" />

        <div className="flex flex-col items-center justify-center gap-y-4 px-[0.88rem] py-[2.19rem] text-[#AFB0B6] text-[0.875rem] font-Manrope rounded-[0.625rem_0.625rem_0rem_0rem] border-l border-t border-r border-[#1C1C21]">
          {["Home", "Portfolio", "About", "Contact"].map((item) => (
            <button key={item} className="py-6 px-[1.88rem]" onClick={handleVisibility}>
              <Link to={`/${item === "Home" ? "" : item}`}>{item}</Link>
            </button>
          ))}
        </div>

      </div>
        <div className="flex flex-col gap-y-8  items-center justify-center">
        <button className="w-[12.125rem] h-[2.87769rem] rounded-[2.24819rem] border border-[#6D3AFD] text-[#161513] font-semibold bg-white">Get in touch</button>
        <button className="w-[12.125rem] h-[2.87769rem] rounded-[2.24819rem] border border-[#6D3AFD]  font-semibold bg-transparent">Download CV</button>
      </div>
    </div>
  );
}
