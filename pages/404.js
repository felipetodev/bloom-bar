import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ErrorPlantIcon from '../ui/ErrorPlantIcon'

export default function Custom404 () {
  return (
    <>
      <Head>
        <title>404 | bloombar.cl</title>
      </Head>
      <Navbar />
      <section data-scroll-section className='relative flex flex-col justify-center items-center gap-5 h-[90vh] bg-bloom-darkGreen-100 text-xl sm:text-2xl text-bloom-softGray-100 px-16'>
        <Image width={346} height={148} src='/404.svg' alt='pagina de error' />
        <h1 className='text-center'>Esta página se perdió o no existe.</h1>
        <Link href='/' className='text-bloom-orange-100 hover:underline'>
          Ir al inicio
        </Link>
        <div data-scroll data-scroll-speed='1' className='absolute -bottom-14 right-0 select-none pointer-events-none md:-bottom-2'>
          <ErrorPlantIcon className='!w-[231px] md:!w-[331px]' />
        </div>
      </section>
      <Footer />
    </>
  )
}
