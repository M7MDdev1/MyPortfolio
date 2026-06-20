import { IoIosCloseCircleOutline } from "react-icons/io";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#experties", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "/cv.pdf", label: "Download CV" },
];

export default function NavMenu({ visibility, setNavMenuVisibility }) {
  const close = () => setNavMenuVisibility(false);

  return (
    <div
      className={`absolute sm:hidden top-10 left-0 right-0 z-10 flex flex-col items-center justify-center px-8 py-10 mx-6 rounded-[1.25rem] transition-all duration-300 ease-in-out
        bg-[linear-gradient(180deg,_#000_1.26%,rgba(0,0,0,0.61)100%),radial-gradient(58.09%_74.45%_at_26.15%_31.82%,rgba(82,1,227,0.82)0%,#000_62.83%)]
        ${visibility ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
    >
      <button onClick={close}>
        <IoIosCloseCircleOutline className="absolute top-6 left-6 z-50" color="#AFB0B6" size={36} />
      </button>

      <img src="/W_Logo.png" alt="Logo" className="h-14 mb-8" />

      <div className="flex flex-col items-center gap-y-2 w-full">
        {navLinks.map(({ href, label }) => (
          <button key={href} className="w-full py-3 text-center" onClick={close}>
            <a
              href={href}
              className="text-[#AFB0B6] hover:text-white text-sm font-medium transition-colors"
            >
              {label}
            </a>
          </button>
        ))}
      </div>

      <div className="flex gap-3 mt-8">
        <a
          href="mailto:official.muhmmad.ahmad@gmail.com"
          className="px-5 py-2.5 bg-[#6D3AFD] hover:bg-[#5A2EE0] text-white rounded-full text-sm font-medium transition-colors"
          onClick={close}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
