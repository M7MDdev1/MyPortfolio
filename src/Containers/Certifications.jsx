import SubTitle from "../Components/SubTitle";

const cyberTopics = [
  "OSINT",
  "Web Security",
  "Cryptanalysis",
  "Vulnerability Assessment",
];

export default function Certifications() {
  return (
    <div className="font-Poppins mb-10" id="certifications">
      <SubTitle className="mb-8">Certifications &amp; Awards</SubTitle>

      <div className="space-y-4">
        {/* KAUST — most prominent */}
        <div className="relative overflow-hidden p-6 rounded-xl border border-[#6D3AFD]/40 bg-gradient-to-br from-[#0E0717] via-[#0E0E16] to-[#0E0E16]">
          <div className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-purple-700/15 blur-3xl rounded-full" />
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="text-3xl select-none">🏆</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">
                    KAUST Cybersecurity Program
                  </h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#6D3AFD]/20 border border-[#6D3AFD]/40 text-[#A084FF] font-medium">
                    National Selection
                  </span>
                </div>
                <p className="text-[#6D3AFD] font-semibold text-sm mb-2">
                  Top 200 selected out of 3,000+ applicants nationwide
                </p>
                <p className="text-sm text-[#A0A0A8] mb-4 leading-relaxed">
                  Rigorous national-level selection by King Abdullah University
                  of Science and Technology. Covered offensive and defensive
                  security disciplines.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cyberTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs rounded-full border border-[#6D3AFD]/40 text-[#A084FF] bg-[#6D3AFD]/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-5 rounded-xl border border-[#252530] bg-[#0E0E16] hover:border-[#6D3AFD]/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="text-3xl select-none">🎓</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-white">
                  BSc Computer Science — Jazan University
                </h3>
                <span className="px-2 py-0.5 text-xs rounded-full bg-[#FFD200]/10 border border-[#FFD200]/30 text-[#FFD200] font-medium">
                  GPA 4.74 / 5.00
                </span>
              </div>
              <p className="text-[#A084FF] text-sm font-medium mb-2">
                2021 – 2026 · Jazan, Saudi Arabia
              </p>
              <p className="text-sm text-[#A0A0A8]">
                Ranked <span className="text-white font-semibold">#1</span> in
                graduation project among the Computer Science Department.
                Relevant coursework: Web Programming, OOP, Software Engineering,
                MySQL, Data Structures.
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="p-5 rounded-xl border border-[#252530] bg-[#0E0E16] hover:border-[#6D3AFD]/30 transition-colors">
          <div className="flex items-start gap-4">
            <div className="text-3xl select-none">🌐</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#6D3AFD]/40 bg-[#6D3AFD]/10">
                  <span className="text-[#A084FF] font-semibold text-sm">
                    English
                  </span>
                  <span className="w-px h-4 bg-[#6D3AFD]/40" />
                  <span className="text-white font-bold text-sm">
                    IELTS 6.5
                  </span>
                  <span className="px-1.5 py-0.5 text-xs rounded bg-[#6D3AFD]/20 text-[#A084FF]">
                    B2+
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#252530] bg-[#0A0A12]">
                  <span className="text-[#888] font-semibold text-sm">
                    Arabic
                  </span>
                  <span className="w-px h-4 bg-[#333]" />
                  <span className="text-white font-bold text-sm">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
