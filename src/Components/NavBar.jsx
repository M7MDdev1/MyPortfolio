import { HiMenuAlt3 } from "react-icons/hi";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experties", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "/cv.pdf", label: "CV" },
];

export default function NavBar({ visibility, setVisibility }) {
  return (
    <>
      <div className="sm:hidden flex items-center justify-between h-20 px-6 mb-10 bg-[#0A0A0A] border-b border-[#1C1C26]">
        <img src="W_Logo.png" alt="Logo" className="h-9" />
        <HiMenuAlt3
          color="white"
          size={26}
          className="cursor-pointer"
          onClick={() => setVisibility(!visibility)}
        />
      </div>

      <div className="hidden sm:flex justify-between items-center h-20 px-10 mb-10 bg-[#0A0A0A] border-b border-[#1C1C26]">
        <img src="W_Logo.png" alt="Logo" className="h-9" />
        <div className="flex gap-x-6 text-[#A0A0A8] text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
