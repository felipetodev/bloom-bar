import Image from 'next/image'
import selloViaje from '../public/sello-viaje-2.png'

const ContactHero = () => {
  return (
    <div className='relative bg-bloom-softGray-100'>
      <div className='flex flex-col justify-center items-center gap-5 pt-[200px] pb-[100px] sm:pt-[250px] sm:pb-[250px] sm:gap-8'>
        <h1 className='text-xl text-bloom-orange-100'>Llámanos o escríbenos</h1>
        <a href='tel:+56953031387' className='text-bloom-darkGreen-100 text-xl sm:text-[40px] hover:underline'>
          +569 5303 1387
        </a>
        <a href='mailto:contacto@bloombar.cl' className='text-bloom-darkGreen-100 text-xl sm:text-[40px] hover:underline'>
          contacto@bloombar.cl
        </a>
      </div>
      <div className='absolute bottom-2 right-0 pointer-events-none'>
        <img className='w-52 sm:w-full' src='/plant-contact.svg' alt='bloom plant' />
      </div>
      <div className='absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-44 sm:left-36 sm:h-48 md:h-56 md:left-[162px]'>
        <Image
          className='object-cover h-full w-full min-w-[165px]'
          alt='bloombar-wave-bg' src={selloViaje}
          placeholder='blur'
        />
      </div>
    </div>
  )
}

export default ContactHero
