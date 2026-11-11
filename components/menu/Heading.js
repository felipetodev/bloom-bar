import Image from 'next/image'

const Heading = ({ title, subtitle, image }) => {
  return (
    <div className='relative flex items-center pb-4 sm:pb-10 z-10'>
      {image?.url
        ? (
          <Image
            src={image.url}
            width={220}
            height={220}
            alt={image.title || title || ''}
            className='mr-4 sm:mr-10 h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] shrink-0 object-contain'
            quality={100}
          />
          )
        : null}
      <h2 className='font-bold text-xl sm:text-[30px] text-bloom-darkGreen-100 tracking-bloom max-w-min sm:min-w-[200px] text-balance md:min-w-fit leading-tight'>
        {title}
      </h2>
      <div
        aria-hidden
        className="ml-3 sm:ml-5 sm:mr-5 min-w-[28px] flex-grow h-[6px] bg-[url('/section-line.svg')] bg-[length:563px_6px] bg-repeat-x bg-left"
      />
      {subtitle && (
        <h3 className='ml-4 text-lg text-bloom-darkGreen-100 min-w-fit text-end'>
          {subtitle}
        </h3>
      )}
    </div>
  )
}

export default Heading
