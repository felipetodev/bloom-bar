import Image from 'next/image'
import dj from '../public/dj.jpeg'
import Button from '../ui/Button'

const Promotion = () => {
  return (
    <div id='promotion' className='relative overflow-hidden'>
      <Image loading='lazy' className='max-h-[700px] min-h-[450px] object-cover w-full h-full' alt='dj' src={dj} placeholder='blur' />
      {/* gradient bg */}
      <div className='absolute top-0 left-0 h-full w-full bg-promotion-gradient' />
      {/* gradient bg */}
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
          <Button variant='secondary'>
            SÍGUENOS EN INSTAGRAM
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Promotion
