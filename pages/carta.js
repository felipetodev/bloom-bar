import Head from 'next/head'
import { useMemo } from 'react'
import Navbar from '../components/Navbar'
import { FavoritesControl } from '../components/FavoritesControl'
import MenuComponent from '../components/Menu'
import Promotion from '../components/Promotion'
import cmsApi from '../contentful/api-sdk'
import { createCategoryNav, flattenDishes } from '../utils/utils.contentful'

const Menu = ({ menuData, categoryNav }) => {
  const dishes = useMemo(() => flattenDishes(menuData), [menuData])

  return (
    <>
      <Head>
        <title>Bloom Nikkei Bar | Carta</title>
        <link rel='preload' href='/fonts/manrope/manrope-latin-wght-normal.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
      </Head>
      <div className='relative overflow-x-clip bg-bloom-softGray-100'>
        <Navbar navbarButton={menuData?.navbarButton} variant='menu' headerImage={menuData?.headerImage} contentClassName='max-w-[1200px]'>
          <FavoritesControl dishes={dishes} />
        </Navbar>
        <div className='relative mx-auto max-w-[1200px] font-manrope px-5 sm:px-10 md:px-14 pb-14 sm:pb-40 min-h-screen flow-root'>
          <MenuComponent menu={menuData} categoryNav={categoryNav} />
        </div>
      </div>
      <Promotion promotionSection={menuData?.promotion} />
      <div className='h-32 w-full bg-black select-none pointer-events-none relative z-30' />
    </>
  )
}

export default Menu

export async function getStaticProps ({ preview = false }) {
  const menuData = await cmsApi({ contentType: 'menuV2' })

  const categoryNav = createCategoryNav(menuData)

  return {
    props: { preview, menuData, categoryNav }
  }
}
