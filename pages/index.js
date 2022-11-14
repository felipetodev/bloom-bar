import Head from 'next/head'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>Bloom Bar (Coming soon)</title>
        <link rel='icon' href='/favicon-bloombar.svg' />
      </Head>

      <main className='bg-comming-soon bg-cover bg-center h-screen w-full flex justify-center items-center'>
        <section className='flex justify-center items-center flex-col gap-24 text-center overflow-hidden'>
          <img src='/bloomlogo.svg' alt='Bloom Logo' className='w-5/12 min-w-[200px]' />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-6xl text-[#FF5C00]'>Pronto sabrás de nosotros.</h1>
            <h2 className='text-lg md:text-2xl text-bloom-gray-100 mt-2'>Estamos trabajando en nuestra experiencia digital.</h2>
          </div>
          <h2 className='text-lg md:text-2xl text-bloom-gray-100'>
            Síguenos en{' '}
            <a
              href='https://www.instagram.com/bloom_barcl'
              rel='noopener noreferrer'
              target='_blank'
              className='text-[#FF5C00] underline'
            >
              Instagram
            </a>
          </h2>
        </section>
      </main>
    </div>
  )
}

export default Home
