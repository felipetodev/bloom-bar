import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import chef from '../public/chef.jpeg'

const HomeSectionTwo = () => {
  return (
    <div data-scroll-section className='bg-bloom-softGray-100 grid place-items-center grid-cols-1 sm:grid-cols-landscape md:grid-cols-2'>
      <div className='overflow-hidden h-full'>
        <Image
          data-scroll
          data-scroll-speed='1'
          className='object-cover w-full h-full -mt-[15%] min-h-[130%]'
          alt='showroom'
          src={chef}
          placeholder='blur'
        />
      </div>
      <div className='flex flex-col justify-center items-center sm:items-start text-bloom-darkGreen-100 py-[60px] px-[30px] md:p-[83px]'>
        <p className='text-sm text-center sm:text-start sm:text-base max-w-[364px] font-abel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex-col lg:flex lg:flex-row mt-5 text-center sm:text-start'>
          <Link href='/carta/nikkei' className='min-w-fit'>
            <Button className='hover:border-bloom-orange-200 hover:bg-bloom-orange-200 hover:text-bloom-softGray-100'>
              CARTA NIKKEI
            </Button>
          </Link>
          <div className='mt-5 lg:ml-5' />
          <Link href='/carta/drinks' className='min-w-fit'>
            <Button className='hover:border-bloom-orange-200 hover:bg-bloom-orange-200 hover:text-bloom-softGray-100'>
              CARTA BAR
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionTwo
