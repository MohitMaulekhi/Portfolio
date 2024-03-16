import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../Utilities/Context"
function Navbar() {
  const theme =  useContext(ThemeContext)
  const thememode = (isActive)=>{
    if(isActive){
      if(theme == "dark"){
        return "bg-blue-950"
      }
      else{
        return "bg-blue-200"
      }
    }
  }
  return (
    <nav className={`flex flex-wrap px-[1vw] py-[1vh] items-center justify-between ${theme == "dark"?"bg-black text-white":"bg-slate-200"}  h-fit`}>
      <div id = "navtext" className="mr-4">Mohit Maulekhi</div>
      <div className="flex font-bold flex-wrap  my-[0.5vh]" >
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={""} >Home</NavLink>
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={"/about"}>About</NavLink>
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={"/skills"}>Skills</NavLink>
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={"/projects"}>Projects</NavLink>
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={"/resume"}>Resume</NavLink>
      <NavLink className={({isActive})=>(`px-[1.5vw] rounded-2xl  text-[2.5vmin]  ${thememode(isActive)}`)} to={"/contact"}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar