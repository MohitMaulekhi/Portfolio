import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <nav className="flex flex-wrap px-[1vw] py-[1vh] items-center justify-between bg-black sm:h-[17vh] h-[13vh]">
      <div id = "navtext" className="ml-[1vw]">Mohit Maulekhi</div>
      <div className="flex font-semibold flex-wrap font-serif my-[0.5vh]" >
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={""} >Home</NavLink>
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={"/about"}>About</NavLink>
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={"/skills"}>Skills</NavLink>
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={"/projects"}>Projects</NavLink>
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={"/resume"}>Resume</NavLink>
      <NavLink className={({isActive})=>(`mx-[1vw] p-[0.5vw] rounded-2xl text-white  text-[2.5vmin]  ${isActive&&"bg-blue-950"}`)} to={"/contact"}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar