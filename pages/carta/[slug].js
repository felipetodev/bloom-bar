import Head from 'next/head'
import Navbar from '../../components/Navbar'
import MenuComponent from '../../components/Menu'
import Promotion from '../../components/Promotion'
import Island from '../../ui/Island'
import { getAllMenuSlugs } from '../../contentful/api-gql'
import cmsApi from '../../contentful/api-sdk'
import { createMenuIsland } from '../../utils/utils.contentful'
import { HalloweenDecorations } from '../../components/Halloween'

const Menu = ({ menuData, islandMenu }) => {
  return (
    <>
      <Head>
        <title>Bloom Nikkei Bar | Carta</title>
      </Head>
      <div className='relative px-5 sm:px-10 md:px-14 pb-14 sm:pb-40 min-h-screen overflow-x-hidden'>
        <Navbar navbarButton={menuData?.navbarButton} />
        <MenuComponent menu={menuData} />
      </div>
      <Promotion promotionSection={menuData?.promotion} />
      <div className='h-32 w-full bg-black select-none pointer-events-none relative z-30' />
      <Island islandMenu={islandMenu} />

      {/* Halloween assets */}
      <HalloweenDecorations slug={islandMenu.slug} />
    </>
  )
}

export default Menu

export async function getStaticPaths () {
  const menuSlugsAvailable = await getAllMenuSlugs()
  return {
    paths: menuSlugsAvailable?.map(({ slug }) => `/carta/${slug}`) ?? [],
    fallback: false
  }
}

export async function getStaticProps ({ preview = false, params }) {
  const { slug } = params
  const menuData = await cmsApi({ contentType: 'menu', slug })

  const islandMenu = createMenuIsland(menuData)

  return {
    props: { preview, menuData, islandMenu }
  }
}
