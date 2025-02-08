import SubTitle from "../Components/SubTitle";
import VolanteerCard from "../Components/Volanteer-Card";

export default function Volunteer() {
  return (
    <div className="flex flex-col gap-y-4 mb-14" id="volunteer">
      <SubTitle>Experties</SubTitle>
      <VolanteerCard
        img={"Volanteer/GDSC.jpg"}
        Company={"GDSC - JU"}
        Title={"Leader"}
      />
      <VolanteerCard
        img={"Volanteer/JUCC.jpg"}
        Company={"Cyber Security club"}
        Title={"Events lead"}
      />

    </div>
  );
}
