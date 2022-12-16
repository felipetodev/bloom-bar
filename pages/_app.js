import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import SeoLayout from '../components/Seo'
import IslandProvider from '../context/island-context'
import useLocomotiveScroll from '../hooks/useLocomotiveScroll'
import '../styles/globals.css'

function MyApp ({ Component, pageProps, canonical, pathname, slug, isMobile }) {
  const { asPath, query } = useRouter()
  const breakpoint = typeof window !== 'undefined' && window.innerWidth < 1024
  useLocomotiveScroll({
    location: asPath,
    ignore: !!query.slug || isMobile || breakpoint
  })

  return (
    <>
      <Analytics mode='production' />
      <SeoLayout canonical={canonical} pathname={pathname} slug={slug}>
        <IslandProvider>
          <div data-scroll-container className='scroll-container'>
            <Component {...pageProps} />
          </div>
        </IslandProvider>
      </SeoLayout>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async ({ ctx }) => {
  const userAgent = ctx.req.headers['user-agent']
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://www.bloombar.cl'
    : 'http://localhost:3000'
  const { asPath, query } = ctx
  const canonical = baseUrl + asPath
  const slug = query.slug?.toUpperCase()
  const pathname = slug
    ? null
    : asPath.replace('/', '')?.toUpperCase()

  return {
    canonical,
    pathname,
    slug,
    isMobile
  }
}
