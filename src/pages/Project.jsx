import {Container,ProjectContaner} from "../components/index.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { useContext } from "react";
import { ThemeContext } from "../Utilities/Context.js";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projectArr = [
  {
    imgUrl:"https://res.cloudinary.com/mohit-learning-backend/image/upload/v1710510164/Assests%20for%20Porfolio/Project%20Assets/bt8z0grgl4zqv0ftsem2.png",
    content:'The YouTube clone, developed using React and the YouTube API, recreates the functionality of the original video-sharing platform. By integrating the YouTube API, the clone can access real-time videos and perform searches.',
    techStack:'React JS, Chakra UI, Redux Toolkit, Youtube Api, Javascript, CSS',
    gitURL:'https://github.com/MohitMaulekhi/MERN-Blog-Project',
    link:'https://bestblogs.onrender.com/'
  },
  {
    imgUrl:"",
    content:'Many more to come....',
    techStack:'none',
    gitURL:'',
    link:''
  }
]

function Project() {
  const theme =  useContext(ThemeContext)
  return (
    <Container element = {
      <Swiper
        style={{
          '--swiper-navigation-color': `${theme == "dark"?'#fff':'#000000'}`,
          '--swiper-pagination-color': `${theme == "dark"?'#fff':'#000000'}`,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        
        className="mySwiper h-[70vh] mt-[7.5vh] w-[100vw] rounded-3xl mx-2"
      >
        {projectArr.map((item,index)=>(
          <SwiperSlide key={index} className="flex justify-center items-center">
          <ProjectContaner 
          imgUrl={item.imgUrl} 
          content={item.content} 
          techStack={item.techStack}
          gitURL={item.gitURL}
          link={item.link}
          />
        </SwiperSlide>
        ))}
      </Swiper>
    }
    properties = {""} />
  )
}

export default Project