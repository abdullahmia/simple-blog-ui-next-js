import { Swiper, SwiperSlide } from 'swiper/react'
import fetcher from '../../lib/fetcher'
import Post from '../common/post'

const popularPost = () => {
    const {data} = fetcher('/popular')
  return (
    <section className="container mx-auto md:px-20 py-16 px-6">
        <h1 className="text-3xl font-bold capitalize pb-14 text-center">popular post</h1>

        <Swiper
        spaceBetween={40}
        slidesPerView={2}
      >
            {
                data?.map((post, key) => (
                    <><SwiperSlide key={key}>
                        <Post post={post} />
                    </SwiperSlide></>
                ))
            }
        </Swiper>
    </section>
  )
}

export default popularPost