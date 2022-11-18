import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import LocationHero from '../components/LocationHero'
import Navbar from '../components/Navbar'
import { getPagesBySlug } from '../contentful/api'

const LocationPage = ({ locationPosts }) => {
  const {
    orangeTitle,
    subtitle,
    buttonCopy,
    buttonLink,
    navbarButton,
    footer,
    carouselGalleryCollection
  } = locationPosts || {}
  const locationPost = {
    orangeTitle,
    subtitle,
    buttonCopy,
    buttonLink
  }
  return (
    <>
      <Navbar navbarButton={navbarButton} />
      <LocationHero locationPost={locationPost} />
      <Carousel carouselCollection={carouselGalleryCollection} />
      <Footer footer={footer} />
    </>
  )
}

export default LocationPage

export async function getStaticProps ({ preview = false }) {
  const [locationPosts] = (await getPagesBySlug(preview, 'location')) ?? []

  return {
    props: { preview, locationPosts }
  }
}
