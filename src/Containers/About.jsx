import CountUp from "react-countup";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import XpWindow from "../Components/XpWindow";

const stats = [
  { value: 12000, suffix: "+", label: "Employers Reached", sub: "via Sehrah" },
  {
    value: 200,
    suffix: "",
    label: "Top 200 / 3,000+",
    sub: "KAUST Cybersecurity",
  },
  { value: 1, suffix: "st", label: "Ranked #1", sub: "Graduation Project" },
  { value: 4.74, suffix: "", label: "GPA", sub: "out of 5.00", decimals: 2 },
];

function XpButton({ href, children, primary = false, download = false }) {
  const base =
    "flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono border-t border-l border-b border-r transition-colors rounded-[2px]";
  const primary_ =
    "bg-gradient-to-b from-[#2060C8] to-[#0A40A0] text-white border-t-[#6090E8] border-l-[#6090E8] border-b-[#051E60] border-r-[#051E60] hover:from-[#3070D8]";
  const secondary_ =
    "bg-gradient-to-b from-[#4A4A4A] to-[#303030] text-[#D0D0D0] border-t-[#666] border-l-[#666] border-b-[#111] border-r-[#111] hover:from-[#5A5A5A]";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      download={download}
      className={`${base} ${primary ? primary_ : secondary_}`}
    >
      {children}
    </a>
  );
}

export default function About() {
  return (
    <section id="about" className="font-Poppins">
      <XpWindow title="Mohammed Mahjari — Profile" icon="👤">
        <div className="p-5">
          {/* Status bar at top */}
          <div className="flex items-center gap-2 mb-5 px-2 py-1 bg-[#1E1E1E] border border-[#333] rounded-[2px] font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-[#44CC44] animate-pulse shrink-0" />
            <span className="text-[#888]">STATUS:</span>
            <span className="text-[#44CC44]">Open to opportunities</span>
            <span className="ml-auto text-[#555]">m7md.co</span>
          </div>

          {/* Main info */}
          <div className="mb-5">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#E8E8E8] mb-1">
              Mohammed Mahjari
            </h1>
            <p className="text-sm font-mono text-[#4488EE] mb-4">
              &gt; Full-Stack Engineer &amp; Co-Founder
            </p>
            <p className="text-sm text-[#A0A0A0] leading-relaxed border-l-2 border-[#2060C8] pl-3">
              Co-founded{" "}
              <span className="text-[#E8E8E8] font-semibold">Sehrah</span>, a
              commercial platform reaching{" "}
              <span className="text-[#44AAFF] font-semibold">
                12,000+ employers
              </span>{" "}
              across Saudi Arabia. Shipped production systems at{" "}
              <span className="text-[#E8E8E8] font-semibold">KACST</span> and{" "}
              <span className="text-[#E8E8E8] font-semibold">Ebra.ai</span>.
              Selected among the{" "}
              <span className="text-[#44AAFF] font-semibold">
                top 200 of 3,000+
              </span>{" "}
              applicants for the KAUST Cybersecurity Program. Ranked{" "}
              <span className="text-[#FFD200] font-semibold">#1</span> in CS
              graduation project.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <XpButton href="mailto:official.muhmmad.ahmad@gmail.com" primary>
              <FiMail size={12} /> Get in touch
            </XpButton>
            <XpButton href="/cv.pdf" download>
              <FiDownload size={12} /> resume.pdf
            </XpButton>
            <XpButton href="https://github.com/M7MDdev1">
              <FiGithub size={12} /> GitHub
            </XpButton>
            <XpButton href="https://linkedin.com/in/mohammed-mohjri">
              <FiLinkedin size={12} /> LinkedIn
            </XpButton>
          </div>

          {/* Stats — XP Properties Panel style */}
          <div className="border border-[#333] rounded-[2px]">
            <div className="px-3 py-1.5 bg-[#1E1E1E] border-b border-[#333]">
              <span className="text-xs font-mono text-[#888]">
                📊 properties — stats
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#333]">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 flex flex-col items-center text-center bg-[#1E1E1E] hover:bg-[#222] transition-colors"
                >
                  <div className="text-2xl font-mono font-bold text-[#44AAFF]">
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals || 0}
                      duration={2}
                      separator=","
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </div>
                  <p className="text-xs font-semibold text-[#C0C0C0] mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[0.6rem] font-mono text-[#555] mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* XP Status bar */}
        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] flex items-center gap-4 font-mono text-[0.6rem] text-[#555]">
          <span>📞 +966 55 674 4016</span>
          <span>|</span>
          <span>📍 Saudi Arabia</span>
          <span>|</span>
          <span>🌐 IELTS 6.5 (B2+) &nbsp;|&nbsp; Arabic Native</span>
        </div>
      </XpWindow>
    </section>
  );
}
