import Image from 'next/image'

const Hero = ({ image, video }) => {
  return (
    <div data-scroll-section className='relative w-full h-screen'>
      <video
        poster={image?.url}
        className='w-full h-full object-cover brightness-50'
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={video?.url} alt={video?.title} type='video/mp4' />
      </video>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
        <Image
          priority
          className='drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]'
          src='/bloomlogo.svg'
          alt='Bloom Logo'
          width={300}
          height={127.79}
        />
      </div>
    </div>
  )
}

export default Hero
