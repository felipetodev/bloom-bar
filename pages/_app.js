import { useEffect } from 'react'
import Script from 'next/script'
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

  const isCartaPath = asPath.startsWith('/carta')

  useEffect(() => {
    document.body.classList.toggle('carta', isCartaPath)
    return () => document.body.classList.remove('carta')
  }, [isCartaPath])

  return (
    <SeoLayout canonical={canonical}>
      {pageProps?.pageScripts
        ? (
          <Script
            id='bloom-widget'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{ __html: pageProps.pageScripts }}
          />
          )
        : null}
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
  const baseUrl = 'https://bloomnikkeibar.cl'

  const { asPath } = ctx
  const canonical = baseUrl + asPath

  return {
    canonical,
    isMobile,
    asPath: ctx.asPath,
    query: ctx.query
  }
}
