import Image from 'next/image'
import Button from '../ui/Button'
import FlowerIcon from '../ui/FlowerIcon'

const Promotion = ({ hasFlower, hasGradient, promotionSection }) => {
  return (
    <div data-scroll-section id='promotion' className='relative'>
      <Image width={1440} height={700} className='max-h-[700px] min-h-[450px] object-cover w-full h-full' alt={promotionSection?.image?.title} src={promotionSection?.image?.url} />
      <div className='absolute top-0 left-0 h-full w-full bg-promotion-gradient' />
      <div className='absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-5 sm:px-10 md:px-14'>
        <h2 className='text-2xl text-bloom-orange-100 mb-4'>
          {promotionSection?.firstTitle}
        </h2>
        <div className='flex flex-col text-bloom-softGray-100'>
          <h1
            className='text-[40px] sm:text-[70px] leading-[50px] sm:leading-[80px]' dangerouslySetInnerHTML={{
              __html: promotionSection?.description
            }}
          />
        </div>
        <a href={promotionSection?.promotionButton?.link} rel='noopener noreferrer' target='_blank' className='mt-4'>
          <Button className='hover:border-bloom-orange-100 hover:bg-bloom-orange-100 hover:text-bloom-softGray-100' variant='secondary'>
            {promotionSection?.promotionButton?.title}
          </Button>
        </a>
      </div>
      {hasFlower && (
        <div className='absolute z-20 text-bloom-orange-100 top-[0px] left-1/2 sm:left-[42.92%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <FlowerIcon style={{ width: 53, height: 53 }} />
        </div>
      )}
      <div className='absolute bottom-0 top-0 left-0 right-0 bg-bottom-island-gradient' />
    </div>
  )
}

export default Promotion
