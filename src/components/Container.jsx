/* eslint-disable react/prop-types */
function Container(props) {
  return (
    <div className={`sm:h-[83vh] h-[87vh] flex w-[100vw] bg-slate-950 text-white ${props.properties}`}>
        {props.element}
    </div>
  )
}

export default Container