import CountUp from "react-countup";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

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

export default function About() {
  return (
    <section id="about" className="font-Poppins py-10 relative">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-[100px]" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#6D3AFD] to-[#FF4548] bg-clip-text text-transparent">
            Mohammed Mahjari
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-[#A0A0A8] mb-6">
          Full-Stack Engineer &amp; Co-Founder
        </h2>

        <p className="text-[#A0A0A8] text-sm leading-relaxed max-w-2xl mb-8">
          Co-founded <span className="text-white font-medium">Sehrah</span>, a
          commercial platform reaching{" "}
          <span className="text-white font-semibold">12,000+ employers</span>{" "}
          across Saudi Arabia. Shipped production systems at{" "}
          <span className="text-white font-medium">KACST</span> and{" "}
          <span className="text-white font-medium">Ebra.ai</span>. Selected
          among the{" "}
          <span className="text-white font-semibold">top 200 of 3,000+</span>{" "}
          applicants for the KAUST Cybersecurity Program. Ranked{" "}
          <span className="text-white font-semibold">#1</span> in CS graduation
          project at Jazan University.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="mailto:official.muhmmad.ahmad@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#6D3AFD] hover:bg-[#5A2EE0] text-white rounded-full text-sm font-medium transition-colors"
          >
            <FiMail size={15} /> Get in touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 border border-[#6D3AFD] text-[#A084FF] hover:bg-[#6D3AFD]/10 rounded-full text-sm font-medium transition-colors"
          >
            <FiDownload size={15} /> Download CV
          </a>
          <a
            href="https://github.com/M7MDdev1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333] text-[#E4E4E6] hover:border-[#555] rounded-full text-sm font-medium transition-colors"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mohammed-mohjri"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#333] text-[#E4E4E6] hover:border-[#555] rounded-full text-sm font-medium transition-colors"
          >
            <FiLinkedin size={15} /> LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-[#252530] bg-[#0E0E16] flex flex-col items-center text-center hover:border-[#6D3AFD]/40 transition-colors"
            >
              <div className="text-2xl font-bold text-white">
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
              <p className="text-xs font-semibold text-[#E4E4E6] mt-1">
                {stat.label}
              </p>
              <p className="text-[0.65rem] text-[#555] mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
