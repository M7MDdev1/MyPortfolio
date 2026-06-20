import SubTitle from "../Components/SubTitle";

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
      "Architected microservices system with dedicated SMTP mail-sending service and separate dashboard service",
      "Built client management dashboard ingesting leads from Google Forms with one-click campaign triggering",
      "Engineered automated email pipeline reaching 12,000+ employers across Saudi Arabia",
    ],
    badge: "Co-Founder",
    badgeColor: "from-[#6D3AFD] to-[#A855F7]",
    dotColor: "bg-[#6D3AFD]",
  },
  {
    company: "Ebra.ai",
    companyUrl: "https://drive.google.com/file/d/1kLDQiSK5mVVJ14284zqw9NFVpJ8r6SD2/view",
    role: "Software Engineer",
    type: "Internship",
    period: "Jan 2026 – Apr 2026",
    location: "Remote",
    stack: ["Microservices", "Laravel", "Fintech"],
    points: [
      "Production-grade exposure to microservices on a large-scale debt collection platform (Zain, SDB, ACIG)",
      "Resolved critical bugs across distributed services, improving stability for high-value financial clients",
      "Implemented secure coding practices to safeguard sensitive financial data",
    ],
    badge: "Internship",
    badgeColor: "from-[#FF4548] to-[#FF8C00]",
    dotColor: "bg-[#FF4548]",
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
      "Owned full-stack development of a health-tech platform with web and cross-platform mobile app",
      "Integrated AI models from the KACST research team into production-ready products",
      "Contributed to R&D evaluating and prototyping emerging technologies",
    ],
    badge: "Internship",
    badgeColor: "from-[#00C9FF] to-[#00E5A0]",
    dotColor: "bg-[#00C9FF]",
  },
  {
    company: "Tuwaiq Academy",
    companyUrl: null,
    role: "Instructor",
    type: "Contract",
    period: "Aug 2025",
    location: "Al Qasim, Saudi Arabia",
    stack: ["Python", "Teaching", "Curriculum Design"],
    points: [
      "Instructed 2 batches of students at Qassim University in the 'Safik Thaki' program",
      "Designed lesson plans emphasizing Python fundamentals, problem-solving, and creativity",
    ],
    badge: "Contract",
    badgeColor: "from-[#F7971E] to-[#FFD200]",
    dotColor: "bg-[#F7971E]",
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
      "Strengthened team collaboration through structured Git/GitHub workflows in an agile environment",
    ],
    badge: "Internship",
    badgeColor: "from-[#667EEA] to-[#764BA2]",
    dotColor: "bg-[#667EEA]",
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
      "Developed a user-friendly website providing comprehensive access to all company services",
    ],
    badge: "Part-time",
    badgeColor: "from-[#F093FB] to-[#F5576C]",
    dotColor: "bg-[#F093FB]",
  },
];

export default function Experties() {
  return (
    <div className="font-Poppins mb-10" id="experties">
      <SubTitle className="mb-8">Experience</SubTitle>

      <div className="relative">
        <div className="absolute left-[0.4rem] top-2 bottom-2 w-px bg-gradient-to-b from-[#6D3AFD] via-[#6D3AFD]/30 to-transparent" />

        <div className="flex flex-col gap-6 pl-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <div
                className={`absolute -left-[1.65rem] top-5 w-3 h-3 rounded-full ${exp.dotColor} ring-2 ring-[#121212] group-hover:scale-125 transition-transform`}
              />

              <div className="p-5 rounded-xl border border-[#252530] bg-[#0E0E16] hover:border-[#6D3AFD]/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full bg-gradient-to-r ${exp.badgeColor} text-white font-medium`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#A084FF]">
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
                  <div className="text-right text-xs text-[#555]">
                    <p className="mb-0.5">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-[#A0A0A8] flex gap-2 leading-relaxed">
                      <span className="text-[#6D3AFD] mt-0.5 shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech, k) => (
                    <span
                      key={k}
                      className="px-2 py-0.5 text-xs rounded border border-[#252530] text-[#777] bg-[#0A0A12]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
