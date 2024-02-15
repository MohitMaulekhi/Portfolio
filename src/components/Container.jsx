/* eslint-disable react/prop-types */
function Container(props) {
  return (
    <div className={`flex w-[100vw] text-white ${props.properties}`}>
        {props.element}
    </div>
  )
}

export default Container