import {Navbar} from "./components/index.js"
import {Outlet} from "react-router-dom"
import { useState,} from "react"
import {ThemeContext} from "./Utilities/Context.js"

function App() {
  const [theme,setTheme] = useState("dark")
  return (
    <ThemeContext.Provider value={theme}>
    <div className={`flex flex-col ${theme == "dark"? "bg-slate-950":"bg-white"} min-h-[100vh] h-max`}>
      <Navbar/>
      <Outlet/>
      
      <button className="h-[7.5vmin] w-[7.5vmin] bg-white absolute bottom-5 right-5 rounded-full border-black border-2 bg-cover" onClick={()=>{setTheme((prev)=>prev=="light"?"dark":"light")}}
      style={{backgroundImage:`url(${theme=='light'?'https://res.cloudinary.com/mohit-learning-backend/image/upload/v1709138076/Assests%20for%20Porfolio/Themes%20icon/nfomyjjeu8u6ggb6hijm.png':"https://res.cloudinary.com/mohit-learning-backend/image/upload/v1709138079/Assests%20for%20Porfolio/Themes%20icon/n99f4tobfkjfsficetke.png"})`}}>
      </button>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
