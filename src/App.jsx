import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import Home from "./Containers/Home";
import Footer from "./Containers/Footer";

import "./Style.css";
export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false); // Correct state declaration

  return (
    <div id="main" className={"font-shantell min-h-screen text-[#E4E4E6]"}
    style={{
      backgroundImage:
        "var(--, linear-gradient(0deg, rgba(22, 21, 19, 0.78) 0%, rgba(22, 21, 19, 0.78) 100%), conic-gradient(from 168deg at 50% 33.01%, rgba(93, 48, 190, 0.43) 126deg, rgba(31, 19, 165, 0.48) 310deg))",
      height: "100vh", // Example height
      width: "100%",  // Example width
      backgroundSize: "cover", // Optional for full coverage
    }}

    >
      <NavBar visibility={navMenuVisibility} setVisibility={setNavMenuVisibility} />
      <NavMenu visibility={navMenuVisibility} setNavMenuVisibility={setNavMenuVisibility} />
      <Home />
      <Footer/>
    </div>
  );
}
