import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'

const HomeSectionTwo = ({ sectionTwoPost }) => {
  return (
    <div data-scroll-section className='bg-bloom-softGray-100 grid place-items-center grid-cols-1 sm:grid-cols-landscape md:grid-cols-2'>
      <div className='overflow-hidden h-full'>
        <Image
          data-scroll
          data-scroll-speed='1'
          width={630}
          height={515}
          className='object-cover w-full h-full -mt-[15%] min-h-[130%]'
          alt={sectionTwoPost?.leftImageSecondSection?.title}
          src={sectionTwoPost?.leftImageSecondSection?.url}
        />
      </div>
      <div className='flex flex-col justify-center items-center sm:items-start text-bloom-darkGreen-100 py-[60px] px-[30px] md:p-[83px]'>
        <p className='text-sm text-center sm:text-start sm:text-base max-w-[364px] font-abel'>
          {sectionTwoPost?.descriptionSecondSection}
        </p>
        <div className='flex-col lg:flex lg:flex-row mt-5 text-center sm:text-start'>
          <Link href={sectionTwoPost?.leftButtonSecondSection.link} className='min-w-fit'>
            <Button className='hover:border-bloom-orange-100 hover:bg-bloom-orange-100 hover:text-bloom-softGray-100'>
              {sectionTwoPost?.leftButtonSecondSection.title?.toUpperCase()}
            </Button>
          </Link>
          <div className='mt-5 lg:ml-5' />
          <Link href={sectionTwoPost?.rightButtonSecondSection.link} className='min-w-fit'>
            <Button className='hover:border-bloom-orange-100 hover:bg-bloom-orange-100 hover:text-bloom-softGray-100'>
              {sectionTwoPost?.rightButtonSecondSection.title?.toUpperCase()}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeSectionTwo
