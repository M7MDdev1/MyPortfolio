import SubTitle from "../Components/SubTitle";
import Skill from "../Components/Skill";
import Infos from "../Components/Infos";

export default function Skills() {
  return (
    <div className="font-Poppins relative mb-8" id="skills">
      <Infos />

      <SubTitle>Skills</SubTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-3 px-6 items-center mb-7">
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
