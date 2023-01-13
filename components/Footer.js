import Link from 'next/link'

const Footer = ({ footer }) => {
  const { firstColumnCollection, secondColumnCollection } = footer || {}
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
            <ul className='text-bloom-softGray-100 flex flex-col gap-6'>
              {firstColumnCollection?.items?.map((item) => (
                <li key={item.sys.id}>
                  <Link href={item.link} className='hover:text-bloom-orange-100'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className='text-bloom-softGray-100 flex flex-col gap-6'>
              {secondColumnCollection?.items?.map((item) => (
                <li key={item.sys.id}>
                  <Link href={item.link} className='hover:text-bloom-orange-100'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <ul className='text-bloom-softGray-100 h-full flex flex-col justify-between gap-8 md:gap-0'>
            <li>
              <a
                href={footer?.directionLink} className='hover:text-bloom-orange-100' dangerouslySetInnerHTML={{
                  __html: footer?.direction
                }}
              />
            </li>
            {footer?.contact && (
              <li>
                <a href={footer?.contactLink} className='text-bloom-orange-100 hover:underline'>
                  {footer?.contact}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='pt-10 pb-5 pl-5 pr-5 sm:flex sm:items-center sm:justify-between md:px-10 md:pt-14 lg:pt-16 text-bloom-softGray-100 opacity-60'>
        <span className='text-sm sm:text-center'>© {new Date().getFullYear()} <a href='/' className='hover:text-bloom-orange-100'>Bloom Bar</a>.
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
