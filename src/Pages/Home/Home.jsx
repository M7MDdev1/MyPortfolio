import About from "./Container/About";
import Head from "./Container/Head";
import Portfolio from "./Container/Portfolio";
import Skills from "./Container/Skills";

export default function Home() {
  return (
    <div>
      <Head/>
      <Skills/>
      <About/>
      <Portfolio/>
    </div>
  );
}
