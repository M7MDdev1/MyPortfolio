import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="py-8 flex justify-center items-center text-[#C8C8C8] gap-x-12">
        <Link to={"/"}>
        Home
        </Link>
        <Link to={"/About"}>
        About
        </Link>
        <Link to={"/Articles"}>
        ARTICLES
        </Link>
        <Link to={"/Projects"}>
        PROJECTS
        </Link>
        <Link to={"/Experiences"}>
        EXPERIENCES
        </Link>
        <Link to={"/Skills"}>
        SKILLS
        </Link>
    </div>
  )
}
