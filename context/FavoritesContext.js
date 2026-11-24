import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'bloom:favorites'

const FavoritesContext = createContext({
  favorites: [],
  count: 0,
  isFavorite: () => false,
  toggleFavorite: () => {},
  retainFavorites: () => {}
})

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [hydrated, setHydrated] = useState(false)

  // read after mount so SSR and first client render match
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
      if (Array.isArray(stored)) setFavorites(stored)
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {}
  }, [favorites, hydrated])

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])
  }, [])

  // drops ids that no longer exist (e.g. a dish deleted from the CMS); no-op when nothing changes
  const retainFavorites = useCallback((validIds) => {
    setFavorites((prev) => {
      const next = prev.filter((id) => validIds.has(id))
      return next.length === prev.length ? prev : next
    })
  }, [])

  const value = useMemo(() => ({
    favorites,
    count: favorites.length,
    isFavorite: (id) => favorites.includes(id),
    toggleFavorite,
    retainFavorites
  }), [favorites, toggleFavorite, retainFavorites])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => useContext(FavoritesContext)
