import Head from 'next/head'
import Navbar from '../components/Navbar'
import MenuComponent from '../components/Menu'
import Promotion from '../components/Promotion'
import cmsApi from '../contentful/api-sdk'
import { createMenuIsland } from '../utils/utils.contentful'

const Menu = ({ menuData, islandMenu }) => {
  return (
    <>
      <Head>
        <title>Bloom Nikkei Bar | Carta</title>
      </Head>
      <div className='relative overflow-x-clip'>
        <Navbar navbarButton={menuData?.navbarButton} scrollsAway contentClassName='max-w-[1088px]' />
        <div className='relative mx-auto max-w-[1200px] px-5 sm:px-10 md:px-14 pb-14 sm:pb-40 min-h-screen flow-root'>
          <MenuComponent menu={menuData} islandMenu={islandMenu} />
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

  const islandMenu = createMenuIsland(menuData)

  return {
    props: { preview, menuData, islandMenu }
  }
}
