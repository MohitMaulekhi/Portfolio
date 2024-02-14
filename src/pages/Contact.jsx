import { useState } from "react"
import {Container} from "../components/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faInstagram, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"

function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")


  return (
      <Container element = {
        <>
        <div className="mt-[15vh] max-w-[35vw]">
              <div  id = "getInTouch" className="mb-[2.5vh] ">Get in Touch</div>
              <div className="font-serif mb-[2vh] text-sm"> Have a project in mind? Looking for a partner or work together? Reach out through the form or handles given below. I will get back to you.</div>
              <a href="https://github.com/MohitMaulekhi" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faSquareGithub} beat size="xl"/></button></a>
              <a href="https://mail.google.com/mail/?view=cm&to=mohitmaulekhi312@gmail.com" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faGoogle} beat size="xl" /></button></a>
              <a href="https://www.linkedin.com/in/mohit-maulekhi-222395267/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faLinkedin} beat size="xl" /></button></a>
              <a href="https://www.instagram.com/mohit_maulekhi_/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faInstagram} beat size="xl" /></button></a>
          </div>


          <div className="mt-[15vh] flex flex-col items-center"> 
              <form>
                <div className="mb-[0.5vh]"><label htmlFor="name">Your Name</label></div>
                <div className="mb-[2vh]"><input className="w-[35vw] max-w-80 text-black p-1"  type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Type your name" /></div>
                <div className="mb-[0.5vh]"><label htmlFor="email">Your E-mail</label></div>
                <div className="mb-[2vh]"><input className="w-[35vw] max-w-80 p-1" type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Type your email" /></div>
                <div className="mb-[0.5vh]"><label htmlFor="message"> Message</label></div>
                <textarea className="w-[35vw] max-w-80 max-h-[25vh] text-black p-1" id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  placeholder="Type your message here"></textarea>
              </form>
              <button className="mt-[2vh]" id = "submitButton">Submit</button>
          </div>
          </>
      }
      properties = "justify-around"/>
          
  )
}

export default Contact