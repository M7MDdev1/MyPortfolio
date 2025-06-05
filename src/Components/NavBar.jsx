import { HiMenuAlt3 } from "react-icons/hi";

export default function NavBar({ visibility, setVisibility }) {
  return (
    <>
      <div className="sm:hidden flex items-center justify-between h-24 px-6 mb-10 bg-[#0A0A0A] border-b border-[#333]">
        <img src="W_Logo.png" alt="Logo" className="h-10" />
        <HiMenuAlt3
          color="white"
          size={28}
          className="cursor-pointer"
          onClick={() => setVisibility(!visibility)}
        />
      </div>
      <div className="hidden sm:flex justify-between items-center h-24 px-16 mb-10 bg-[#0A0A0A] border-b border-[#333]">
        {/* Logo */}
        <img src="W_Logo.png" alt="Logo" className="h-10" />

        {/* Navigation Links */}
        <div className="flex gap-x-10 text-white text-sm font-medium">
          <a href="#about" className="hover:text-[#6D3AFD]">
            About
          </a>
          <a href="#skills" className="hover:text-[#6D3AFD]">
            Skills
          </a>
          <a href="#experties" className="hover:text-[#6D3AFD]">
            Experties
          </a>
          <a href="#projects" className="hover:text-[#6D3AFD]">
            Projects
          </a>
          <a href="#volunteer" className="hover:text-[#6D3AFD]">
            Volunteer
          </a>
          <a href="/cv.pdf" className="hover:text-[#6D3AFD]">
            CV
          </a>
        </div>
      </div>
    </>
  );
}
