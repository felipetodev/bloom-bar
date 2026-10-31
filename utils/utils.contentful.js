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
    menuCategories: menuData.menuCategories
      // dividers (mainTitle) are not navigation categories
      .filter((category) => !category.mainTitle)
      .map((category) => ({
        id: category.id,
        title: category.title ?? null
      }))
  }
}
