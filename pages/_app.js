import { useRouter } from 'next/router'
import IslandProvider from '../context/island-context'
import useDeviceDetect from '../hooks/useDevice'
import useLocomotiveScroll from '../hooks/useLocomotiveScroll'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  const { asPath, query } = useRouter()
  const mobileDevice = useDeviceDetect()
  useLocomotiveScroll({ location: asPath, ignore: !!query.slug || mobileDevice })

  console.log({ locoDisabled: !!query.slug || mobileDevice })

  return (
    <IslandProvider>
      <div data-scroll-container className='scroll-container'>
        <Component {...pageProps} />
      </div>
    </IslandProvider>
  )
}

export default MyApp
