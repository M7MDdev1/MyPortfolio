import SocialMedia from "../Components/SocialMedia";

export default function Footer() {
  return (
    <div
      className={`pt-16 pb-10 px-5 font-Poppins bg-Footer-gradient
    flex flex-col items-center justify-center`}
    >
      <img
        src="W_Logo.png"
        alt="Logo"
        className={"h-14 pl-9 mb-10 self-start"}
      />

      <h3 className="text-white text-[0.9375rem] mb-5">
        "Building the future, one line of code at a time."
      </h3>
      <p className="text-xs mx-[3.70rem] font-light leading-[1.375rem] text-center">
        We’re a diverse and passionate team that takes ownership of your design
        and empower you to execute the roadmap. We stay light on our feet and
        truly enjoy delivering great work.
      </p>
      <div className="py-5 px-4 relative">
        <SocialMedia isCenter={true} />
        <img
          src="Languages.png"
          alt="Languages"
          className="-translate-y-48 absolute"
        />
        <p className="leading-[0.875rem] text-[0.8125rem] text-center mt-10">
          © 2024 Mohammed Mahjari. All rights reserved.
        </p>
      </div>
    </div>
  );
}
