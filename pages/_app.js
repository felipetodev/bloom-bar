import IslandProvider from '../context/island-context'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <IslandProvider>
      {console.log('develop by: https://github.com/felipetodev 🚀')}
      <Component {...pageProps} />
    </IslandProvider>
  )
}

export default MyApp
