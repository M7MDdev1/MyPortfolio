import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import Footer from "./Containers/Footer";

import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false); // Correct state declaration

  return (
    <>
      <div
        dir="rtl"
        className="bg-slate-600 text-white font-bold h-screen justify-center items-center flex-col hidden sm:flex"
      >
        <h1 className="sm:text-8xl text-5xl">
          تحت الانشاء ! <span className="sm:text-9xl text-6xl">🚧</span>
        </h1>
        <img src="/Img.webp" alt="" />
      </div>

      <div
        className={
          "font-shantell min-h-screen text-[#E4E4E6] bg-HomeColor sm:hidden block"
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
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
