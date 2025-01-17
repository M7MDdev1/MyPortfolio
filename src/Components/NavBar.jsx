import { HiMenuAlt3 } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export default function NavBar({ visibility, setVisibility }) {
  return (
    <div
      className={
        "sm:hidden mx-auto py-5 border-b border-x border-dark12 px-4"
      }
    >
      <div className="flex justify-between items-center pt-10">
        <img src="W_Logo.png" alt="Logo" className={"h-12 pl-6"} />
        <HiMenuAlt3
          color="white"
          className="mr-3 cursor-pointer"
          size={24}
          onClick={() => setVisibility(!visibility)}
        />
      </div>
    </div>
  );
}
