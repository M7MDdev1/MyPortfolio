"use client";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="font-mono">
      {/* Main footer content */}
      <div className="px-6 py-8 bg-[#111111] border-t border-[#333]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#4488EE] mb-2">&gt; ready for next challenge</p>
          <h3 className="text-lg font-bold text-[#E8E8E8] mb-1">
            Let&apos;s build something great.
          </h3>
          <p className="text-xs text-[#555] mb-4">
            Open to full-time roles, internships, and collaboration.
          </p>
          <a
            href="mailto:official.muhmmad.ahmad@gmail.com"
            className="inline-block px-4 py-2 text-xs bg-gradient-to-b from-[#2060C8] to-[#0A40A0] text-white border-t border-l border-t-[#6090E8] border-l-[#6090E8] border-b border-r border-b-[#051E60] border-r-[#051E60] hover:from-[#3070D8] transition-colors rounded-[2px] mb-6"
          >
            📧 official.muhmmad.ahmad@gmail.com
          </a>

          <div className="flex justify-center gap-2">
            {[
              { href: "https://x.com/m7md_dev1", icon: <FaXTwitter size={14} />, label: "Twitter" },
              { href: "https://www.linkedin.com/in/mohammed-mohjri/", icon: <FaLinkedin size={14} />, label: "LinkedIn" },
              { href: "https://github.com/M7MDdev1", icon: <LuGithub size={14} />, label: "GitHub" },
              { href: "mailto:official.muhmmad.ahmad@gmail.com", icon: <FiMail size={14} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="p-2 text-[#666] hover:text-[#4488EE] border border-[#2A2A2A] hover:border-[#4488EE]/50 rounded-[2px] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* XP Taskbar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border-t border-[#444]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-b from-[#2060C8] to-[#0A3090] rounded-[2px] text-white text-[0.65rem] font-bold">
            <img src="W_Logo.png" alt="Start" className="h-3.5" />
            <span>m7md.co</span>
          </div>
          <div className="w-px h-4 bg-[#333]" />
          <span className="text-[0.6rem] text-[#555]">© 2026 Mohammed Mahjari</span>
        </div>
        <div className="flex items-center gap-3 border border-[#333] px-2 py-0.5 bg-[#111] rounded-[2px]">
          <span className="text-[0.6rem] text-[#888]">{time}</span>
        </div>
      </div>
    </div>
  );
}
