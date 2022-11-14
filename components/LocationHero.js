import Image from 'next/image'
import locationHero from '../public/location-waves.jpeg'
import Button from '../ui/Button'

const LocationHero = ({ locationPost }) => (
  <div data-scroll-section className='relative flex flex-col text-bloom-gray-100 w-full h-full min-h-[85vh]'>
    <div className='overflow-hidden max-h-[85vh] w-full'>
      <Image
        style={{ objectPosition: '0 80%' }}
        className='grayscale brightness-25 object-cover h-screen w-full'
        alt='bloombar-wave-bg' src={locationHero}
        placeholder='blur'
      />
    </div>
    <div className='absolute flex flex-col h-full w-full justify-center items-center z-10 text-center gap-5 py-36 md:py-48 px-5 sm:px-10'>
      <Image src='/cup.svg' alt='cup' width={85} height={77} />
      <h2 className='text-xl text-bloom-orange-100 md:text-[30px]'>
        {locationPost.orangeTitle}
      </h2>
      <h1 className='text-[30px] md:text-[40px]'>
        {locationPost.subtitle}
      </h1>
      <Button type='link' href={locationPost.buttonLink} className='!py-3 sm:!py-[5px] sm:px-[41.5px]' variant='secondary'>
        {locationPost.buttonCopy}
      </Button>
    </div>
  </div>
)

export default LocationHero
