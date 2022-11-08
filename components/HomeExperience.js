import FlameIcon from '../ui/FlameIcon'

const HomeExperience = () => {
  return (
    <section className='relative bg-bloom-darkGreen-100 py-[60px] px-[30px] md:py-[148px] md:px-[100px] lg:px-[269px] lg:py-[148px] overflow-hidden'>
      <div className='flex flex-col text-bloom-softGray-100 text-center gap-7 relative z-10'>
        <h2 className='text-2xl'>EXPERIENCIA RABATA NIKKEI EN LA QUINTA COSTA</h2>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span className='text-bloom-softGray-100 mx-auto'>
          <FlameIcon />
        </span>
      </div>
      <div className='absolute top-0 -left-8'>
        <img src='/plant.svg' alt='bloom plant' />
      </div>
    </section>
  )
}

export default HomeExperience
