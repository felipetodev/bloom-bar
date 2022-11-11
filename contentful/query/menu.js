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
      menuCategoriesCollection {
        items {
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
      }
    }
  }
}
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
