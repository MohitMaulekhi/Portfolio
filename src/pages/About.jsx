import {Container} from "../components/index.js"
function About() {
  return (
    <Container element = {
      <div className="py-[5vh] mx-[2vw]">
        <div className="flex mr-[10vw]">
        <img src="https://res.cloudinary.com/mohit-learning-backend/image/upload/v1707917504/Assests%20for%20Porfolio/wskryrnv9yxgnngqgyv2.png" alt="not found" />
        <div className="self-center text-[3.5vmin] font-sans italic w-[30vw]">
          A devloper who codes in dark to avoid <span className="text-blue-700">bugs</span>.</div>
        </div>
        <div className="px-[2vw] py-[1.5vh] text-[2.15vmin] font-serif"> I am pursuing software engineer from Netaji Subhas University of Technology. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been learning web development for a year now while studying at the university and I have manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</div>
        <div className="px-[2vw] py-[1.5vh] text-[2.15vmin] font-serif"> I have also a great interest in Data structures and algorithms. I have completed moe than 200 questions in Gekks for Geeks and completed more than 70 questions in Leetcode.</div>
      </div>
    }
    />
  )
}

export default About