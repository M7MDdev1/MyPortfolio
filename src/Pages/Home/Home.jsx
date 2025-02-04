import About from "./Container/About";
import Experties from "./Container/Experties";
import Projects from "./Container/Projects";
import Skills from "./Container/Skills";
import Volunteer from "./Container/Volunteer";

export default function Home() {
  return (
    <div className="px-4">
      <About/>
      <Skills/>
      <Experties/>
      <Projects/>
      <Volunteer/>
    </div>
  );
}
