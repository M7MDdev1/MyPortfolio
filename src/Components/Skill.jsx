// eslint-disable-next-line react/prop-types
export default function Skill({ name, img }) {
  return (
    <div className="h-24 flex flex-col items-center gap-y-2">
      <img src={img} alt={name} className="h-16"/>
      <p className="text-[#EAEAEA] font-Inter">{name}</p>
    </div>
  );
}
