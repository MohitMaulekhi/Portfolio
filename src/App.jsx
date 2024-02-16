import {Navbar} from "./components/index.js"
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col bg-slate-950 min-h-[100vh] h-max">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
