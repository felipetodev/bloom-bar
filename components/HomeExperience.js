// import FlameIcon from '../ui/FlameIcon'
import Image from 'next/image'

const HomeExperience = ({ experiencePost }) => {
  return (
    <section data-scroll-section className='relative bg-bloom-darkGreen-100 py-[60px] px-[30px] md:py-[148px] md:px-[100px] lg:px-[269px] lg:py-[148px] overflow-hidden'>
      <div className='relative z-10 md:z-auto flex flex-col items-center text-bloom-softGray-100 text-center gap-7'>
        <h2 className='text-2xl'>{experiencePost.titleFirstSection}</h2>
        <p className='text-lg max-w-bloom font-abel leading-[25px] sm:leading-[35px] sm:text-xl'>
          {experiencePost?.descriptionFirstSection}
        </p>
        <span className='text-bloom-softGray-100 mx-auto'>
          <Image src='/bien-flama-gris.gif' alt='flame icon' width={16} height={21} />
          {/* <FlameIcon /> */}
        </span>
      </div>
      <div data-scroll data-scroll-speed='3' className='absolute top-20 -left-24 md:-left-8 blur-sm select-none pointer-events-none'>
        <img src='/plant.svg' alt='bloom plant' />
      </div>
    </section>
  )
}

export default HomeExperience
