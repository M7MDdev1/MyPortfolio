import SubTitle from "../Components/SubTitle";
import VolanteerCard from "../Components/Volanteer-Card";

export default function Volunteer() {
  return (
    <div className="flex flex-col gap-y-4 mb-14 items-center" id="volunteer">
      <SubTitle className="md:text-center">Volunteer</SubTitle>
      <VolanteerCard
        img={"Volanteer/Bedar.png"}
        Company={"Bedar"}
        Title={"Software Engineer"}
      />
      <VolanteerCard
        img={"Volanteer/Bedar.png"}
        Company={"Bedar"}
        Title={"Software Engineer"}
      />
      <VolanteerCard
        img={"Volanteer/Bedar.png"}
        Company={"Bedar"}
        Title={"Software Engineer"}
      />
    </div>
  );
}
