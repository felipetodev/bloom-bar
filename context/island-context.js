import { createContext, useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

const defaultContext = {
  defaultValue: [],
  slug: '',
  menuCategoriesCollection: {
    items: []
  },
  color: 'primary'
}

export const IslandContext = createContext(defaultContext)

export const useIsland = () => useContext(IslandContext)

const IslandProvider = ({ children }) => {
  const [menu, setMenu] = useState(null)
  const router = useRouter()

  const hasQuerySlug = Boolean(router.query.slug)

  const nextMenu = hasQuerySlug
    ? menu?.find(el => el.slug !== router.query.slug)
    : menu?.find(el => el.color === 'primary')

  const updateValues = (menu) => {
    menu && setMenu(menu)
  }

  const { slug = '', menuCategoriesCollection = [] } = useMemo(() => {
    return hasQuerySlug
      ? menu?.find(el => el.slug === router.query.slug) ?? {}
      : nextMenu ?? {}
  }, [router.query.slug, nextMenu])

  const providerValue = useMemo(() => {
    return {
      hasQuerySlug,
      nextMenu,
      slug,
      updateValues,
      menuCategoriesCollection
    }
  }, [hasQuerySlug, nextMenu, menu])

  return (
    <IslandContext.Provider value={providerValue}>
      {children}
    </IslandContext.Provider>
  )
}

export default IslandProvider
