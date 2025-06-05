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
    <>
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

      <div
        dir="rtl"
        className="bg-loading-gradient text-white font-bold min-h-screen justify-center items-center flex-col hidden sm:flex"
      >
        <h1 className="sm:text-8xl text-5xl mb-12">
          تحت الانشاء ! <span className="sm:text-9xl text-6xl">🚧</span>
        </h1>
        <p className=" inline-block bg-gradient-to-r from-white to-[#8C90FF] bg-clip-text text-transparent text-8xl leading-relaxed text-center">
          افتح الموقع من الجوال
          <br />
          لتجربة افضل!
        </p>

        <a
          href="https://linktr.ee/m7md_dev"
          className="px-6 py-3 bg-green-600 rounded-2xl text-4xl mt-12"
        >
          LinkTree
        </a>
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
        <div className="px-4">
          <About />
          <Skills />
          <Experties />
          <Projects />
          <Volunteer />
        </div>
        <Footer />
      </div>
    </>
  );
}
