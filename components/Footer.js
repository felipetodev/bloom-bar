import Link from 'next/link'

const Footer = () => {
  return (
    <footer data-scroll-section className='relative bg-bloom-black-100 font-abel'>
      <div className='md:flex md:justify-between px-5 pt-8 sm:px-10 md:px-14 md:pt-14'>
        <div className='mb-6 md:mb-0'>
          <Link href='/' className='flex items-center'>
            <img loading='lazy' src='/bloomlogo.svg' alt='Bloom Logo' className='w-20 sm:w-28 md:w-32 -ml-2.5 md:-ml-[13.5px]' />
          </Link>
        </div>
        <div className='mt-16 grid grid-cols-2 gap-8 sm:gap-6 md:mt-0'>
          <div>
            <ul className='text-bloom-softGray-100'>
              <li className='mb-6'>
                <Link href='/' className='hover:text-bloom-orange-100'>Inicio</Link>
              </li>
              <li className='mb-6'>
                <Link href='/carta/nikkei' className='hover:text-bloom-orange-100'>Carta Nikkei</Link>
              </li>
              <li>
                <Link href='/carta/drinks' className='hover:text-bloom-orange-100'>Carta Bar</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='text-bloom-softGray-100'>
              <li className='mb-6'>
                <Link href='/contacto' className='hover:text-bloom-orange-100'>Reserva</Link>
              </li>
              <li className='mb-6'>
                <Link href='/contacto' className='hover:text-bloom-orange-100'>Contacto</Link>
              </li>
              <li>
                <a href='mailto:manuel@bloombar.cl' className='hover:text-bloom-orange-100'>Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <ul className='text-bloom-softGray-100 h-full flex flex-col justify-between gap-8 md:gap-0'>
            <li>
              <a href='/' className='hover:text-bloom-orange-100'>
                Av. Borgoño 15480
                <br />
                Reñaca, Valparaíso, Chile.
              </a>
            </li>
            <li>
              <a href='mailto:contacto@bloombar.cl' className='text-bloom-orange-100 hover:underline'>
                contacto@bloombar.cl
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' /> */}
      <div className='pt-10 pb-5 pl-5 pr-5 sm:flex sm:items-center sm:justify-between md:px-10 md:pt-14 lg:pt-16 text-bloom-softGray-100 opacity-60'>
        <span className='text-sm sm:text-center'>© 2022 <a href='/' className='hover:text-bloom-orange-100'>Bloom Bar</a>.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <span className='text-sm'>Diseño y desarrollo por {' '}
            <a href='https://www.sebastianhansonstudio.com' rel='noopener noreferrer' target='_blank' className='underline hover:text-bloom-orange-100'>
              Sebastian Hanson Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
