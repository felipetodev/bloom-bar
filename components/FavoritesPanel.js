import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion'
import Dish from './menu/Dish'
import CloseIcon from '../ui/CloseIcon'
import useScrollLock from '../hooks/useScrollLock'
import { useFavorites } from '../context/FavoritesContext'

const EASE_OUT = [0.23, 1, 0.32, 1]
const EASE_IN_OUT = [0.77, 0, 0.175, 1]

// gap between dishes in px (gap-3): the leaving dish cancels it with a negative margin as it collapses
const LIST_GAP = 12

// a dish removed from favorites fades out and collapses, so the ones below slide up to close the gap.
// It collapses in the flow (height) instead of being popped out with transforms: the panel then shrinks
// little by little, and when it's scrolled to the bottom the browser follows it frame by frame instead of
// re-clamping the scroll position in one jump
const FavoriteItem = ({ reduceMotion, children }) => {
  const isPresent = useIsPresent()

  return (
    <motion.li
      // reduced motion: only the fade, the list closes the gap at once when the dish is gone
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, height: 0, marginBottom: -LIST_GAP }}
      transition={{
        // plain easeOut for the fade: the strong EASE_OUT spends nearly all the opacity in the first 100ms, which reads as a cut
        duration: 0.25,
        ease: 'easeOut',
        height: { duration: 0.3, ease: EASE_IN_OUT },
        marginBottom: { duration: 0.3, ease: EASE_IN_OUT }
      }}
      // while leaving: clipped as it collapses, and its heart can't be tapped again (that would add the dish back mid-exit)
      className={isPresent ? undefined : 'pointer-events-none overflow-hidden'}
    >
      {children}
    </motion.li>
  )
}

const FavoritesPanel = ({ dishes = [], onClose }) => {
  const reduceMotion = useReducedMotion()
  const isPresent = useIsPresent()
  const offsetY = reduceMotion ? 0 : -8
  const { favorites } = useFavorites()
  const items = useMemo(() => {
    const byId = new Map(dishes.map((dish) => [dish.id, dish]))
    return favorites.map((id) => byId.get(id)).filter(Boolean)
  }, [favorites, dishes])
  // the empty message only fades in when the last favorite is removed, not when the panel opens already empty
  const [openedEmpty] = useState(items.length === 0)

  useScrollLock()

  // start right below the band, whose height depends on whether it's collapsed (scroll is locked while open)
  const [top] = useState(() => document.querySelector('[data-menu-band]')?.getBoundingClientRect().bottom)

  // keep the latest onClose in a ref so the listener isn't re-bound on every parent render (the parent passes an inline arrow)
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  // only listen while the panel is present: during the exit animation isPresent is false, so a second Esc is ignored
  useEffect(() => {
    if (!isPresent) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onCloseRef.current()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isPresent])

  // .scroll-container (the whole page, navbar included) is z-100; the panel starts under the navbar band so its heart and burger stay reachable
  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Favoritos'
      className='fixed inset-x-0 bottom-0 top-[var(--menu-navbar-h)] z-[101] overflow-hidden'
      style={top === undefined ? undefined : { top }}
    >
      <motion.div
        initial={{ opacity: 0, y: offsetY }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: offsetY }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className='h-full overflow-y-auto bg-bloom-softGray-100 font-manrope text-bloom-darkGreen-100'
      >
        <div className='mx-auto w-full max-w-[600px] md:max-w-[800px] px-5 sm:px-10 md:px-0 pb-14'>
          <div className='flex items-center justify-between border-b border-bloom-darkGreen-100/15 py-6'>
            <h2 className='text-lg sm:text-xl font-bold uppercase'>
              Tus favoritos ({items.length})
            </h2>
            <button type='button' aria-label='Cerrar favoritos' onClick={onClose} className='flex items-center justify-center'>
              <CloseIcon />
            </button>
          </div>
          <ul className='mt-6 flex flex-col gap-3'>
            <AnimatePresence initial={false}>
              {items.map((dish) => (
                <FavoriteItem key={dish.id} reduceMotion={reduceMotion}>
                  <Dish
                    as='div'
                    id={dish.id}
                    title={dish.title}
                    price={dish.price}
                    hasTitle={dish.uniqueTitle}
                    description={dish.description}
                    isVegan={dish.vegan}
                    spicy={dish.spicy}
                    image={dish.image}
                  />
                </FavoriteItem>
              ))}
            </AnimatePresence>
          </ul>
          {items.length === 0
            ? (
              <motion.p
                initial={openedEmpty ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                // waits for the last dish to finish collapsing (FavoriteItem exit), so it isn't seen sliding up below it
                transition={{ duration: 0.2, delay: 0.3, ease: 'easeOut' }}
                className='py-4 text-center font-bold'
              >
                Aún no tienes favoritos
              </motion.p>
              )
            : null}
        </div>
      </motion.div>
    </div>,
    document.body
  )
}

export default FavoritesPanel
