import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

export default function SocialMedia({isCenter}) {
  return (
    <div className={`p-2  text-white  flex w-fit gap-x-2 ${isCenter && 'mx-auto'}`}>
      <div className="p-2 border-2 border-[#2F2F37] rounded-[6.25rem] flex">
        <FaXTwitter size={18}/>
      </div>
      <div className="p-2 border-2 border-[#2F2F37] rounded-[6.25rem] flex">
      <FaLinkedin size={18}/>
      </div>
      <div className="p-2 border-2 border-[#2F2F37] rounded-[6.25rem] flex">
        <LuGithub size={18}/>
      </div>
    </div>
  );
}
