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
      const { width, height } = value.details?.image ?? {}
      // real image size, so <Image> can reserve the right aspect ratio and avoid layout shift on load
      // (conditional spread: getStaticProps cannot serialize undefined)
      return { ...acc, url: `https:${value.url}`, ...(width && height ? { width, height } : {}) }
    }

    return { ...acc, [key]: value }
  }, {})
}

export const createCategoryNav = (menuData) => {
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

// every dish of the menu in a single list (used by the favorites panel)
export const flattenDishes = (menuData) =>
  menuData?.menuCategories?.flatMap((category) => category.dishes ?? []) ?? []
