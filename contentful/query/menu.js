export const MENU_SECTION_FRAGMENT = `
fragment MenuSectionDetails on MenuSection {
  sys {
    id
  }
  title
  subtitle
  dishesCollection {
    items {
      sys {
        id
      }
      title
      uniqueTitle
      price
      vegan
      description
    }
  }
  image {
    title
    url
  }
  card {
    title
    price
    list
  }
}
`

export const GET_MENU_ENTRY = `
query GetMenuPage($slug: String!) {
  menuCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      mainTitle
      slug
      color
      desktopRightSideCollection(limit: 11) {
        items {
          ...MenuSectionDetails
        }
      }
      desktopLeftSideCollection(limit: 11) {
        items {
          ...MenuSectionDetails
        }
      }
      menuCategoriesCollection(limit: 84) {
        items {
          ...MenuSectionDetails
        }
      }
      navbarButton {
        title
        link
      }
      promotion {
        firstTitle
        description
        promotionButton {
          title
          link
        }
        image {
          title
          url
        }
      }
    }
  }
}

${MENU_SECTION_FRAGMENT}
`

export const GET_ALL_MENU_WITH_SLUG = `
query {
  menuCollection {
    items {
      mainTitle
      color
      slug
      menuCategoriesCollection {
        items {
          sys {
            id
          }
          title
        }
      }
    }
  }
}
`