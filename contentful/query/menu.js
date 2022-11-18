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
      desktopSection1LeftCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      desktopSection1RightCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      firstDivider {
        title
        mainTitle
      }
      desktopSection2LeftCollection(limit: 12) {
        items {
          ...MenuSectionDetails
        }
      }
      desktopSection2RightCollection(limit: 12) {
        items {
          ...MenuSectionDetails
        }
      }
      secondDivider {
        title
        mainTitle
      }
      desktopSection3LeftCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      desktopSection3RightCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      thirdDivider {
        title
        mainTitle
      }
      desktopSection4LeftCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      desktopSection4RightCollection(limit: 5) {
        items {
          ...MenuSectionDetails
        }
      }
      menuCategoriesCollection(limit: 40) {
        items {
          ...MenuSectionDetails
          ...DividerDetails
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

fragment DividerDetails on Divider {
  sys {
   id
 }
 mainTitle 
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
          ...DividerDetails
          ...MenuSectionDetails
        }
      }
    }
  }
}

fragment DividerDetails on Divider {
   sys {
    id
  }
  mainTitle 
}

fragment MenuSectionDetails on MenuSection {
  sys {
    id
  }
  title
  navbarIsland
}
`
