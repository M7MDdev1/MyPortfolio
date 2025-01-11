import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
export default function App() {
  return (
    <div
      className=" h-screen bg-gradient-to-b from-[#5D30BE0E] to-[#3C3C3C23]"
      style={{
        background:
          " var(--Back, linear-gradient(180deg, rgba(93, 48, 190, 0.06) 0%, rgba(60, 60, 60, 0.14) 100%), #161616)",
      }}
    >
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}
