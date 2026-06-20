import NavWrapper from "../src/Components/NavWrapper";
import About from "../src/Containers/About";
import Experties from "../src/Containers/Experties";
import Projects from "../src/Containers/Projects";
import Skills from "../src/Containers/Skills";
import Certifications from "../src/Containers/Certifications";
import Volunteer from "../src/Containers/Volunteer";
import Footer from "../src/Containers/Footer";

export default function Home() {
  return (
    <div className="font-Poppins min-h-screen text-[#D0D0D0] bg-[#1A1A1A]">
      <NavWrapper />

      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40">
        <div className="flex flex-col gap-6 py-6">
          <About />
          <Experties />
          <Projects />
          <Skills />
          <Certifications />
          <Volunteer />
        </div>
      </div>

      <Footer />
    </div>
  );
}
