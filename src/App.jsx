import {Navbar} from "./components/index.js"
import {Outlet} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,} from "react"
import {faLightbulb, faMoon  } from "@fortawesome/free-solid-svg-icons"
import {ThemeContext} from "./Utilities/Context.js"

function App() {
  const [theme,setTheme] = useState("dark")
  return (
    <ThemeContext.Provider value={theme}>
    <div className={`flex flex-col ${theme == "dark"? "bg-slate-950":"bg-white"} min-h-[100vh] h-max`}>
      <Navbar/>
      <Outlet/>
      
      <button className="h-[7.5vmin] w-[7.5vmin] bg-white absolute bottom-5 right-5 rounded-full border-black border-2 " onClick={()=>{setTheme((prev)=>prev=="light"?"dark":"light")}}>
        <FontAwesomeIcon icon = {theme==="dark"?faLightbulb:faMoon} size="2xl" />
      </button>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
