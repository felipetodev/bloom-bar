import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/router'
import SeoLayout from '../components/Seo'
import IslandProvider from '../context/island-context'
import useDeviceDetect from '../hooks/useDevice'
import useLocomotiveScroll from '../hooks/useLocomotiveScroll'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { asPath, query } = useRouter()
  const mobileDevice = useDeviceDetect()
  useLocomotiveScroll({ location: asPath, ignore: !!query.slug || mobileDevice })

  return (
    <>
      <Analytics />
      <SeoLayout>
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
