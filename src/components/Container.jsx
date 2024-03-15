import { useContext } from "react"
import { ThemeContext } from "../Utilities/Context"
import {PropTypes} from 'prop-types'
function Container(props) {
  const theme =  useContext(ThemeContext)
  return (
    <div className={`flex w-[100vw] ${theme == "dark"?"text-white":""} ${props.properties}`}>
        {props.element}
    </div>
  )
}
Container.propTypes = {
  properties:PropTypes.string,
  element:PropTypes.element

}
export default Container