import {Container,ProjectContaner} from "../components/index.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Project() {
  return (
    <Container element = {
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper h-[70vh] mt-[7.5vh] w-[100vw] bg-slate-400  bg-opacity-35 rounded-3xl mx-4"
      >
        <SwiperSlide className="flex justify-center items-center">
          <ProjectContaner/>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProjectContaner/>
        </SwiperSlide>
      </Swiper>
    }
    properties = {""} />
  )
}

export default Project