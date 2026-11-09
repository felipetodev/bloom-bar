import HeartIcon from '../../ui/HeartIcon'
import { useFavorites } from '../../context/FavoritesContext'

const FavoriteButton = ({ id, title, stroke = '#E0E0E0', className = '' }) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(id)
  // the light outline needs a shadow to read over photos; the dark one sits on the card background
  const shadow = stroke === '#E0E0E0' ? 'drop-shadow-[0_0_2px_rgba(0,0,0,0.4)]' : ''

  return (
    <button
      type='button'
      onClick={() => toggleFavorite(id)}
      aria-pressed={active}
      aria-label={active ? `Quitar ${title} de favoritos` : `Agregar ${title} a favoritos`}
      className={`flex size-6 items-center justify-center rounded-md outline-none before:absolute before:-inset-2 before:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#DB7526] ${className}`}
    >
      <HeartIcon filled={active} stroke={stroke} className={`size-6 ${shadow}`} />
    </button>
  )
}

export default FavoriteButton
