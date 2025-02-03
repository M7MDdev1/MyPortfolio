import Skill from "../Components/Skill";

export default function Skills() {
  return (
    <div className="font-Poppins mx-4 relative">
      <img src="Languages.png" alt="Languages" className="-translate-y-32 absolute" />
      <div className="flex gap-x-3 my-8 items-center justify-center">
        <button className="w-[8.768rem] h-[2.87769rem] rounded-[2.24819rem] border border-[#6D3AFD] text-[#161513] font-semibold bg-white">Get in touch</button>
        <button className="w-[8.768rem] h-[2.87769rem] rounded-[2.24819rem] border border-[#6D3AFD]  font-semibold bg-transparent">Download CV</button>
      </div>

      <h4 className="text-2xl font-semibold p-6 mb-3">Skills</h4>
    <div className="grid grid-cols-3 gap-y-4 py-3 px-6 items-center mb-7">
      <Skill name={"JavaScript"} img={"Skills/js.svg"} />
      <Skill name={"TypeScript"} img={"Skills/ts.svg"} />
      <Skill name={"React"} img={"Skills/react.svg"} />
      <Skill name={"Figma"} img={"Skills/Figma.png"} />
      <Skill name={"Firebase"} img={"Skills/Firebase.png"} />
      <Skill name={"Git"} img={"Skills/git.svg"} />
      <Skill name={"Github"} img={"Skills/Github.png"} />
      <Skill name={"Java"} img={"Skills/java.webp"} />
      <Skill name={"Laravel"} img={"Skills/laravel.png"} />
      <Skill name={"Nest.js"} img={"Skills/nest.svg"} />
      <Skill name={"PHP"} img={"Skills/php.png"} />
      <Skill name={"PostgreSQL"} img={"Skills/postgresql.svg"} />
      <Skill name={"Python"} img={"Skills/Python.png"} />
      <Skill name={"React"} img={"Skills/react.svg"} />
      <Skill name={"Tailwind"} img={"Skills/Tailwind.svg"} />
      <Skill name={"Unix"} img={"Skills/unix.png"} />
    </div>
    </div>
  );
}
