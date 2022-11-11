import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import useMediaQuery from '../hooks/useMediaQuery'
import 'swiper/css'
import 'swiper/css/pagination'

const tailwindMQ = '(max-width: 640px)'

const Carousel = () => {
  const isMobile = useMediaQuery(tailwindMQ)
  return (
    <Swiper
      slidesPerView={isMobile ? 1.65 : 2.4}
      spaceBetween={0}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay]}
      speed={500}
      autoplay={{
        disableOnInteraction: false
      }}
      loop
      className='swiper bloom-carousel cursor-grab'
    >
      <SwiperSlide className='swiper-slide !h-[400px] sm:!h-[500px]'>
        <img
          loading='lazy'
          className='work-image max-w-xl object-cover min-w-full'
          src='/chef.jpeg'
          alt='chef'
        />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide !h-[400px] sm:!h-[500px]'>
        <img
          loading='lazy'
          className='work-image max-w-xl object-cover min-w-full'
          src='/dj.jpeg'
          alt='chef'
        />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide !h-[400px] sm:!h-[500px]'>
        <img
          loading='lazy'
          className='work-image max-w-xl object-cover min-w-full'
          src='/hero-home.jpeg'
          alt='chef'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
