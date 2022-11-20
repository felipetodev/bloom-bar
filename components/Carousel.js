import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import PaintSvg from '../ui/PaintSvg'
import 'swiper/css'
import 'swiper/css/pagination'

const Carousel = ({ carouselCollection }) => {
  return (
    <div data-scroll-section className='relative'>
      <Swiper
        loop
        breakpoints={{
          1: {
            slidesPerView: 1.65,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2.4,
            spaceBetween: 0
          }
        }}
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
        className='swiper bloom-carousel !h-[400px] sm:!h-[500px]'
      >
        {carouselCollection?.items?.map((item) => (
          <SwiperSlide key={item.sys.id} className='swiper-slide h-full'>
            <Image
              height={400}
              width={500}
              loading='lazy'
              className='work-image max-w-xl object-cover min-w-full'
              src={item.image.url}
              alt={item.image.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div data-scroll data-scroll-speed='1' className='absolute z-30 -top-24 right-8 md:right-9 select-none pointer-events-none'>
        <PaintSvg className='max-w-[130px] md:max-w-full' />
      </div>
    </div>
  )
}

export default Carousel
