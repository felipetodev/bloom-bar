export const normalizeContentfulData = ({ fields }) => {
  const itemsKeys = Object.keys(fields)

  return itemsKeys.reduce((acc, key) => {
    const value = fields[key]
    if (Array.isArray(value)) {
      const response = value.map((arrItem) => {
        const { sys = {} } = arrItem
        const fields = normalizeContentfulData({ fields: arrItem.fields })
        return { ...fields, id: sys.id }
      })

      return { ...acc, [key]: response }
    }
    if (typeof value === 'object' && (value.sys || key === 'fields')) {
      const response = normalizeContentfulData({ fields: value })

      return { ...acc, [key]: response.fields ?? response }
    }

    if (key === 'file') {
      return { ...acc, url: `https:${value.url}` }
    }

    return { ...acc, [key]: value }
  }, {})
}

export const createMenuIsland = (menuData) => {
  return {
    mainTitle: menuData.mainTitle,
    color: menuData.color,
    slug: menuData.slug,
    menuCategories: menuData.menuCategories.map((category) => ({
      id: category.id,
      navbarIsland: category.navbarIsland ?? false,
      // used to differentiate a divider content type (as section) in island menu 👇
      ...category.mainTitle
        ? { mainTitle: category.mainTitle }
        : { title: category.title }
    }))
  }
}
