import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {PropTypes} from 'prop-types'
function ProjectContaner({imgUrl,content,techStack,gitURL,link}) {
  return (
    <div className={`p-4 flex flex-col items-center border-4 border-blue-700 mx-2 rounded-lg h-[70vh] w-full lg:w-[60vw]`}>
      <img className="sm:h-[30vh]" src={imgUrl} alt="" />
      <div className=" sm:text-[2.25vmin] my-4 text-[3.25vmin]">{content}</div>
      <table className="self-start sm:text-[2.25vmin] text-[3.25vmin]">
        <tr>
        <td className="text-red-500 font-bold">Tech Stack:</td>
        <td>{techStack}</td>
        </tr>
        
      </table>
      <div className="mt-1">
      <a href={gitURL} target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faGithub} size="2xl" /></button></a>
      <a href={link} target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faLink} size="2xl" /></button></a>
      </div>
    </div>
  )
}
ProjectContaner.propTypes = {
  imgUrl:PropTypes.string,
  techStack:PropTypes.string,
  content:PropTypes.string,
  link:PropTypes.string,
  gitURL:PropTypes.string,
  
}
export default ProjectContaner