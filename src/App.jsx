import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import Footer from "./Containers/Footer";
import About from "./Containers/About";
import Skills from "./Containers/Skills";
import Experties from "./Containers/Experties";
import Projects from "./Containers/Projects";
import Volunteer from "./Containers/Volunteer";
export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false); // Correct state declaration

  return (
    <div
      className={
        "font-shantell min-h-screen text-[#E4E4E6] bg-[#121212] pt-6 md:navbar-gradient"
      }
    >
      <NavBar
        visibility={navMenuVisibility}
        setVisibility={setNavMenuVisibility}
      />
      <NavMenu
        visibility={navMenuVisibility}
        setNavMenuVisibility={setNavMenuVisibility}
      />
      <div className={`px-4 md:mx-80`}>
        <About />
        <Skills />
        <Experties />
        <Projects />
        <Volunteer />
      </div>
      <Footer />
    </div>
  );
}
