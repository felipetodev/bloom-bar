
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover brightness-50'
        playsInline
        autoPlay
        muted
        loop
      >
        <source src='/bloom-hero.mp4' alt='bloom video' type='video/mp4' />
      </video>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img className='drop-shadow-3xl' src='/bloomlogo.svg' alt='Bloom Logo' width={300} />
      </div>
    </div>
  )
}

export default Hero
