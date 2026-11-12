import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'
import HeartIcon from '../ui/HeartIcon'
import { useFavorites } from '../context/FavoritesContext'

const FavoritesPanel = dynamic(() => import('./FavoritesPanel'), { ssr: false })

export const FavoritesControl = ({ dishes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { count, retainFavorites } = useFavorites()

  // keep the client storage in sync with the CMS: forget favorites whose dish no longer exists
  // (an empty list means the data is missing, not that every dish was removed)
  useEffect(() => {
    if (dishes?.length) retainFavorites(new Set(dishes.map((dish) => dish.id)))
  }, [dishes, retainFavorites, count])

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup='dialog'
        aria-label={`Favoritos (${count})`}
        className='relative flex items-center justify-center text-bloom-darkGreen-100'
      >
        <HeartIcon className='size-6 sm:size-7' />
        {count > 0 && (
          <span className='absolute -right-[7px] -top-[4px] flex size-4 min-w-4 items-center justify-center rounded-full bg-[#ED1C24] px-1 text-[10px] font-bold leading-none text-white'>
            {count}
          </span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && <FavoritesPanel dishes={dishes} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
