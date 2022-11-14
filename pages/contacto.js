import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ContactHero from '../components/ContactHero'
import { getPagesBySlug } from '../contentful/api'

const ContactPage = ({ contactPosts }) => {
  const { footer, navbarButton, image, formTitle, ...rest } = contactPosts
  const formPost = {
    image,
    formTitle
  }
  return (
    <>
      <Navbar navbarButton={navbarButton} />
      <ContactForm formPost={formPost} />
      <ContactHero heroPost={rest} />
      <Footer footer={footer} />
    </>
  )
}

export default ContactPage

export async function getStaticProps ({ preview = false }) {
  const [contactPosts] = (await getPagesBySlug(preview, 'contact')) ?? []

  return {
    props: { preview, contactPosts },
    revalidate: 10
  }
}
