import { Container } from "../components/index.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { object, string } from 'yup'
import { Formik } from "formik"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../Utilities/Context.js"
import { useContext } from "react"



let contactFormSchema = object({
  name: string().required("Name field is required"),
  email: string().required("Email field is required").email("must be a valid email"),
  message: string()
})

function Contact() {
  const theme =  useContext(ThemeContext)
  return (

    <Container element={
      <>
        <div className="mt-[15vh] max-w-[35vw]">
          <div id="getInTouch" className="mb-[2.5vh] ">Get in Touch</div>
          <div className="font-serif mb-[2vh] sm:text-[2.25vmin] text-[3.25vmin]"> Have a project in mind? Looking for a partner or work together? Reach out through the form or handles given below. I will get back to you.</div>
          <a href="https://github.com/MohitMaulekhi" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw] hover:opacity-70"><FontAwesomeIcon icon={faSquareGithub} size="xl" /></button></a>
          <a href="https://mail.google.com/mail/?view=cm&to=mohitmaulekhi312@gmail.com" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw] hover:opacity-70"><FontAwesomeIcon icon={faGoogle} size="xl" /></button></a>
          <a href="https://www.linkedin.com/in/mohit-maulekhi-222395267/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw] hover:opacity-70"><FontAwesomeIcon icon={faLinkedin} size="xl" /></button></a>
          <a href="https://www.instagram.com/mohit_maulekhi_/" target="_blank" rel="noreferrer" ><button className="mr-[1.5vw] hover:opacity-70"><FontAwesomeIcon icon={faInstagram} size="xl" /></button></a>
        </div>


        <div className="mt-[15vh] flex flex-col items-center">
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            validationSchema={contactFormSchema}
            onSubmit={async (values, action) => {
              await axios.post(`/api/v1/contact`, values,{withCredentials:true})
              .then(toast.success("Message sent"))
              .catch((errors)=>{console.log(errors)})
              action.resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
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
                <button className="mt-[2vh]" type="submit" id="submitButton">Submit</button>
              </form>
            )}

          </Formik>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme === "dark"?'dark':'light'}
          />
        </div>
      </>
    }
      properties="justify-around" />

  )
}

export default Contact