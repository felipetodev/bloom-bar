import Image from 'next/image'
import VeganIcon from '../../ui/VeganIcon'
import { isDesktop } from '../../utils/isDesktop'
import formatPrice from '../../utils/formatPrice'

const imageCache = {}

const Dish = ({
  title,
  hasTitle,
  description,
  price,
  isVegan,
  image,
  onSelectImage
}) => {
  const handlePreloadImage = () => {
    if (!isDesktop()) return
    if (image?.url && !imageCache[image.url]) {
      const img = new window.Image()
      img.src = image.url
      imageCache[image.url] = img
    }
  }

  return (
    <div className='relative z-10 flex gap-4 rounded-2xl bg-[#EDE8E4] p-4 sm:p-5 text-[#151B15] font-manrope'>
      <div className='flex min-w-0 flex-1 flex-col justify-between gap-4'>
        <div>
          <h3 className='text-[17px] sm:text-[22px] font-bold leading-snug'>{title}</h3>
          {!hasTitle && description && (
            <p className='mt-1 font-medium !text-[15px]'>{description}</p>
          )}
        </div>
        {(price || isVegan) && (
          <div className='flex items-end justify-between gap-4'>
            <span className='text-sm sm:text-lg font-bold text-[#DB7526]'>{formatPrice(price)}</span>
            {isVegan && <VeganIcon className='text-[#479149]' />}
          </div>
        )}
      </div>
      {image?.url && (
        <button
          type='button'
          onMouseEnter={handlePreloadImage}
          onClick={onSelectImage}
          aria-label={`Ver imagen de ${title}`}
          className='shrink-0 self-start overflow-hidden rounded-lg outline-none focus:outline-none'
        >
          <Image
            src={image.url}
            width={240}
            height={240}
            alt={image.title || title || ''}
            className='size-24 sm:size-36 aspect-square object-cover'
          />
        </button>
      )}
    </div>
  )
}

export default Dish
