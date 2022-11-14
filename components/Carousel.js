import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import useMediaQuery from '../hooks/useMediaQuery'
import PaintSvg from '../ui/PaintSvg'
import 'swiper/css'
import 'swiper/css/pagination'

const tailwindMQ = '(max-width: 640px)'

const Carousel = () => {
  const isMobile = useMediaQuery(tailwindMQ)
  return (
    <div data-scroll-section className='relative'>
      <Swiper
        loop
        slidesPerView={isMobile ? 1.65 : 2.4}
        spaceBetween={0}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false
        }}
        speed={5000}
        modules={[Autoplay, FreeMode]}
        grabCursor
        className='swiper bloom-carousel'
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
      <div data-scroll data-scroll-speed='1' className='absolute z-30 -top-24 right-8 md:right-9 select-none pointer-events-none'>
        <PaintSvg className='max-w-[130px] md:max-w-full' />
      </div>
    </div>
  )
}

export default Carousel
