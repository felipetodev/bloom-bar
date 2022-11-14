export const GET_LOCATION_ENTRY = `
query GetLayoutPage($slug: String!) {
  locationPageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      navbarButton {
        title
        link
      }
      orangeTitle
      subtitle
      buttonCopy
      buttonLink
      carouselGalleryCollection {
        items {
          sys {
            id
          }
          title
          image {
            title
            url
          }
        }
      }
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
