const Footer = () => {
  return (
    <footer className='bg-bloom-black-100'>
      <div className='md:flex md:justify-between px-5 pt-8 sm:px-10 md:px-14 md:pt-14'>
        <div className='mb-6 md:mb-0'>
          <a href='#' className='flex items-center'>
            <img src='/bloomlogo.svg' alt='Bloom Logo' className='w-20 sm:w-28 md:w-32 -ml-3' />
          </a>
        </div>
        <div className='mt-16 grid grid-cols-2 gap-8 sm:gap-6 md:mt-0'>
          <div>
            <ul className='text-bloom-softGray-100'>
              <li className='mb-6'>
                <a href='#' className='hover:underline'>Inicio</a>
              </li>
              <li className='mb-6'>
                <a href='#' className='hover:underline'>Carta Nikkei</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Carta Bar</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className='text-bloom-softGray-100'>
              <li className='mb-6'>
                <a href='#' className='hover:underline'>Reserva</a>
              </li>
              <li className='mb-6'>
                <a href='#' className='hover:underline'>Contacto</a>
              </li>
              <li>
                <a href='mailto:manuel@bloombar.cl' className='hover:underline'>Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <ul className='text-bloom-softGray-100 h-full flex flex-col justify-between gap-8 md:gap-0'>
            <li>
              <a href='#' className='hover:underline'>
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
        <span className='text-sm sm:text-center'>© 2022 <a href='#' className='hover:underline'>Bloom Bar</a>.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <span className='text-sm'>Diseño y desarrollo por {' '}
            <a href='#' className='underline hover:text-bloom-orange-100'>
              Sebastian Hanson Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
