import { FiExternalLink } from "react-icons/fi";
import XpWindow from "../Components/XpWindow";
import Carousel from "../Components/Carousel";

const projects = [
  {
    name: "Bonian IDE",
    desc: "Multimodal UML-to-code pipeline using Vision-Language Models as architectural ground truth, integrated into an AI-enhanced MDE framework. Reduces context decay over text-only models.",
    tags: ["UML", "Vision-Language Models", "MDE", "AI", "Code Generation"],
    link: "https://github.com/M7MDdev1",
    badge: "🏆 RANKED #1 — GRADUATION PROJECT",
    badgeColor: "bg-[#FFD200] text-black",
    featured: true,
  },
  {
    name: "Orchestrator",
    desc: "Backend service managing outbound AI-driven phone calls — job queue with PostgreSQL, worker pool concurrency control, exponential backoff retries, and provider abstraction layer.",
    tags: ["TypeScript", "Express.js", "PostgreSQL", "Jest", "Microservices"],
    link: "https://github.com/M7MDdev1/orchestrator",
    badge: "PRODUCTION",
    badgeColor: "bg-[#2060C8] text-white",
    featured: false,
  },
  {
    name: "Anemia Detection",
    desc: "Machine learning health app for automated anemia detection using SVM classifier trained on medical data, deployed via Streamlit for real-time diagnostic assistance.",
    tags: ["Python", "Scikit-learn", "SVM", "Streamlit", "Healthcare AI"],
    link: "https://github.com/M7MDdev1/Anemia-detection",
    badge: "AI / ML",
    badgeColor: "bg-[#1A8A3A] text-white",
    featured: false,
  },
  {
    name: "Bedar Platform",
    desc: "Full rebuild of backend, frontend, and UI/UX for a local youth association's operations system. Built with TypeScript + PHP (Laravel) from scratch as volunteer lead.",
    tags: ["TypeScript", "Laravel", "PHP", "React", "UI/UX"],
    link: "https://github.com/M7MDdev1/Bedar",
    badge: "VOLUNTEER",
    badgeColor: "bg-[#4A4A4A] text-[#C0C0C0]",
    featured: false,
  },

];

export default function Projects() {
  return (
    <section id="projects" className="font-Poppins">
      <XpWindow title="projects/ — Portfolio" icon="📁" titleRight={`${projects.length} items`}>
        <div className="p-4 space-y-3">
          {/* Featured */}
          {projects.filter((p) => p.featured).map((p) => (
            <div
              key={p.name}
              className="border border-[#4A3A00] bg-[#1A1500] rounded-[2px] overflow-hidden"
            >
              <div className="px-3 py-1 bg-[#FFD200]/10 border-b border-[#4A3A00] flex items-center justify-between">
                <span className={`text-[0.6rem] font-mono font-black px-1.5 py-0.5 ${p.badgeColor} rounded-[1px]`}>
                  {p.badge}
                </span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.6rem] font-mono text-[#888] hover:text-[#FFD200] transition-colors flex items-center gap-1"
                >
                  view <FiExternalLink size={9} />
                </a>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[#FFD200] mb-2">{p.name}</h3>
                <p className="text-xs text-[#909090] leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[0.6rem] font-mono border border-[#4A3A00] bg-[#FFD200]/5 text-[#AA9000] rounded-[1px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {projects.filter((p) => !p.featured).map((p) => (
              <div
                key={p.name}
                className="border border-[#333] bg-[#1E1E1E] rounded-[2px] hover:border-[#4488EE]/50 transition-colors group"
              >
                <div className="px-3 py-1 bg-[#1A1A1A] border-b border-[#333] flex items-center justify-between">
                  <span className={`text-[0.55rem] font-mono font-bold px-1 py-0.5 ${p.badgeColor} rounded-[1px]`}>
                    {p.badge}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.6rem] font-mono text-[#555] hover:text-[#4488EE] transition-colors flex items-center gap-1"
                  >
                    view ↗
                  </a>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-[#D0D0D0] group-hover:text-[#4488EE] transition-colors mb-1.5">
                    {p.name}
                  </h3>
                  <p className="text-[0.7rem] text-[#777] leading-relaxed mb-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[0.55rem] font-mono border border-[#2A2A2A] text-[#555] rounded-[1px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel for visual projects */}
          <div className="border border-[#333] rounded-[2px] overflow-hidden">
            <div className="px-3 py-1 bg-[#1A1A1A] border-b border-[#333]">
              <span className="text-[0.6rem] font-mono text-[#555]">📸 screenshots/</span>
            </div>
            <Carousel />
          </div>

          <div className="flex justify-center pt-1">
            <a
              href="https://github.com/M7MDdev1?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-xs font-mono bg-gradient-to-b from-[#3A3A3A] to-[#252525] text-[#C0C0C0] border-t border-l border-t-[#666] border-l-[#666] border-b border-r border-b-[#111] border-r-[#111] hover:from-[#4A4A4A] transition-colors rounded-[2px]"
            >
              📂 View all repositories on GitHub
            </a>
          </div>
        </div>

        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] font-mono text-[0.6rem] text-[#555]">
          {projects.length} projects &nbsp;|&nbsp; github.com/M7MDdev1
        </div>
      </XpWindow>
    </section>
  );
}
