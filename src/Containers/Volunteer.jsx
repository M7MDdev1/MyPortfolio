import SubTitle from "../Components/SubTitle";

const roles = [
  {
    img: "Volanteer/GDSC.jpg",
    company: "Google Developer Student Club (GDSC)",
    title: "Chapter President",
    period: "2024 – 2025",
    location: "Jazan University",
    points: [
      "Led the GDSC chapter at Jazan University, organizing panel discussions, workshops, and LEAP exhibition coverage",
      "Fostered a campus community around software development and career readiness",
    ],
  },
  {
    img: "Experities/Bedar.png",
    company: "Bedar for Youth Development",
    title: "Software Engineer & Volunteer Lead",
    period: "Aug 2024 – Jun 2025",
    location: "Jazan, Saudi Arabia",
    points: [
      "Led volunteer team rebuilding the backend, frontend, and UI/UX of an operations system",
      "Designed and launched a modern landing page using Laravel and React",
      "Organized and contributed to 6+ community tech events through GDG on Campus Jazan University",
    ],
  },
];

export default function Volunteer() {
  return (
    <div className="font-Poppins flex flex-col gap-y-4 mb-14" id="volunteer">
      <SubTitle className="mb-4">Volunteering</SubTitle>

      {roles.map((role, i) => (
        <div
          key={i}
          className="p-5 rounded-xl border border-[#252530] bg-[#0E0E16] hover:border-[#6D3AFD]/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#0A0A12] flex items-center justify-center border border-[#1C1C26]">
              <img
                src={role.img}
                alt={role.company}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-white">{role.title}</h3>
                  <p className="text-sm text-[#A084FF] font-medium">{role.company}</p>
                </div>
                <div className="text-right text-xs text-[#555]">
                  <p>{role.period}</p>
                  <p>{role.location}</p>
                </div>
              </div>
              <ul className="space-y-1">
                {role.points.map((pt, j) => (
                  <li key={j} className="text-sm text-[#A0A0A8] flex gap-2 leading-relaxed">
                    <span className="text-[#6D3AFD] mt-0.5 shrink-0">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
