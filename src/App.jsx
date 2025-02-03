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
        className="bg-[linear-gradient(0deg,var(--1,rgba(22,21,19,0.78))0%,var(--1,rgba(22,21,19,0.78))100%),conic-gradient(from_168deg_at_50%_33.01%,rgba(93,48,190,0.43)125.99999785423279deg,rgba(31,19,165,0.48)309.6000051498413deg)] text-white font-bold min-h-screen justify-center items-center flex-col hidden sm:flex"
      >
        <h1 className="sm:text-8xl text-5xl mb-12">
          تحت الانشاء ! <span className="sm:text-9xl text-6xl">🚧</span>
        </h1>
        <p className=" inline-block bg-gradient-to-r from-white to-[#8C90FF] bg-clip-text text-transparent text-8xl leading-relaxed text-center">
          افتح الموقع من الجوال
          <br/>
           لتجربة افضل!
           
        </p>


        <a href="https://linktr.ee/m7md_dev" className="px-6 py-3 bg-green-600 rounded-2xl text-4xl mt-12">LinkTree</a>
      </div>
      <div
        className={
          "font-shantell min-h-screen text-[#E4E4E6] sm:hidden block bg-[#121212] pt-6"
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
