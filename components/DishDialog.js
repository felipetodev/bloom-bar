import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import CloseIcon from '../ui/CloseIcon'
import formatPrice from '../utils/formatPrice'
import useScrollLock from '../hooks/useScrollLock'
import { DishTags, fullImage, thumbnail } from './menu/Dish'

const TRANSITION = 'duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] data-[leave]:duration-150'

const ScrollLock = () => {
  useScrollLock()
  return null
}

const DishDialog = ({ isOpen, dish, onClose }) => {
  const { title, uniqueTitle, description, price, vegan, spicy, image } = dish ?? {}
  const hasTags = vegan || spicy > 0

  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-[999]'>
      <DialogBackdrop
        transition
        className={`fixed inset-0 bg-bloom-darkGreen-100/80 transition-opacity data-[closed]:opacity-0 ${TRANSITION}`}
      />
      {/* p-5: same side margin as the page content on mobile, so the panel lines up with the dish cards */}
      <div className='fixed inset-0 flex items-center justify-center p-5 sm:p-6'>
        <DialogPanel
          transition
          // from md the panel grows with the viewport height (the photo is a square as wide as the panel), leaving room for the text below
          className={`relative flex max-h-full w-full sm:max-w-md md:max-w-[min(32rem,calc(100dvh-16rem))] flex-col overflow-hidden rounded-2xl bg-[#EDE8E4] font-manrope text-bloom-darkGreen-100 shadow-xl transition-[opacity,transform] data-[closed]:opacity-0 motion-safe:data-[closed]:scale-95 ${TRANSITION}`}
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
                  style={{ backgroundImage: `url(${thumbnail(image.url)})` }}
                  // always 1:1 (the photos are uploaded square; any other proportion is cropped to fit)
                  className='block aspect-square h-auto w-full bg-cover bg-center object-cover'
                />
                )
              : null}
            <div className='p-5 sm:p-6 md:p-8'>
              <DialogTitle className='text-[17px] sm:text-[22px] font-bold leading-snug'>{title}</DialogTitle>
              {!uniqueTitle && description
                ? <p className='mt-1 font-medium !text-[15px] max-sm:!text-[13px] max-sm:!leading-5'>{description}</p>
                : null}
              {price || hasTags
                ? (
                  <div className='mt-4 md:mt-6 flex items-center justify-between gap-4'>
                    <span className='text-[15px] sm:text-lg font-bold text-bloom-orange-200'>{formatPrice(price)}</span>
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
