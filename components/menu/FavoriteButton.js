import { useState } from 'react'
import clsx from 'clsx'
import HeartIcon from '../../ui/HeartIcon'
import { useFavorites } from '../../context/FavoritesContext'

const FavoriteButton = ({ id, title, stroke = '#E0E0E0', className = '' }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(id)
  // set only by the user's own like, so stored favorites don't burst on load or when the favorites panel opens
  const [isBursting, setIsBursting] = useState(false)
  // the light outline needs a shadow to read over photos; the dark one sits on the card background
  const shadow = stroke === '#E0E0E0' ? 'drop-shadow-[0_0_2px_rgba(0,0,0,0.4)]' : ''

  return (
    <button
      type='button'
      onClick={() => {
        setIsBursting(!active)
        toggleFavorite(id)
      }}
      aria-pressed={active}
      aria-label={active ? `Quitar ${title} de favoritos` : `Agregar ${title} a favoritos`}
      className={`flex size-6 items-center justify-center rounded-md outline-none before:absolute before:-inset-2 before:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#DB7526] ${className}`}
    >
      {/* ring that expands out of the heart; invisible (opacity-0) when the animation doesn't run under reduced motion */}
      {isBursting
        ? (
          <span
            aria-hidden='true'
            onAnimationEnd={() => setIsBursting(false)}
            className='pointer-events-none absolute inset-0 rounded-full border-2 border-[#ED1C24] opacity-0 motion-safe:animate-heart-ring'
          />
          )
        : null}
      <HeartIcon
        filled={active}
        stroke={stroke}
        className={clsx('size-6', shadow, isBursting && 'motion-safe:animate-heart-pop')}
      />
    </button>
  )
}

export default FavoriteButton
