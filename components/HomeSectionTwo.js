import Image from 'next/image'
import chef from '../public/chef.jpeg'
import Button from '../ui/Button'
import FlowerIcon from '../ui/FlowerIcon'
import Link from 'next/link'

const HomeSectionTwo = () => {
  return (
    <div className='relative bg-bloom-softGray-100 grid place-items-center grid-cols-1 sm:grid-cols-landscape md:grid-cols-2'>
      <div className='overflow-hidden h-full'>
        <Image className='object-cover w-full h-full' alt='showroom' src={chef} placeholder='blur' />
      </div>
      <div className='flex flex-col justify-center items-center sm:items-start text-bloom-darkGreen-100 py-[60px] px-[30px] md:p-[83px]'>
        <p className='text-sm text-center sm:text-start sm:text-base max-w-[364px] font-abel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex-col lg:flex lg:flex-row mt-5 text-center sm:text-start'>
          <Link href='/carta/nikkei' className='min-w-fit'>
            <Button>
              CARTA NIKKEI
            </Button>
          </Link>
          <div className='mt-5 lg:ml-5' />
          <Link href='/carta/drinks' className='min-w-fit'>
            <Button>
              CARTA BAR
            </Button>
          </Link>
        </div>
      </div>
      <div className='text-bloom-orange-100 z-20 absolute -bottom-[30px] left-1/2 sm:left-[43%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <FlowerIcon />
      </div>
    </div>
  )
}

export default HomeSectionTwo
