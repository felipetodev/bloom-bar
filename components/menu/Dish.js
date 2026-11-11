import Image from 'next/image'
import VeganIcon from '../../ui/VeganIcon'
import SpicyIcon from '../../ui/SpicyIcon'
import { isDesktop } from '../../utils/isDesktop'
import formatPrice from '../../utils/formatPrice'
import FavoriteButton from './FavoriteButton'

const MAX_SPICY_LEVEL = 5

const imageCache = {}

// next/image is `unoptimized` here, so ask Contentful for a thumbnail instead of the full-size original (shown at 128-144px, so 288 is 2x)
const thumbnail = (url) => `${url}?w=288&h=288&fit=fill&fm=webp&q=80`

const preloadImage = (url) => {
  if (!isDesktop() || imageCache[url]) return
  const img = new window.Image()
  img.src = url
  imageCache[url] = img
}

const SpicyLevel = ({ level }) => (
  <span className='flex items-baseline' role='img' aria-label={`Nivel de picante ${level} de ${MAX_SPICY_LEVEL}`}>
    {Array.from({ length: level }, (_, i) => <SpicyIcon key={i} className='size-4 sm:size-5' />)}
  </span>
)

const DishTags = ({ isVegan, spicy }) => (
  <div className='flex items-baseline gap-1.5'>
    {isVegan ? <VeganIcon className='text-[#479149] size-[18px] sm:size-[21px]' /> : null}
    {spicy > 0 ? <SpicyLevel level={spicy} /> : null}
  </div>
)

const DishImage = ({ id, title, url, onSelectImage }) => {
  const image = (
    <Image
      src={thumbnail(url)}
      width={240}
      height={240}
      alt=''
      className='size-32 sm:size-36 aspect-square object-cover'
    />
  )

  return (
    <div className='relative shrink-0 self-start'>
      {onSelectImage
        ? (
          <button
            type='button'
            onMouseEnter={() => preloadImage(url)}
            onClick={onSelectImage}
            aria-label={`Ver imagen de ${title}`}
            aria-haspopup='dialog'
            className='block overflow-hidden rounded-lg scroll-mt-20 outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#DB7526]'
          >
            {image}
          </button>
          )
        : <div className='overflow-hidden rounded-lg'>{image}</div>}
      <FavoriteButton id={id} title={title} className='absolute right-1.5 top-1.5' />
    </div>
  )
}

const Dish = ({
  id,
  title,
  hasTitle,
  description,
  price,
  isVegan,
  spicy,
  image,
  onSelectImage
}) => {
  const imageUrl = image?.url
  const hasTags = isVegan || spicy > 0
  const hasFooter = price || hasTags

  return (
    <li className='relative z-10 flex gap-4 rounded-2xl bg-[#EDE8E4] p-4 sm:p-5 text-bloom-darkGreen-100 font-manrope'>
      <div className='flex min-w-0 flex-1 flex-col justify-between gap-3.5'>
        <div>
          <h3 className={`text-[17px] sm:text-[22px] font-bold leading-snug ${imageUrl ? '' : 'pr-8'}`}>{title}</h3>
          {!hasTitle && description
            ? <p className='mt-1 font-medium !text-[15px]'>{description}</p>
            : null}
        </div>
        {hasFooter
          ? (
            <div className='flex items-center justify-between gap-4'>
              <span className='text-sm sm:text-lg font-bold text-[#DB7526]'>
                {formatPrice(price)}
              </span>
              {hasTags ? <DishTags isVegan={isVegan} spicy={spicy} /> : null}
            </div>
            )
          : null}
      </div>
      {imageUrl
        ? <DishImage id={id} title={title} url={imageUrl} onSelectImage={onSelectImage} />
        : <FavoriteButton id={id} title={title} stroke='#151B14' className='absolute right-4 top-4 sm:right-5 sm:top-5' />}
    </li>
  )
}

export default Dish
