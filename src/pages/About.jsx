import {Container} from "../components/index.js"
function About() {
  return (
    <Container element = {
      <div className="my-[5vh] ml-[10vw]">
        <div className="flex">
        <img src="src\assets\Avatar.png" alt="not found" />
        <div className="self-center text-[4vmin] font-sans italic w-[30vw]">
          A devloper who codes in dark to avoid <span className="text-blue-700">bugs</span>.</div>
        </div>
        <div className="ml-[15vw] mt-[2vh] mr-[7.5vw]"> I am pursuing software engineer from Netaji Subhas University of Technology. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</div>
      </div>
    }
    />
  )
}

export default About