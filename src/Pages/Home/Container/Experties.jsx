import SubTitle from "../../../Components/SubTitle";
import Experity from "../Components/Experity";

export default function Experties() {
  return (
    <div className="flex flex-col gap-y-4">
            <SubTitle>Experties</SubTitle>
      
      <Experity
        img={"Experities/TheGarage.png"}
        Company={"The Garage"}
        discription={`
am Mohammed Mehjari, a professional web and app developer with over 15 years of experience.          `}
        date={"March 2024 - March 2024"}
        Title={"Front-end"}
        Type={"Trainee"}
      />

      <Experity
        img={"Experities/TheGarage.png"}
        Company={"The Garage"}
        discription={`
am Mohammed Mehjari, a professional web and app developer with over 15 years of experience.          `}
        date={"March 2024 - March 2024"}
        Title={"Front-end"}
        Type={"Trainee"}
      />

      <Experity
        img={"Experities/TheGarage.png"}
        Company={"The Garage"}
        discription={`
am Mohammed Mehjari, a professional web and app developer with over 15 years of experience.          `}
        date={"March 2024 - March 2024"}
        Title={"Front-end"}
        Type={"Trainee"}
      />

    </div>
  );
}
