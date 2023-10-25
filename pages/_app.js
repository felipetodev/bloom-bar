import SeoLayout from '../components/Seo'
import useLocomotiveScroll from '../hooks/useLocomotiveScroll'
import '../styles/globals.css'

function MyApp ({
  Component,
  pageProps,
  canonical,
  isMobile,
  asPath,
  query
}) {
  const breakpoint = typeof window !== 'undefined' && window.innerWidth < 1024
  useLocomotiveScroll({
    location: asPath,
    ignore: !!query.slug || isMobile || breakpoint
  })

  return (
    <SeoLayout canonical={canonical}>
      <div data-scroll-container className='scroll-container'>
        <Component {...pageProps} />
      </div>
    </SeoLayout>
  )
}

export default MyApp

MyApp.getInitialProps = async ({ ctx }) => {
  const userAgent = ctx.req.headers['user-agent']
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://www.bloombar.cl'
    : 'http://localhost:3000'
  const { asPath } = ctx
  const canonical = baseUrl + asPath

  return {
    canonical,
    isMobile,
    asPath: ctx.asPath,
    query: ctx.query
  }
}
