import XpWindow from "../Components/XpWindow";

const cyberTopics = [
  "OSINT",
  "Web Security",
  "Cryptanalysis",
  "Vulnerability Assessment",
];

export default function Certifications() {
  return (
    <section id="certifications" className="font-Poppins">
      <XpWindow title="certs.txt — Certifications & Education" icon="🏆">
        <div className="divide-y divide-[#2A2A2A]">
          {/* KAUST — most prominent */}
          <div className="p-4 bg-[#1A1500] hover:bg-[#1E1900] transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-2xl select-none shrink-0">🏆</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-[#FFD200]">
                    KAUST Cybersecurity Program
                  </h3>
                  <span className="px-1.5 py-0.5 text-[0.55rem] font-mono font-black bg-[#FFD200] text-black rounded-[1px]">
                    NATIONAL SELECTION
                  </span>
                </div>
                <p className="text-xs font-mono text-[#4488EE] mb-2">
                  &gt; Top 200 selected out of 3,000+ applicants nationwide
                </p>
                <p className="text-xs text-[#808080] leading-relaxed mb-3">
                  Rigorous national-level selection by King Abdullah University
                  of Science and Technology. Covered offensive and defensive
                  security disciplines.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cyberTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[0.6rem] font-mono border border-[#4A3A00] bg-[#FFD200]/5 text-[#AA9000] rounded-[1px]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-4 hover:bg-[#1E1E1E] transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-2xl select-none shrink-0">🎓</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-[#E8E8E8]">
                    BSc Computer Science — Jazan University
                  </h3>
                  <span className="px-1.5 py-0.5 text-[0.55rem] font-mono font-black bg-[#2060C8] text-white rounded-[1px]">
                    GPA 4.74 / 5.00
                  </span>
                </div>
                <p className="text-xs font-mono text-[#4488EE] mb-2">
                  &gt; 2021 – 2026 · Jazan, Saudi Arabia
                </p>
                <p className="text-xs text-[#808080] leading-relaxed">
                  Ranked{" "}
                  <span className="text-[#FFD200] font-bold font-mono">#1</span>{" "}
                  in graduation project among the Computer Science Department.
                  Coursework: Web Programming, OOP, Software Engineering, MySQL,
                  Data Structures.
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="p-4 hover:bg-[#1E1E1E] transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-2xl select-none shrink-0">🌐</div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#E8E8E8] mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 border border-[#2060C8]/50 bg-[#101830] rounded-[2px]">
                    <span className="text-xs font-mono text-[#888]">
                      English
                    </span>
                    <span className="w-px h-4 bg-[#333]" />
                    <span className="text-sm font-mono font-bold text-[#44AAFF]">
                      IELTS 6.5
                    </span>
                    <span className="px-1.5 py-0.5 text-[0.55rem] font-mono bg-[#2060C8] text-white rounded-[1px]">
                      B2+
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 border border-[#333] bg-[#1E1E1E] rounded-[2px]">
                    <span className="text-xs font-mono text-[#888]">
                      Arabic
                    </span>
                    <span className="w-px h-4 bg-[#333]" />
                    <span className="text-sm font-mono font-bold text-[#E8E8E8]">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] font-mono text-[0.6rem] text-[#555]">
          3 entries &nbsp;|&nbsp; last updated 2026
        </div>
      </XpWindow>
    </section>
  );
}
