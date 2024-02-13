import {Navbar} from "./components/index.js"
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
