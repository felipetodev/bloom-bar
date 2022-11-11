import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <video
        poster='/hero-home.jpeg'
        className='w-full h-full object-cover brightness-50'
        playsInline
        autoPlay
        muted
        loop
      >
        <source src='/bloom-hero.mp4' alt='bloom video' type='video/mp4' />
      </video>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
        <Image priority className='drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]' src='/bloomlogo.svg' alt='Bloom Logo' width={300} height={127.79} />
      </div>
    </div>
  )
}

export default Hero
