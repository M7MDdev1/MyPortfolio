import { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import About from "./Containers/About";
import Experties from "./Containers/Experties";
import Projects from "./Containers/Projects";
import Skills from "./Containers/Skills";
import Certifications from "./Containers/Certifications";
import Volunteer from "./Containers/Volunteer";
import Footer from "./Containers/Footer";

export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false);

  return (
    <div className="font-Poppins min-h-screen text-[#D0D0D0] bg-[#1A1A1A]">
      <Helmet>
        <title>Mohammed Mahjari – Full-Stack Engineer & Co-Founder</title>
        <meta
          name="description"
          content="Mohammed Mahjari — Full-Stack Engineer & Co-Founder. Built Sehrah reaching 12,000+ employers. Shipped at KACST and Ebra.ai. Top 200 of 3,000+ KAUST Cybersecurity. Ranked #1 graduation project."
        />
        <meta
          name="keywords"
          content="Mohammed Mahjari, محمد مهجري, Full-Stack Engineer, Co-Founder, React, Next.js, Laravel, Flask, Saudi Arabia, Portfolio, Sehrah, KACST"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mohammed Mahjari" />
        <meta property="og:title" content="Mohammed Mahjari – Full-Stack Engineer & Co-Founder" />
        <meta
          property="og:description"
          content="Co-founded Sehrah (12,000+ employers). Shipped at KACST & Ebra.ai. Top 200/3,000+ KAUST Cybersecurity. #1 graduation project."
        />
        <meta property="og:image" content="https://m7md.co/Image/logo.jpg" />
        <meta property="og:url" content="https://m7md.co" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Mahjari – Full-Stack Engineer" />
        <meta
          name="twitter:description"
          content="Co-founded Sehrah. Shipped at KACST & Ebra.ai. Top 200/3,000+ KAUST Cybersecurity."
        />
      </Helmet>

      <NavBar visibility={navMenuVisibility} setVisibility={setNavMenuVisibility} />
      <NavMenu visibility={navMenuVisibility} setNavMenuVisibility={setNavMenuVisibility} />

      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 pb-0">
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
