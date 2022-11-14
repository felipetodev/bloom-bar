import Image from 'next/image'
import selloViaje from '../public/sello-viaje-2.png'

const ContactHero = () => {
  return (
    <div data-scroll-section className='relative bg-bloom-softGray-100'>
      <div className='flex flex-col justify-center items-center gap-3 pt-[200px] pb-[100px] sm:pt-[250px] sm:pb-[250px] sm:gap-8'>
        <h1 className='text-lg sm:text-2xl text-bloom-orange-100'>Llámanos o escríbenos</h1>
        <a href='tel:+56953031387' className='text-bloom-darkGreen-100 text-[26px] sm:text-[40px] hover:underline'>
          +569 5303 1387
        </a>
        <a href='mailto:contacto@bloombar.cl' className='text-bloom-darkGreen-100 text-[26px] sm:text-[40px] hover:underline'>
          contacto@bloombar.cl
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
