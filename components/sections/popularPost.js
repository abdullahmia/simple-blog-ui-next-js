import { Swiper, SwiperSlide } from 'swiper/react'
import Post from '../common/post'

const popularPost = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="text-3xl font-bold capitalize pb-14 text-center">popular post</h1>

        <Swiper
        spaceBetween={40}
        slidesPerView={2}
      >
            <SwiperSlide>
                <Post />
            </SwiperSlide>
            <SwiperSlide>
                <Post />
            </SwiperSlide>
            
            <SwiperSlide>
                <Post />
            </SwiperSlide>
            <SwiperSlide>
                <Post />
            </SwiperSlide>
            <SwiperSlide>
                <Post />
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default popularPost