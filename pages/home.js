import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HomeExperience from '../components/HomeExperience'
import HomeSectionTwo from '../components/HomeSectionTwo'
import Navbar from '../components/Navbar'
import Promotion from '../components/Promotion'
import { getPagesBySlug } from '../contentful/api'

const Home = ({ homePosts }) => {
  const {
    navbarButton,
    video,
    image,
    titleFirstSection,
    descriptionFirstSection,
    leftImageSecondSection,
    descriptionSecondSection,
    leftButtonSecondSection,
    rightButtonSecondSection,
    promotionSection,
    footer
  } = homePosts || {}

  const experiencePost = {
    titleFirstSection,
    descriptionFirstSection
  }
  const sectionTwoPost = {
    leftImageSecondSection,
    descriptionSecondSection,
    leftButtonSecondSection,
    rightButtonSecondSection

  }
  return (
    <>
      <Navbar navbarButton={navbarButton} />
      <Hero video={video} image={image} />
      <HomeExperience experiencePost={experiencePost} />
      <HomeSectionTwo sectionTwoPost={sectionTwoPost} />
      <Promotion hasFlower promotionSection={promotionSection} />
      <Footer footer={footer} />
    </>
  )
}

export default Home

export async function getStaticProps ({ preview = false }) {
  const [homePosts] = (await getPagesBySlug(preview, 'home')) ?? []

  return {
    props: { preview, homePosts },
    revalidate: 10
  }
}
