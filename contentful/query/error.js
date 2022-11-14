export const GET_ERROR_ENTRY = `
query GetLayoutPage($slug: String!) {
  errorPageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      footer {
        title
        firstColumnCollection {
          items {
            sys { 
              id
            }
            title
            link
          }
        }
        secondColumnCollection {
          items {
            sys {
              id
            }
            title
            link
          }
        }
        direction
        directionLink
        contact
        contactLink
        copyright
      }
    }
  }
}
`
