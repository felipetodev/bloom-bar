import Image from 'next/image'
import chef from '../public/chef.jpeg'
import Button from '../ui/Button'

const HomeSectionTwo = () => {
  return (
    <div className='bg-bloom-softGray-100 grid grid-cols-1 sm:grid-cols-landscape md:grid-cols-2'>
      <div className='overflow-hidden'>
        <Image className='object-cover w-full h-full' alt='showroom' src={chef} placeholder='blur' />
      </div>
      <div className='flex flex-col items-center sm:items-start text-bloom-darkGreen-100 py-[60px] px-[30px] md:p-[83px] lg:py-[229px] lg:px-[118px]'>
        <p className='text-sm sm:text-base max-w-[364px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex-col lg:flex lg:flex-row mt-5'>
          <Button>
            CARTA NIKKEI
          </Button>
          <div className='mt-5 lg:ml-5' />
          <Button>
            CARTA BAR
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionTwo
