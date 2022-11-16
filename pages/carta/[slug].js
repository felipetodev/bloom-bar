import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'
import Promotion from '../../components/Promotion'
import Island from '../../ui/Island'
import { getAllMenuSlugs, getMenuBySlug } from '../../contentful/api'

const Nikkei = ({ menuData }) => {
  return (
    <>
      <div className='relative px-5 sm:px-10 md:px-14 pb-14 sm:pb-40 min-h-screen overflow-x-hidden'>
        <Navbar navbarButton={menuData?.navbarButton} />
        <Menu menu={menuData} />
      </div>
      <Promotion promotionSection={menuData?.promotion} />
      <div className='h-32 w-full bg-black select-none pointer-events-none' />
      <Island />
    </>
  )
}

export default Nikkei

export async function getStaticPaths () {
  const menuSlugsAvailable = await getAllMenuSlugs()
  return {
    paths: menuSlugsAvailable?.map(({ slug }) => `/carta/${slug}`) ?? [],
    fallback: false
  }
}

export async function getStaticProps ({ preview = false, params }) {
  const { slug } = params
  const [menuData] = await getMenuBySlug(preview, slug) ?? []

  return {
    props: { preview, menuData },
    revalidate: 10
  }
}
