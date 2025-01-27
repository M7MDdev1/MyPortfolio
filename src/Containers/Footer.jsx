import { Link } from "react-router";
import SocialMedia from "../Components/SocialMedia";

export default function Footer() {
  return (
    <>
      <div className="py-10 px-5 grid grid-cols-2 font-Manrope text-xs">
        <div className="col-span-2">
          <p className="text-[#797C86] mb-4">Home</p>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>My projects</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
        </div>
        
        <div>
          <p className="text-[#797C86] mb-4">Home</p>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>My projects</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
        </div>
        
        <div>
          <p className="text-[#797C86] mb-4">Home</p>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>My projects</Link>
          <Link className="block py-[0.375rem] border-b border-[#2F2F37] w-fit" to={""}>ABOUT ME</Link>
        </div>
        
      </div>

      <div className="py-5 px-4">
        <p className="text-[#797C86] font-Manrope text-xs text-center mb-4">
          © 2024 Mohammed Mohjary Dev. All rights reserved.
        </p>
        <SocialMedia />
      </div>
    </>
  );
}
