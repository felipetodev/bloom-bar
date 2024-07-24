import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import cmsApi from '../contentful/api-sdk'
import Modal from '../components/DishDialog'
import snarkdown from 'snarkdown'

const PromotionPage = ({ promotionPosts }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dishImage, setDishImage] = useState({})

  const onSelectImage = (img) => {
    setDishImage(img)
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Bloom Nikkei Bar | Rewards</title>
      </Head>
      <Navbar navbarButton={promotionPosts.navbarButton} />

      <section data-scroll-section className='relative flex flex-col bg-bloom-darkGreen-100 pt-[150px] sm:pt-[210px] md:pt-[250px] px-5 sm:px-10 md:px-14 text-bloom-softGray-100 pb-10 sm:pb-16 md:pb-20'>
        <div className='flex flex-col md:flex-row bg-bloom-black-100 rounded-md'>
          <div className='flex-1 relative min-h-[200px] px-10 sm:px-20 py-8 sm:py-16 overflow-hidden'>
            <h1 className='text-center md:text-left uppercase font-bold font-gopher text-2xl sm:text-3xl my-3 tracking-widest md:tracking-[0.2em]'>
              {promotionPosts.mainCardTitle}
            </h1>
            <p className='font-abel text-center md:text-left relative max-w-lg lg:max-w-2xl z-10'>
              {promotionPosts.mainCardSubtitle}
            </p>
          </div>

          <div className='flex justify-center md:mr-[5%] lg:mr-[10%] mt-auto'>
            <img
              src={promotionPosts.mainCardImage.url}
              alt='Bloom Rewards Image'
              className='block object-contain w-full h-full max-w-[250px] max-h-[250px] align-bottom'
            />
          </div>
        </div>

        <div className='flex flex-col gap-y-10 mt-20 w-full h-full'>
          <h2 className='text-xl font-gopher text-center'>
            {promotionPosts.promotionsTitle}
          </h2>
          <div className='grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-[10px] sm:gap-6 w-full'>
            {promotionPosts?.promotionImages.map(({ id, url, title }) => (
              <div
                key={id}
                role='button'
                tabIndex='0'
                className='cursor-pointer rounded-xl sm:h-[210px] md:h-[240px] sm:w-[210px] md:w-[240px] bg-bloom-softGray-100 overflow-hidden transition-opacity hover:opacity-80'
                onClick={() => onSelectImage({ url, title })}
              >
                <img
                  src={url}
                  alt={title}
                  className='aspect-square block object-cover w-full h-full align-bottom'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className='font-abel mt-10'
          dangerouslySetInnerHTML={{ __html: snarkdown(promotionPosts.terms) }}
        />
      </section>

      <Footer footer={promotionPosts.footer} />

      <Modal
        isOpen={isOpen}
        onHandleOpen={() => setIsOpen(false)}
        dishImage={dishImage}
      />
    </>
  )
}

export default PromotionPage

export async function getStaticProps ({ preview = false }) {
  const promotionPosts = await cmsApi({ contentType: 'promotionPage', slug: 'promotion' })

  return {
    props: { preview, promotionPosts }
  }
}
