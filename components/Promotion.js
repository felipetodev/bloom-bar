import Image from 'next/image'
import dj from '../public/dj.jpeg'
import Button from '../ui/Button'
import FlowerIcon from '../ui/FlowerIcon'

const Promotion = ({ hasFlower }) => {
  return (
    <div data-scroll-section id='promotion' className='relative'>
      <Image loading='lazy' className='max-h-[700px] min-h-[450px] object-cover w-full h-full' alt='dj' src={dj} placeholder='blur' />
      <div className='absolute top-0 left-0 h-full w-full bg-promotion-gradient' />
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-5 sm:px-10 md:px-14'>
        <h2 className='text-2xl text-bloom-orange-100 mb-4'>BLOOM NIGHTS</h2>
        <div className='flex flex-col text-bloom-softGray-100'>
          <h1 className='text-[40px] sm:text-[70px] leading-[50px] sm:leading-[80px]'>
            LIVE MUSIC
          </h1>
          <h1 className='text-[40px] sm:text-[70px] leading-[50px] sm:leading-[80px]'>
            DJ SETS
          </h1>
          <h1 className='text-[40px] sm:text-[70px] leading-[50px] sm:leading-[80px]'>
            Y EVENTOS
          </h1>
        </div>
        <a href='https://www.instagram.com/bloom_barcl' rel='noopener noreferrer' target='_blank' className='mt-4'>
          <Button className='hover:border-bloom-orange-200 hover:bg-bloom-orange-200 hover:text-bloom-softGray-100' variant='secondary'>
            SÍGUENOS EN INSTAGRAM
          </Button>
        </a>
      </div>
      {hasFlower && (
        <div className='absolute z-20 text-bloom-orange-100 top-[0px] left-1/2 sm:left-[42.92%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <FlowerIcon />
        </div>
      )}
    </div>
  )
}

export default Promotion
