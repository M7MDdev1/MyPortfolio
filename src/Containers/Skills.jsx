import XpWindow from "../Components/XpWindow";

const skillGroups = [
  {
    label: "Languages",
    icon: "💬",
    skills: [
      { name: "JavaScript", img: "Skills/js.svg" },
      { name: "TypeScript", img: "Skills/ts.svg" },
      { name: "PHP", img: "Skills/php.png" },
      { name: "Python", img: "Skills/Python.png" },
      { name: "Java", img: "Skills/java.webp" },
      { name: "C#", img: null },
    ],
  },
  {
    label: "Frameworks",
    icon: "🧱",
    skills: [
      { name: "React", img: "Skills/react.svg" },
      { name: "Next.js", img: null },
      { name: "Laravel", img: "Skills/laravel.png" },
      { name: "Nest.js", img: "Skills/nest.svg" },
      { name: "Flask", img: null },
      { name: "Inertia.js", img: null },
      { name: "Tailwind", img: "Skills/Tailwind.svg" },
    ],
  },
  {
    label: "Tools & Platforms",
    icon: "🔧",
    skills: [
      { name: "Git", img: "Skills/git.svg" },
      { name: "GitHub", img: "Skills/Github.png" },
      { name: "Firebase", img: "Skills/Firebase.png" },
      { name: "PostgreSQL", img: "Skills/postgresql.svg" },
      { name: "Figma", img: "Skills/Figma.png" },
      { name: "Unix/Bash", img: "Skills/unix.png" },
      { name: "Android Studio", img: null },
      { name: "SMTP", img: null },
    ],
  },
  {
    label: "Architecture",
    icon: "🏗️",
    skills: [
      { name: "Microservices", img: null },
      { name: "REST APIs", img: null },
      { name: "Full-Stack Dev", img: null },
      { name: "Mobile Dev", img: null },
    ],
  },
  {
    label: "Cybersecurity",
    icon: "🔒",
    skills: [
      { name: "OSINT", img: null },
      { name: "Web Security", img: null },
      { name: "Cryptanalysis", img: null },
      { name: "Vulnerability Assessment", img: null },
    ],
  },
];

function SkillBadge({ name, img }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#1E1E1E] border border-[#333] hover:border-[#4488EE]/60 hover:bg-[#1A2030] transition-colors rounded-[2px] cursor-default group">
      {img ? (
        <img src={img} alt={name} className="w-4 h-4 object-contain" />
      ) : (
        <span className="w-4 h-4 flex items-center justify-center text-[0.55rem] font-mono text-[#4488EE] bg-[#152040] rounded-[1px]">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-xs font-mono text-[#A0A0A0] group-hover:text-[#D0D0D0] transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const total = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="skills" className="font-Poppins">
      <XpWindow title="skills.cfg — Technical Skills" icon="⚙️" titleRight={`${total} items`}>
        <div className="divide-y divide-[#2A2A2A]">
          {skillGroups.map((group) => (
            <div key={group.label} className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">{group.icon}</span>
                <span className="text-xs font-mono text-[#4488EE] font-bold">[{group.label}]</span>
                <span className="text-[0.6rem] font-mono text-[#444]">// {group.skills.length} items</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-5">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} img={skill.img} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 py-1 bg-[#1E1E1E] border-t border-[#333] font-mono text-[0.6rem] text-[#555]">
          {skillGroups.length} categories &nbsp;|&nbsp; {total} total skills
        </div>
      </XpWindow>
    </section>
  );
}
