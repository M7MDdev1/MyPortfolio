import { GoArrowRight } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import Carousel from "../Components/Carousel";
import SubTitle from "../Components/SubTitle";

export default function Projects() {
  return (
    <div className="font-Poppins mb-10" id="projects">
      <SubTitle className="mb-8">Projects</SubTitle>

      {/* Featured — Bonian IDE */}
      <div className="relative overflow-hidden p-6 rounded-xl border border-[#FFD200]/30 bg-gradient-to-br from-[#120D00] via-[#0E0E16] to-[#0E0E16] mb-8">
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 text-xs rounded-full bg-[#FFD200]/20 border border-[#FFD200]/40 text-[#FFD200] font-bold">
                  🏆 Ranked #1 — Graduation Project
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Bonian IDE</h3>
            </div>
            <a
              href="https://github.com/M7MDdev1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#A0A0A8] hover:text-white transition-colors"
            >
              View <FiExternalLink size={14} />
            </a>
          </div>

          <p className="text-sm text-[#A0A0A8] leading-relaxed mb-4">
            A multimodal UML-to-code pipeline using Vision-Language Models as architectural
            ground truth, integrated into an AI-enhanced Model-Driven Engineering (MDE) framework.
            Reduces context decay and improves long-term code maintainability over text-only models.
          </p>

          <div className="flex flex-wrap gap-2">
            {["UML", "Vision-Language Models", "Model-Driven Engineering", "AI", "Code Generation"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded border border-[#FFD200]/30 text-[#FFD200]/80 bg-[#FFD200]/5"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Other Projects Carousel */}
      <p className="text-[#555] text-sm font-medium mb-5 tracking-wider uppercase">More projects</p>
      <Carousel />

      <a
        href="https://github.com/M7MDdev1?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="block w-fit px-5 py-2.5 mt-6 bg-[radial-gradient(49.91%_114.11%_at_22.77%_50%,#F0E9FF_0%,#FFF_100%)] border border-[#6D3AFD] text-sm text-black rounded-full mx-auto font-medium hover:opacity-90 transition-opacity"
      >
        View All on GitHub <GoArrowRight className="inline ml-1" />
      </a>
    </div>
  );
}
