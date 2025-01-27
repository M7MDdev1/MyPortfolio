import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function SocialMedia({isCenter}) {
  return (
    <div className={`p-2 border text-white border-[#1C1C21] rounded-[6.25rem] bg-[#070708] flex w-fit gap-x-2 ${isCenter && 'mx-auto'}`}>
      <div className="p-2 border border-[#2F2F37] rounded-[6.25rem] bg-[#1C1C21] flex">
        <FaLinkedin size={18}/>
      </div>
      <div className="p-2 border border-[#2F2F37] rounded-[6.25rem] bg-[#1C1C21] flex">
        <FaXTwitter size={18}/>
      </div>
      <div className="p-2 border border-[#2F2F37] rounded-[6.25rem] bg-[#1C1C21] flex">
        <IoMailSharp size={18}/>
      </div>
    </div>
  );
}
