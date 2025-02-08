import SubTitle from "../Components/SubTitle";
import Experity from "../Components/Experity";

export default function Experties() {
  return (
    <div className="flex flex-col gap-y-4 items-center mb-8" id="experties">
      <SubTitle className="self-start">Experties</SubTitle>

      <Experity
        Type={"Volunteer"}
        Title={"SWE"}
        Company={"Bedar"}
        discription={`Led redevelopment team of backend, frontend, and UI/UX.
Utilized Laravel and React to build a new system.`}
        date={"08/2024 – present"}
        img={"Experities/Bedar.png"}
      />

      <Experity
        img={"Experities/TheGarage.png"}
        Company={"The Garage"}
        discription={`Developed responsive UIs with React, TypeScript, and Tailwind CSS, integrated APIs for functionality, and improved teamwork using Git/GitHub.`}
        date={"06/2024 – 08/2024"}
        Title={"Front-end"}
        Type={"Trainee"}
      />

      <Experity
        img={"Experities/Saeed.png"}
        Company={"Saeed alnama"}
        discription={`Trained and onboarded 3 new employees.
Developed a website provides fast access for frequent services.`}
        date={"2022 – 2023"}
        Title={"Data-Entry"}
        Type={"Part-Time"}
      />
    </div>
  );
}
