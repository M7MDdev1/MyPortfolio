import { IoIosCloseCircleOutline } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const handleVisibility = () => {
    setNavMenuVisibility(!visibility);
  };
  return (
    <div
      className={`flex flex-col items-center justify-center px-12 py-[2.70rem] mx-8 bg-green-700 rounded-[1.25rem] ${
        !visibility && "hidden"
      }`}
    >
      <IoIosCloseCircleOutline className="absolute top-0 left-0" color="#AFB0B6" size={40} onClick={()=>handleVisibility}/>

      <img src="/B_Logo.png" alt="Logo" className={"h-16"} />

      <div className="flex flex-col items-center px-[0.88rem] py-[2.19rem] text-[#AFB0B6] text-[0.875rem] font-Manrope">
        <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
          <a href="#home">Home</a>
        </button>
        <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
          <a href="#Portfolio">Portfolio</a>
        </button>

        <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
          <a href="#aboutme">About me</a>
        </button>

        <button className="py-6 px-[1.88rem]" onClick={handleVisibility}>
          <a href="#contact">Services</a>
        </button>
      </div>

      <div className="bg-[#564082] px-[1.25rem] py-[0.88rem] text-white rounded-lg w-56 text-center">
        <button>Contact Me</button>
      </div>
    </div>
  );
}
