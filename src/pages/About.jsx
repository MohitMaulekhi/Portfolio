import { Container } from "../components/index.js"
import { useContext } from "react"
import { ThemeContext } from "../Utilities/Context"

function About() {
  const theme =  useContext(ThemeContext)
  return (
    <Container element={
      
      <div className="py-[5vh] mx-[2vw] flex justify-evenly mt-[5vh]  w-[100vw]">
        <div className="">
          <div className="text-[5vmin] font-extrabold  mb-[5vh]" style={{fontFamily:'Blinker'}}>About me...</div>
          <div className="self-center text-[3.5vmin] italic w-[30vw] max-w-72 bg-slate-400 p-4 bg-opacity-35 rounded-3xl">
          <img src="https://res.cloudinary.com/mohit-learning-backend/image/upload/v1707917504/Assests%20for%20Porfolio/wskryrnv9yxgnngqgyv2.png" alt="not found" />
          
            A developer who codes in dark to avoid <span className="text-blue-700">bugs</span>.
          </div>
        </div>
        <div className={`${theme=='dark'?"bg-white":"bg-black"}  w-[2vw] max-w-0.5`}></div>
        <div className="max-w-[50vw]  bg-slate-400 bg-opacity-35 rounded-3xl pt-[2vw] p-4  sm:text-[2.5vmin] text-[2.75vmin]"  style={{fontFamily: "Ubuntu"}}>
          <p className="m-[1vh]"> I am pursuing software engineering at Netaji Subhas University of Technology. I thoroughly enjoy creating digital projects, whether they are websites, applications, or anything in between. Over the past year, I have been actively learning web development while studying at the university, and I have gained valuable experience and knowledge across various fields through my projects and work.</p>
          <p className="m-[1vh]"> I also have a keen interest in data structures and algorithms. I have completed more than 200 questions on Geeks for Geeks and over 70 questions on LeetCode. Additionally, I am actively exploring new technologies and participating in coding communities.</p>
        </div>
      </div>
    }
    />
  )
}

export default About