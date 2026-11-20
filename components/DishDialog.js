import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import CloseIcon from '../ui/CloseIcon'
import formatPrice from '../utils/formatPrice'
import useScrollLock from '../hooks/useScrollLock'
import { DishTags, fullImage, thumbnail } from './menu/Dish'

const TRANSITION = 'duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] data-[leave]:duration-150'

// Headless UI locks the scroll on <html>, which would break the sticky navbar (see useScrollLock), so on the carta
// that lock is cancelled in globals.css and the page is locked on <body> instead while the panel is mounted
const ScrollLock = () => {
  useScrollLock()
  return null
}

// dish detail: photo on top and the whole description below (the card in the list clamps it on mobile).
// `dish` stays set while the dialog closes, so the content doesn't empty out during the leave transition
const DishDialog = ({ isOpen, dish, onClose }) => {
  const { title, uniqueTitle, description, price, vegan, spicy, image } = dish ?? {}
  const hasTags = vegan || spicy > 0

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-[999]'>
      <DialogBackdrop
        transition
        className={`fixed inset-0 bg-bloom-darkGreen-100/80 transition-opacity data-[closed]:opacity-0 ${TRANSITION}`}
      />
      <div className='fixed inset-0 flex items-center justify-center p-3 sm:p-6'>
        <DialogPanel
          transition
          // from md the panel grows with the viewport height (the photo is a square as wide as the panel), leaving room for the text below
          className={`relative flex max-h-full w-full sm:max-w-md md:max-w-[min(42rem,calc(100dvh-16rem))] flex-col overflow-hidden rounded-2xl bg-[#EDE8E4] font-manrope text-bloom-darkGreen-100 shadow-xl transition-[opacity,transform] data-[closed]:opacity-0 motion-safe:data-[closed]:scale-95 ${TRANSITION}`}
        >
          <ScrollLock />
          {/* outside the scroll area so it stays reachable when a long description scrolls */}
          <button
            type='button'
            aria-label='Cerrar'
            onClick={onClose}
            className='absolute right-2 top-2 z-10 flex size-10 items-center justify-center rounded-full text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.6)] outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-bloom-orange-200'
          >
            <CloseIcon className='size-7' />
          </button>
          <div className='overflow-y-auto overscroll-contain'>
            {image?.url
              ? (
                <img
                  src={fullImage(image.url)}
                  alt=''
                  width={image.width}
                  height={image.height}
                  // the list thumbnail is already cached, so it fills in while the larger image loads
                  // mobile keeps the photo's own proportion (reserved up front, so nothing shifts on load); from sm it's cropped to a square
                  style={{
                    backgroundImage: `url(${thumbnail(image.url)})`,
                    '--ratio': image.width && image.height ? `${image.width} / ${image.height}` : 'auto'
                  }}
                  className='block aspect-[var(--ratio)] sm:aspect-square h-auto w-full bg-cover bg-center object-cover'
                />
                )
              : null}
            <div className='p-5 sm:p-6 md:p-8'>
              <DialogTitle className='text-xl md:text-2xl font-bold leading-snug'>{title}</DialogTitle>
              {!uniqueTitle && description
                ? <p className='mt-1 md:mt-2 font-medium !text-[15px] md:!text-base !leading-relaxed'>{description}</p>
                : null}
              {price || hasTags
                ? (
                  <div className='mt-4 md:mt-6 flex items-center justify-between gap-4'>
                    <span className='text-lg font-bold text-[#DB7526]'>{formatPrice(price)}</span>
                    {hasTags ? <DishTags isVegan={vegan} spicy={spicy} /> : null}
                  </div>
                  )
                : null}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default DishDialog
