import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ContactHero from '../components/ContactHero'
import Head from 'next/head'
import cmsApi from '../contentful/api-sdk'

const ContactPage = ({ contactPosts }) => {
  const { footer, navbarButton, image, formTitle, errorMessage, submitMessage, ...rest } = contactPosts || {}
  const formPost = {
    image,
    formTitle,
    submitMessage,
    errorMessage
  }
  return (
    <>
      <Head>
        <title>Bloom Nikkei Bar | Contacto</title>
      </Head>
      <Navbar navbarButton={navbarButton} />
      <ContactForm formPost={formPost} />
      <ContactHero heroPost={rest} />
      <Footer footer={footer} />
    </>
  )
}

export default ContactPage

export async function getStaticProps ({ preview = false }) {
  const contactPosts = await cmsApi({ contentType: 'contactPage', slug: 'contact' })

  return {
    props: { preview, contactPosts }
  }
}
