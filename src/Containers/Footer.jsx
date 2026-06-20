import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="pt-16 pb-10 px-5 font-Poppins bg-Footer-gradient flex flex-col items-center justify-center">
      <img src="W_Logo.png" alt="Logo" className="h-12 mb-10 self-start pl-2" />

      <h3 className="text-white text-xl font-semibold mb-3 text-center">
        Let&apos;s build something great together.
      </h3>
      <p className="text-sm text-[#888] mb-2 text-center">
        Open to full-time roles, internships, and collaboration.
      </p>
      <a
        href="mailto:official.muhmmad.ahmad@gmail.com"
        className="text-[#A084FF] hover:text-white text-sm mb-8 transition-colors"
      >
        official.muhmmad.ahmad@gmail.com
      </a>

      <div className="flex gap-3 mb-10">
        <a
          href="https://x.com/m7md_dev1"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 z-20 border border-[#2F2F37] hover:border-[#6D3AFD]/60 rounded-full flex transition-colors"
        >
          <FaXTwitter size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammed-mohjri/"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 z-20 border border-[#2F2F37] hover:border-[#6D3AFD]/60 rounded-full flex transition-colors"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://github.com/M7MDdev1"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 z-20 border border-[#2F2F37] hover:border-[#6D3AFD]/60 rounded-full flex transition-colors"
        >
          <LuGithub size={18} />
        </a>
        <a
          href="mailto:official.muhmmad.ahmad@gmail.com"
          className="p-2.5 z-20 border border-[#2F2F37] hover:border-[#6D3AFD]/60 rounded-full flex transition-colors"
        >
          <FiMail size={18} />
        </a>
      </div>

      <p className="text-xs text-[#444] text-center">
        © 2026 Mohammed Mahjari. All rights reserved.
      </p>
    </div>
  );
}
