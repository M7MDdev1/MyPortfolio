import { useState } from "react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import Footer from "./Containers/Footer";
import About from "./Containers/About";
import Skills from "./Containers/Skills";
import Experties from "./Containers/Experties";
import Projects from "./Containers/Projects";
import Volunteer from "./Containers/Volunteer";
import { Helmet } from "react-helmet";

export default function App() {
  const [navMenuVisibility, setNavMenuVisibility] = useState(false); // Correct state declaration

  return (
<div className="font-shantell min-h-screen text-[#E4E4E6] bg-[#121212] pt-6 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40">

      <Helmet>
        <title>Mohammed Mahjari – Full-Stack Web Developer</title>

        <meta
          name="description"
          content="I’m Mohammed Mahjari, a Saudi Full-Stack Web Developer specializing in React and Laravel. I build fast, modern, and user-friendly web applications."
        />

        <meta
          name="keywords"
          content="محمد مهجري, مبرمج, مطور, React, Laravel, TypeScript, TailwindCSS, سيرة ذاتية, CV, Saudi Arabia, مطور سعودي, مواقع, مشاريع برمجية"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mohammed Mahjari" />

        {/* Open Graph - for social media */}
        <meta property="og:title" content="Mohammed Mahjari – Web Developer" />
        <meta
          property="og:description"
          content="I build scalable, modern web apps using React and Laravel. Contact me through my portfolio or LinkedIn."
        />
        <meta property="og:image" content="https://m7md.co/Image/logo.jpg" />
        <meta property="og:url" content="https://m7md.co" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Mahjari – Web Developer" />
        <meta
          name="twitter:description"
          content="I build scalable, modern web apps using React and Laravel. Contact me through my portfolio or LinkedIn."
        />
      </Helmet>

      <NavBar
        visibility={navMenuVisibility}
        setVisibility={setNavMenuVisibility}
      />
      <NavMenu
        visibility={navMenuVisibility}
        setNavMenuVisibility={setNavMenuVisibility}
      />
      <div className="px-4">
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
