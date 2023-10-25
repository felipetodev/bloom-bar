import Head from 'next/head'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import LocationHero from '../components/LocationHero'
import Navbar from '../components/Navbar'
import cmsApi from '../contentful/api-sdk'

const LocationPage = ({ locationPosts }) => {
  const {
    orangeTitle,
    subtitle,
    buttonCopy,
    buttonLink,
    navbarButton,
    footer,
    carouselGallery
  } = locationPosts || {}
  const locationPost = {
    orangeTitle,
    subtitle,
    buttonCopy,
    buttonLink
  }
  return (
    <>
      <Head>
        <title>Bloombar | Ubicación</title>
      </Head>
      <Navbar navbarButton={navbarButton} />
      <LocationHero locationPost={locationPost} />
      <Carousel carouselItems={carouselGallery} />
      <Footer footer={footer} />
    </>
  )
}

export default LocationPage

export async function getStaticProps ({ preview = false }) {
  const locationPosts = await cmsApi({ contentType: 'locationPage', slug: 'location' })

  return {
    props: { preview, locationPosts }
  }
}
