import { HiMenuAlt3 } from "react-icons/hi";

const navLinks = [
  { href: "#about", label: "about.exe" },
  { href: "#experties", label: "experience.log" },
  { href: "#projects", label: "projects/" },
  { href: "#skills", label: "skills.cfg" },
  { href: "#certifications", label: "certs.txt" },
  { href: "#volunteer", label: "volunteer/" },
  { href: "/cv.pdf", label: "resume.pdf" },
];

export default function NavBar({ visibility, setVisibility }) {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-gradient-to-b from-[#3A3A3A] to-[#252525] border-b border-[#111] shadow-[0_1px_0_#555]">
        <div className="flex items-center gap-2">
          <img src="W_Logo.png" alt="Logo" className="h-7" />
          <span className="text-[#AAAAAA] text-xs font-mono">m7md.co</span>
        </div>
        <HiMenuAlt3
          color="#C0C0C0"
          size={22}
          className="cursor-pointer"
          onClick={() => setVisibility(!visibility)}
        />
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-between px-6 py-2 bg-gradient-to-b from-[#3A3A3A] to-[#252525] border-b border-[#111] shadow-[0_1px_0_#555]">
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <img src="W_Logo.png" alt="Logo" className="h-7" />
          <div className="w-px h-5 bg-[#444]" />
          <span className="text-[#888] text-xs font-mono">C:\Users\m7md\portfolio</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 text-xs font-mono text-[#AAAAAA] hover:bg-[#2060C8] hover:text-white rounded-[2px] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
