import Slide from '../custom/slide';
// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const hero = () => {
  SwiperCore.use([Autoplay])
  const bgStyle = {
    background: "url('/images/banner.png') no-reapet",
    backgroundPosition: 'right'
  }
  return (
    <section className="py-16" style={bgStyle}>
        <div className="container mx-auto md:px-20">
            {/* <h2 className="font-bold text-4xl pb-12 capitalize text-center">trending</h2> */}
           <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay= {{
                delay: 2000
              }}
            >
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
              <SwiperSlide>
                <Slide />
              </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default hero