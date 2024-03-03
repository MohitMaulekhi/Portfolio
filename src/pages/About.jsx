import { Container } from "../components/index.js"
import { useContext } from "react"
import { ThemeContext } from "../Utilities/Context"

function About() {
  const theme =  useContext(ThemeContext)
  return (
    <Container element={
      
      <div className="py-[5vh] mx-[2vw] flex justify-evenly items-center w-[100vw]">
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
        <div className="">
          <div className="text-[5vmin] font-extrabold  mb-[5vh]" style={{fontFamily:'Blinker'}}>About me...</div>
          <div className="self-center text-[3.5vmin] italic w-[30vw] max-w-72 bg-slate-400 p-4 bg-opacity-35 rounded-3xl">
          <img src="https://res.cloudinary.com/mohit-learning-backend/image/upload/v1707917504/Assests%20for%20Porfolio/wskryrnv9yxgnngqgyv2.png" alt="not found" />
          
            A devloper who codes in dark to avoid <span className="text-blue-700">bugs</span>.
          </div>
        </div>
        <div className={`${theme=='dark'?"bg-white":"bg-black"} h-[75vh] w-[2vw] max-w-0.5`}></div>
        <div className="max-w-[50vw]  bg-slate-400 bg-opacity-35 rounded-3xl flex flex-col justify-evenly p-8"  style={{fontFamily: "Ubuntu"}}>
          <p> I am pursuing software engineer from Netaji Subhas University of Technology. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been learning web development for a year now while studying at the university and I have manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</p>
          <br/>
          <p> I have also a great interest in Data structures and algorithms. I have completed moe than 200 questions in Gekks for Geeks and completed more than 70 questions in Leetcode.</p>
        </div>
      </div>
    }
    />
  )
}

export default About