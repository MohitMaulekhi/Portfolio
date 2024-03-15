import {PropTypes} from 'prop-types'

function Skills_Box(props) {
  return (
    <button className="h-[8vmax] w-[8vmax] min-h-20 min-w-20 rounded-3xl bg-slate-100 hover:bg-slate-300 bg-contain bg-center bg-no-repeat border-4" style={{backgroundImage:`url(${props.link})`}}></button>
  )
}

Skills_Box.propTypes = {
  link:PropTypes.string,
}

export default Skills_Box