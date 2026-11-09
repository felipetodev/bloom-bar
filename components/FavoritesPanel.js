import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import Dish from './menu/Dish'
import CloseIcon from '../ui/CloseIcon'
import useScrollLock from '../hooks/useScrollLock'
import { useFavorites } from '../context/FavoritesContext'

const FavoritesPanel = ({ dishes = [], onClose }) => {
  const { favorites } = useFavorites()
  const items = useMemo(() => {
    const byId = new Map(dishes.map((dish) => [dish.id, dish]))
    return favorites.map((id) => byId.get(id)).filter(Boolean)
  }, [favorites, dishes])

  useScrollLock()

  // the navbar band is not fixed on the carta, so go to the top to align it with the panel,
  // and put the page back where it was on close ('instant': the carta has smooth scroll-behavior)
  useEffect(() => {
    const previousY = window.scrollY
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => window.scrollTo({ top: previousY, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  // .scroll-container (the whole page, navbar included) is z-100; the panel starts under the navbar band so its heart and burger stay reachable
  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Favoritos'
      className='fixed inset-x-0 bottom-0 top-[120px] sm:top-28 z-[101] overflow-y-auto bg-bloom-softGray-100 font-manrope text-bloom-darkGreen-100'
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
        {items.length === 0
          ? <p className='py-10 text-center font-bold'>Aún no tienes favoritos</p>
          : (
            <ul className='mt-6 flex flex-col gap-3'>
              {items.map((dish) => (
                <Dish
                  key={dish.id}
                  id={dish.id}
                  title={dish.title}
                  price={dish.price}
                  hasTitle={dish.uniqueTitle}
                  description={dish.description}
                  isVegan={dish.vegan}
                  image={dish.image}
                />
              ))}
            </ul>
            )}
      </div>
    </div>,
    document.body
  )
}

export default FavoritesPanel
