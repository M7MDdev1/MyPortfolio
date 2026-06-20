import XpWindow from "../Components/XpWindow";

const roles = [
  {
    img: "Volanteer/GDSC.jpg",
    company: "Google Developer Student Club (GDSC)",
    title: "Chapter President",
    period: "2024 – 2025",
    location: "Jazan University",
    points: [
      "Led GDSC chapter at Jazan University — panel discussions, workshops, LEAP exhibition",
      "Fostered a campus community around software development and career readiness",
    ],
    badge: "PRESIDENT",
    badgeColor: "bg-[#2060C8] text-white",
  },
  {
    img: "Experities/Bedar.png",
    company: "Bedar for Youth Development",
    title: "Software Engineer & Volunteer Lead",
    period: "Aug 2024 – Jun 2025",
    location: "Jazan, Saudi Arabia",
    points: [
      "Led volunteer team rebuilding the backend, frontend, and UI/UX using Laravel and React",
      "Designed and launched a modern landing page for the association",
      "Organized 6+ community tech events through GDG on Campus Jazan University",
    ],
    badge: "LEAD",
    badgeColor: "bg-[#1A8A3A] text-white",
  },
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="font-Poppins">
      <XpWindow title="volunteer/ — Community Work" icon="🤝" titleRight={`${roles.length} roles`}>
        <div className="divide-y divide-[#2A2A2A]">
          {roles.map((role, i) => (
            <div key={i} className="p-4 hover:bg-[#1E1E1E] transition-colors group">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-16 h-16 shrink-0 bg-[#1A1A1A] border border-[#333] rounded-[2px] overflow-hidden flex items-center justify-center">
                  <img
                    src={role.img}
                    alt={role.company}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-[#E8E8E8]">{role.title}</h3>
                        <span
                          className={`px-1.5 py-0.5 text-[0.55rem] font-mono font-bold ${role.badgeColor} rounded-[1px]`}
                        >
                          {role.badge}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#4488EE] mt-0.5">{role.company}</p>
                    </div>
                    <div className="text-right font-mono text-[0.65rem] text-[#555]">
                      <p>{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {role.points.map((pt, j) => (
                      <li key={j} className="text-xs text-[#909090] flex gap-2 leading-relaxed">
                        <span className="text-[#4488EE] shrink-0 font-mono">&gt;</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] font-mono text-[0.6rem] text-[#555]">
          {roles.length} entries &nbsp;|&nbsp; 6+ community events organized
        </div>
      </XpWindow>
    </section>
  );
}
