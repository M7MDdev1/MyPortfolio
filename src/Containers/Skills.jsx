import SubTitle from "../Components/SubTitle";
import Skill from "../Components/Skill";

const iconSkills = [
  { name: "JavaScript", img: "Skills/js.svg" },
  { name: "TypeScript", img: "Skills/ts.svg" },
  { name: "PHP", img: "Skills/php.png" },
  { name: "Python", img: "Skills/Python.png" },
  { name: "Java", img: "Skills/java.webp" },
  { name: "React", img: "Skills/react.svg" },
  { name: "Laravel", img: "Skills/laravel.png" },
  { name: "Nest.js", img: "Skills/nest.svg" },
  { name: "Tailwind", img: "Skills/Tailwind.svg" },
  { name: "Git", img: "Skills/git.svg" },
  { name: "GitHub", img: "Skills/Github.png" },
  { name: "Firebase", img: "Skills/Firebase.png" },
  { name: "PostgreSQL", img: "Skills/postgresql.svg" },
  { name: "Figma", img: "Skills/Figma.png" },
  { name: "Unix", img: "Skills/unix.png" },
];

const textSkills = [
  { label: "Next.js", category: "Framework" },
  { label: "Flask", category: "Framework" },
  { label: "Inertia.js", category: "Framework" },
  { label: "Microservices", category: "Architecture" },
  { label: "REST APIs", category: "Architecture" },
  { label: "SMTP", category: "Protocol" },
  { label: "Android Studio", category: "Tool" },
  { label: "Bash", category: "Tool" },
  { label: "OSINT", category: "Security" },
  { label: "Web Security", category: "Security" },
  { label: "Cryptanalysis", category: "Security" },
  { label: "C#", category: "Language" },
];

export default function Skills() {
  return (
    <div className="font-Poppins relative mb-10" id="skills">
      <SubTitle className="mb-8">Skills</SubTitle>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-8">
        {iconSkills.map((skill) => (
          <Skill key={skill.name} name={skill.name} img={skill.img} />
        ))}
      </div>

      <div className="border-t border-[#1C1C26] pt-6">
        <p className="text-xs text-[#555] uppercase tracking-widest mb-4">Also proficient in</p>
        <div className="flex flex-wrap gap-2">
          {textSkills.map(({ label, category }) => (
            <span
              key={label}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#252530] bg-[#0E0E16] text-sm text-[#A0A0A8] hover:border-[#6D3AFD]/50 hover:text-white transition-colors cursor-default"
            >
              {label}
              <span className="text-[0.6rem] text-[#555] group-hover:text-[#6D3AFD]/70 transition-colors">
                {category}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
