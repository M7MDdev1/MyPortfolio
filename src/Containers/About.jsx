import SubTitle from "../Components/SubTitle";
import ScoreCard from "../Components/Score-card.jsx";

export default function About() {
  return (
    <>
      {/* Mobile */}
      <div className="font-Poppins mb-8 relative md:hidden" id="about">
        <SubTitle>About me</SubTitle>
        <h3 className="text-4xl font-semibold mb-10">
          I am{" "}
          <span className="bg-gradient-to-r from-[#FF4548] to-[#6915D8] bg-clip-text text-transparent">
            Mohammed!
          </span>
        </h3>

        <img src="Image\Me.png" alt="Me" className="w-full mx-auto block" />

        <div className="p-6 mb-10">
          <h3 className="mb-3 font-semibold text-2xl">Introduction</h3>
          <p className="text-[0.875rem] leading-[1.3125rem] tracking-[0.04375rem]">
            Front-End Web Developer proficient in React, TypeScript, and
            Tailwind CSS. Currently expanding skills in PHP and to transition
            into Full-Stack Development. Committed to building scalable and
            efficient web applications.
          </p>
        </div>
        <img
          src="Languages.png"
          alt="Languages"
          className="translate-y-8 absolute"
        />

        <div className="grid grid-cols-2 gap-3 mb-8">
          <ScoreCard number={3} className="col-span-2">
            Years in web development
          </ScoreCard>
          <ScoreCard number={10}>Project</ScoreCard>
          <ScoreCard number={5}>Volunteered</ScoreCard>
        </div>
        <div className="px-6 h-[27.6875rem]">
          <h3 className="text-2xl font-semibold mb-5">My Bio</h3>
          <p>
            I am Mohammed Mahjari, a professional web and app developer with
            over 15 years of experience. My passion for technology started
            early, driving me to craft innovative and efficient digital
            solutions. With a strong background in building user-focused
            websites and applications, I specialize in turning ideas into
            impactful digital products. My attention to detail and commitment to
            excellence ensure every project stands out. For me, development
            isn’t just a career; it’s a way to create solutions that enhance
            lives and empower businesses in the digital world.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block mt-36 font-Poppins">
        <div className="flex gap-x-16 pb-10">
          <img
            src="Image\Me.png"
            alt="Me"
            className="w-[27.02rem]  block row-span-5"
          />

          <div>
            <SubTitle className="block">About me</SubTitle>
            <h3 className="text-4xl md:text-[4.31919rem] font-semibold mb-36 block">
              I am{" "}
              <span className="bg-gradient-to-r from-[#FF4548] to-[#6915D8] bg-clip-text text-transparent">
                Mohammed!
              </span>
            </h3>
            <div className="flex gap-x-3 items-center justify-center">
              <button className="w-[13.65938rem] h-[4.48306rem] rounded-[3.50238rem] border-[1.558px] border-[#6D3AFD] text-[1.49763rem] text-[#161513] font-semibold bg-white">
                Get in touch
              </button>

              <button className="w-[13.65938rem] h-[4.48306rem] rounded-[3.50238rem] border-[1.558px] border-[#6D3AFD] text-[1.49763rem] font-semibold bg-transparent">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 mb-10">
          <h3 className="mb-3 font-semibold text-[2.5475rem] ">Introduction</h3>
          <p className="text-2xl leading-[2.22906rem] tracking-[0.07431rem]">
            Front-End Web Developer proficient in React, TypeScript, and
            Tailwind CSS. Currently expanding skills in PHP and to transition
            into Full-Stack Development. Committed to building scalable and
            efficient web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <ScoreCard number={3} className="col-span-2">
            Years in web development
          </ScoreCard>
          <ScoreCard number={10}>Project</ScoreCard>
          <ScoreCard number={5}>Volunteered</ScoreCard>
        </div>

        <div className="px-6 h-[27.6875rem]">
          <h3 className="text-[2rem] font-semibold mb-5">My Bio</h3>
          <p className="text-xl leading-[1.875rem] tracking-wider text-[#E7DFF8]">
            I am Mohammed Mehjari, a professional web and app developer with
            over 15 years of experience. My passion for technology started
            early, driving me to craft innovative and efficient digital
            solutions. With a strong background in building user-focused
            websites and applications, I specialize in turning ideas into
            impactful digital products. My attention to detail and commitment to
            excellence ensure every project stands out. For me, development
            isn’t just a career; it’s a way to create solutions that enhance
            lives and empower businesses in the digital world.
          </p>
        </div>
      </div>
    </>
  );
}
