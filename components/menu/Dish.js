import Image from 'next/image'
import VeganIcon from '../../ui/VeganIcon'
import { isDesktop } from '../../utils/isDesktop'
import formatPrice from '../../utils/formatPrice'
import FavoriteButton from './FavoriteButton'

const imageCache = {}

// next/image is `unoptimized` here, so ask Contentful for a thumbnail instead of the full-size original (shown at 128-144px, so 288 is 2x)
const thumbnail = (url) => `${url}?w=288&h=288&fit=fill&fm=webp&q=80`

const Dish = ({
  id,
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

  const dishImage = image?.url && (
    <Image
      src={thumbnail(image.url)}
      width={240}
      height={240}
      alt=''
      className='size-32 sm:size-36 aspect-square object-cover'
    />
  )

  return (
    <li className='relative z-10 flex gap-4 rounded-2xl bg-[#EDE8E4] p-4 sm:p-5 text-bloom-darkGreen-100 font-manrope'>
      <div className='flex min-w-0 flex-1 flex-col justify-between gap-4'>
        <div>
          <h3 className={`text-[17px] sm:text-[22px] font-bold leading-snug ${image?.url ? '' : 'pr-8'}`}>{title}</h3>
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
        <div className='relative shrink-0 self-start'>
          {onSelectImage
            ? (
              <button
                type='button'
                onMouseEnter={handlePreloadImage}
                onClick={onSelectImage}
                aria-label={`Ver imagen de ${title}`}
                aria-haspopup='dialog'
                className='block overflow-hidden rounded-lg scroll-mt-20 outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#DB7526]'
              >
                {dishImage}
              </button>
              )
            : <div className='overflow-hidden rounded-lg'>{dishImage}</div>}
          <FavoriteButton id={id} title={title} className='absolute right-1.5 top-1.5' />
        </div>
      )}
      {!image?.url && (
        <FavoriteButton id={id} title={title} stroke='#151B14' className='absolute right-4 top-4 sm:right-5 sm:top-5' />
      )}
    </li>
  )
}

export default Dish
