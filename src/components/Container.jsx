import { useContext } from "react"
import { ThemeContext } from "../Utilities/Context"

function Container(props) {
  const theme =  useContext(ThemeContext)
  return (
    <div className={`flex w-[100vw] ${theme == "dark"?"text-white":""} ${props.properties}`}>
        {props.element}
    </div>
  )
}

export default Container