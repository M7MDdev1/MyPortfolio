import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import Footer from "./Containers/Footer";

import "./Style.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/home";
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
        id="main"
        className={"font-shantell min-h-screen text-[#E4E4E6] sm:hidden block"}
        style={{
          backgroundImage:
            "var(--, linear-gradient(0deg, rgba(22, 21, 19, 0.78) 0%, rgba(22, 21, 19, 0.78) 100%), conic-gradient(from 168deg at 50% 33.01%, rgba(93, 48, 190, 0.43) 126deg, rgba(31, 19, 165, 0.48) 310deg))",
          height: "100vh", // Example height
          width: "100%", // Example width
          backgroundSize: "cover", // Optional for full coverage
        }}
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
        </Routes>

        <Footer />
      </div>
    </>
  );
}
