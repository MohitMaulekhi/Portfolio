import {Container} from "../components/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faInstagram, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import {object,string} from 'yup'
import { Formik } from "formik"

let contactFormSchema = object({
  name: string().required("Name field is required"),
  email: string().required("Email field is required").email("must be a valid email"),
  message: string()
})

function Contact() {
  return (
      
      <Container element = {
        <>
        <div className="mt-[15vh] max-w-[35vw]">
              <div  id = "getInTouch" className="mb-[2.5vh] ">Get in Touch</div>
              <div className="font-serif mb-[2vh] text-sm"> Have a project in mind? Looking for a partner or work together? Reach out through the form or handles given below. I will get back to you.</div>
              <a href="https://github.com/MohitMaulekhi"  target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faSquareGithub} beat size="xl"/></button></a>
              <a href="https://mail.google.com/mail/?view=cm&to=mohitmaulekhi312@gmail.com" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faGoogle} beat size="xl" /></button></a>
              <a href="https://www.linkedin.com/in/mohit-maulekhi-222395267/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faLinkedin} beat size="xl" /></button></a>
              <a href="https://www.instagram.com/mohit_maulekhi_/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw]"><FontAwesomeIcon icon={faInstagram} beat size="xl" /></button></a>
          </div>


          <div className="mt-[15vh] flex flex-col items-center"> 
            <Formik
              initialValues={{
                name:'',
                email:'',
                message:'',
              }}
              validationSchema={contactFormSchema}
              onSubmit={(values,action)=>{
                action.resetForm()
                console.log(values)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              })=>(
                <form onSubmit={handleSubmit}>
                <label className=" block" htmlFor="name">Your Name</label>
                <input className="w-[35vw] max-w-80 text-black p-1 border-2 border-black block"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                   />
                   {errors.name && touched.name && <span className="text-red-600 text-xs italic">**{errors.name}</span>}
                <label className="block" htmlFor="email">Your E-mail</label>
                <input className="w-[35vw] max-w-80 text-black p-1 border-2 border-black block"
                 type="email" 
                 name="email"
                 id="email" 
                 placeholder="Type your email"
                 onBlur={handleBlur}
                 onChange={handleChange}
                 value={values.email} 
                 />
                 {errors.email && touched.email && <span className="text-red-600 text-xs italic">**{errors.email}</span>}
                <label className="block" htmlFor="message"> Message</label>
                <textarea className="w-[35vw] max-w-80 max-h-[20vh] h-[20vh] block text-black p-1 border-2 border-black" 
                id="message" 
                placeholder="Type your message here"
                name="message"
                onChange={handleChange}
                 value={values.message} 
                ></textarea>
                <button className="mt-[2vh]" type="submit" id = "submitButton">Submit</button>
              </form>
              )}
              
            </Formik>
              
          </div>
          </>
      }
      properties = "justify-around"/>
          
  )
}

export default Contact