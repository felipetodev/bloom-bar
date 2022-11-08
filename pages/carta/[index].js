import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'

const Nikkei = () => {
  return (
    <div className='px-5 sm:px-10 md:px-14'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;400;500;700&display=swap' rel='stylesheet' />
        <style
          id='stndz-style'
          rel='stylesheet'
          dangerouslySetInnerHTML={{
            __html: `
              * {
                font-family: 'Marcellus', serif !important;
              }
            `
          }}
        />
      </Head>
      <Navbar />
      <Menu />
    </div>
  )
}

export default Nikkei
