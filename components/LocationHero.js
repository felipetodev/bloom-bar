import Image from 'next/image'
import locationHero from '../public/location-waves.jpeg'
import Button from '../ui/Button'
import CupIcon from '../ui/CupIcon'

const LocationHero = () => (
  <div className='relative flex flex-col text-bloom-gray-100 w-full h-full'>
    <div className='overflow-hidden max-h-[623px] w-full'>
      <Image
        style={{ objectPosition: '0 80%' }}
        className='grayscale brightness-50 object-cover h-screen w-full'
        alt='bloombar-wave-bg' src={locationHero}
        placeholder='blur'
      />
    </div>
    <div className='absolute flex flex-col h-full w-full justify-center items-center z-10 text-center gap-5 py-36 md:py-48'>
      <CupIcon />
      <h2 className='text-base text-bloom-orange-100 md:text-[20px]'>Estamos en</h2>
      <h1 className='text-[26px] md:text-[40px]'>
        Av. Borgoño 15480 Sector 5, Reñaca.
      </h1>
      <Button variant='secondary'>
        CÓMO LLEGAR
      </Button>
    </div>
  </div>
)

export default LocationHero
