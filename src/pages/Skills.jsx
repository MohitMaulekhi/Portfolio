import {Container,Skills_Box} from "../components/index.js"

function Skills() {
  const ImgArr = ["https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070314/Assests%20for%20Porfolio/React-Redux-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070314/Assests%20for%20Porfolio/Cloudinary-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070315/Assests%20for%20Porfolio/Nodemon-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070315/Assests%20for%20Porfolio/Express-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070315/Assests%20for%20Porfolio/Mongoose-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070316/Assests%20for%20Porfolio/Node-Js-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070316/Assests%20for%20Porfolio/Javascript-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070316/Assests%20for%20Porfolio/FontAwesome-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070317/Assests%20for%20Porfolio/Github_Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070317/Assests%20for%20Porfolio/Css-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070318/Assests%20for%20Porfolio/TailwindCss-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070319/Assests%20for%20Porfolio/Git-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070319/Assests%20for%20Porfolio/Postman-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070319/Assests%20for%20Porfolio/React-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070320/Assests%20for%20Porfolio/HTML-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070321/Assests%20for%20Porfolio/MongoDb-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070321/Assests%20for%20Porfolio/CPP-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070322/Assests%20for%20Porfolio/Python-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070322/Assests%20for%20Porfolio/MySql-Logo.png","https://res.cloudinary.com/mohit-learning-backend/image/upload/v1708070323/Assests%20for%20Porfolio/React-Router-Logo.png"]
  return (
    <Container element = {
      <div className="my-[10vh] sm:mt-[15vh] flex flex-wrap max-w-[75vw] justify-center gap-[5vmin]">
        {ImgArr.map((item,i)=>(<Skills_Box key = {i} link = {item} />))}

      </div>
    }
    properties = "justify-center"/>
  )
}

export default Skills