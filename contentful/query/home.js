export const GET_HOME_ENTRY = `
query GetLayoutPage($slug: String!) {
  homePageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      navbarButton {
        title
        link
      }
      video {
        title
        url
      }
      image {
        title
        url
      }
      titleFirstSection
      descriptionFirstSection
      leftImageSecondSection {
        title
        url
      }
      descriptionSecondSection
      leftButtonSecondSection {
        title
        link
      }
      rightButtonSecondSection {
        title
        link
      }
      promotionSection {
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
