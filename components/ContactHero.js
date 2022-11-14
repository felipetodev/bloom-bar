import Image from 'next/image'
import selloViaje from '../public/sello-viaje-2.png'

const ContactHero = ({ heroPost }) => {
  return (
    <div data-scroll-section className='relative bg-bloom-softGray-100'>
      <div className='flex flex-col justify-center items-center gap-3 md:gap-2 pt-[200px] pb-[100px] sm:pt-[250px] sm:pb-[250px] sm:gap-8'>
        <h1 className='text-lg sm:text-2xl text-bloom-orange-100'>
          {heroPost?.contactUs}
        </h1>
        <a href={heroPost?.numberLink} className='text-bloom-darkGreen-100 text-[26px] sm:text-[40px] hover:underline'>
          {heroPost?.number}
        </a>
        <a href={heroPost?.emailLink} className='text-bloom-darkGreen-100 text-[26px] sm:text-[40px] hover:underline'>
          {heroPost?.email}
        </a>
      </div>
      <div data-scroll data-scroll-speed='3' className='absolute bottom-4 -right-10 pointer-events-none select-none blur-sm'>
        <img className='w-52 sm:w-full' src='/plant-contact.svg' alt='bloom plant' />
      </div>
      <Image
        loading='lazy'
        className='object-cover w-[40%] sm:w-1/5 md:w-1/6 h-fit absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:left-36 md:left-[170px] lg:left-[15%]'
        alt='bloombar-wave-bg'
        src={selloViaje}
      />
    </div>
  )
}

export default ContactHero
