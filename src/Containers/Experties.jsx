import XpWindow from "../Components/XpWindow";

const experiences = [
  {
    company: "Sehrah",
    companyUrl: "https://serah.store",
    role: "Co-Founder & Software Engineer",
    type: "Full-time",
    period: "Mar 2026 – Present",
    location: "Saudi Arabia",
    stack: ["Microservices", "SMTP", "Next.js", "Google Forms API"],
    points: [
      "Architected microservices system with dedicated SMTP mail-sending and dashboard services",
      "Built client dashboard ingesting Google Forms leads with one-click campaign triggering",
      "Engineered automated pipeline reaching 12,000+ employers across Saudi Arabia",
    ],
    badge: "CO-FOUNDER",
    badgeColor: "bg-[#FFD200] text-black",
    icon: "🏢",
  },
  {
    company: "Ebra.ai",
    companyUrl: "https://drive.google.com/file/d/1kLDQiSK5mVVJ14284zqw9NFVpJ8r6SD2/view",
    role: "Software Engineer",
    type: "Internship",
    period: "Jan 2026 – Apr 2026",
    location: "Remote",
    stack: ["Microservices", "Laravel", "Fintech", "Enterprise"],
    points: [
      "Production-grade exposure to microservices on large-scale debt collection (Zain, SDB, ACIG)",
      "Resolved critical bugs across distributed services for high-value financial clients",
      "Implemented secure coding practices to safeguard sensitive financial data",
    ],
    badge: "INTERNSHIP",
    badgeColor: "bg-[#2060C8] text-white",
    icon: "🤖",
  },
  {
    company: "King Abdulaziz City for Science and Technology (KACST)",
    companyUrl: "https://drive.google.com/file/d/11nhZ4IlFd_xPXfLy5T-NxemcF6wppDgC/view",
    role: "Software Engineer",
    type: "Internship",
    period: "Jun 2025 – Aug 2025",
    location: "Saudi Arabia",
    stack: ["Laravel", "React", "Inertia.js", "Flask", "AI Integration"],
    points: [
      "Full-stack health-tech platform: web app + cross-platform mobile (Laravel, React, Flask)",
      "Integrated KACST AI research models into production-ready products",
      "Contributed to R&D evaluating and prototyping emerging technologies",
    ],
    badge: "INTERNSHIP",
    badgeColor: "bg-[#2060C8] text-white",
    icon: "🔬",
  },
  {
    company: "Tuwaiq Academy",
    companyUrl: null,
    role: "Instructor — Python Programming",
    type: "Contract",
    period: "Aug 2025",
    location: "Al Qasim, Saudi Arabia",
    stack: ["Python", "Teaching", "Curriculum Design"],
    points: [
      "Instructed 2 batches of students at Qassim University in the 'Safik Thaki' program",
      "Designed lesson plans emphasizing problem-solving, creativity, and Python fundamentals",
    ],
    badge: "CONTRACT",
    badgeColor: "bg-[#4A4A4A] text-[#C0C0C0]",
    icon: "🎓",
  },
  {
    company: "The Garage",
    companyUrl: "https://drive.google.com/file/d/15y2eeOO8qvOEawHidHFDownuc0Kph1RG/view",
    role: "Front-End Developer",
    type: "Internship",
    period: "Jun 2024 – Jul 2024",
    location: "Riyadh, Saudi Arabia",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    points: [
      "Developed responsive UI components for 2 client projects",
      "Integrated REST APIs following the full product lifecycle from BA sessions to delivery",
      "Strengthened team collaboration through Git/GitHub workflows in an agile environment",
    ],
    badge: "INTERNSHIP",
    badgeColor: "bg-[#2060C8] text-white",
    icon: "🖥️",
  },
  {
    company: "Saeed Al-Namaa General Services",
    companyUrl: null,
    role: "Data Entry Supervisor",
    type: "Part-time",
    period: "Feb 2023 – Dec 2023",
    location: "Jazan, Saudi Arabia",
    stack: ["Web Development", "Team Management"],
    points: [
      "Onboarded and trained 3 new employees across all assigned responsibilities",
      "Developed a user-friendly website providing comprehensive access to company services",
    ],
    badge: "PART-TIME",
    badgeColor: "bg-[#4A4A4A] text-[#C0C0C0]",
    icon: "📊",
  },
];

export default function Experties() {
  return (
    <section id="experties" className="font-Poppins">
      <XpWindow title="experience.log — Work History" icon="📋" titleRight={`${experiences.length} entries`}>
        <div className="divide-y divide-[#333]">
          {experiences.map((exp, i) => (
            <div key={i} className="p-4 hover:bg-[#1E1E1E] transition-colors group">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-lg">{exp.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#E8E8E8]">{exp.role}</h3>
                      <span
                        className={`px-1.5 py-0.5 text-[0.6rem] font-mono font-bold rounded-[1px] ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#4488EE] mt-0.5">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-right font-mono text-[0.65rem] text-[#555]">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-1 mb-3 pl-7">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-xs text-[#909090] flex gap-2 leading-relaxed">
                    <span className="text-[#4488EE] shrink-0 font-mono">&gt;</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pl-7">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[0.6rem] font-mono rounded-[1px] border border-[#333] bg-[#1E1E1E] text-[#666] group-hover:border-[#444] group-hover:text-[#888] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] font-mono text-[0.6rem] text-[#555]">
          {experiences.length} records &nbsp;|&nbsp; sorted by date descending
        </div>
      </XpWindow>
    </section>
  );
}
