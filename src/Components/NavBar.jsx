import { HiMenuAlt3 } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export default function NavBar({ visibility, setVisibility }) {
  return (
    <div
      className={`bg-[linear-gradient(180deg,#000_1.26%,rgba(0,0,0,0.00)100%),radial-gradient(72.83%_40.4%_at_50%_27.17%,#5201E3_0%,rgba(0,0,0,0.50)100%)] rounded-[4.8125rem] border border-[#6D3AFD]
        flex items-center justify-between h-24 px-8 mb-10
        `}
    >
      <img src="W_Logo.png" alt="Logo" className={"h-14"} />
      <HiMenuAlt3
        color="white"
        className="cursor-pointer"
        size={28}
        onClick={() => setVisibility(!visibility)}
      />
    </div>
  );
}
