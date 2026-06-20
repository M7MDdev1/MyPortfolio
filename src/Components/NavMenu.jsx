import { IoIosCloseCircleOutline } from "react-icons/io";

const navLinks = [
  { href: "#about", label: "about.exe", icon: "👤" },
  { href: "#experties", label: "experience.log", icon: "📋" },
  { href: "#projects", label: "projects/", icon: "📁" },
  { href: "#skills", label: "skills.cfg", icon: "⚙️" },
  { href: "#certifications", label: "certs.txt", icon: "🏆" },
  { href: "#volunteer", label: "volunteer/", icon: "🤝" },
  { href: "/cv.pdf", label: "resume.pdf", icon: "📄" },
];

export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const close = () => setNavMenuVisibility(false);

  return (
    <div
      className={`absolute sm:hidden top-12 left-2 right-2 z-50 transition-all duration-200 ease-in-out rounded-[3px] border border-[#111] shadow-[1px_1px_0_#555,-1px_-1px_0_#111,0_8px_24px_rgba(0,0,0,0.8)]
        ${visibility ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-98 pointer-events-none"}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-2 py-[5px] bg-gradient-to-r from-[#0A3090] via-[#2060C8] to-[#0C389A]">
        <span className="text-white text-xs font-mono font-bold flex items-center gap-1.5">
          🗂️ Navigation
        </span>
        <button
          onClick={close}
          className="w-[18px] h-[15px] text-[9px] font-black bg-gradient-to-b from-[#CC3030] to-[#991010] text-white flex items-center justify-center rounded-[1px] border-t border-l border-t-[#FF7070] border-l-[#FF7070] border-b border-r border-b-[#550000] border-r-[#550000] hover:from-[#EE4444]"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="bg-[#252525] border-t border-[#444] p-3">
        <div className="flex flex-col gap-0.5">
          {navLinks.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-[#C0C0C0] hover:bg-[#2060C8] hover:text-white rounded-[2px] transition-colors"
            >
              <span className="text-base w-5">{icon}</span>
              {label}
            </a>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-[#333]">
          <a
            href="mailto:official.muhmmad.ahmad@gmail.com"
            onClick={close}
            className="block w-full text-center px-4 py-2 text-xs font-mono bg-gradient-to-b from-[#3A3A3A] to-[#252525] text-[#C0C0C0] border-t border-l border-t-[#666] border-l-[#666] border-b border-r border-b-[#111] border-r-[#111] hover:from-[#4A4A4A] transition-colors"
          >
            📧 official.muhmmad.ahmad@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
