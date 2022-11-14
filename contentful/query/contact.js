export const GET_CONTACT_ENTRY = `
query GetLayoutPage($slug: String!) {
  contactPageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      navbarButton {
        title
        link
      }
      image {
        title
        url
      }
      formTitle
      contactUs
      number
      numberLink
      email
      emailLink
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
