import { useState } from 'react'
import Button from '../ui/Button'
import MenuIcon from '../ui/MenuIcon'
import Link from 'next/link'
import SignIcon from '../ui/SignIcon'
import { motion, useAnimation } from 'framer-motion'

const NAV_MENU = [
  {
    name: 'INICIO',
    route: '/home'
  },
  {
    name: 'CARTA',
    route: '/carta/nikkei'
  },
  {
    name: 'UBICACIÓN',
    route: '/ubicacion'
  },
  {
    name: 'CONTACTO',
    route: '/contacto'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const svgControls = useAnimation()
  return (
    <>
      <nav className='bg-transparent bg-nav-gradient px-5 sm:px-10 md:px-14 py-2.5 fixed w-full z-50 top-0 left-0 pointer-events-none'>
        <div className='my-10 flex flex-wrap justify-between items-start mx-auto'>
          <a href='#' className='flex items-center pointer-events-auto'>
            <img src='/b-logo.svg' alt='Bloom Logo' className='h-24' />
          </a>
          <div className='flex md:order-2 items-center gap-7 sm:gap-24 pointer-events-auto'>
            <Button variant='nav'>
              RESERVA
            </Button>
            <span className='cursor-pointer select-none' onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </span>
          </div>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='bg-bloom-black-100 fixed w-full z-40 top-0 left-0 bottom-0 right-0'
        >
          <ul className='text-bloom-softGray-100 flex flex-col gap-9 justify-center items-center h-screen text-[40px] md:gap-8 md:text-[60px]'>
            {NAV_MENU.map((it, idx) => {
              return (
                <li
                  key={it.name}
                  className='relative'
                  onMouseEnter={() => svgControls.start({ pathLength: 1 })}
                  onMouseLeave={() => svgControls.start({ pathLength: 0 })}
                >
                  <Link href={it.route}>
                    {it.name}
                  </Link>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10'>
                    <SignIcon custom={idx} id={it.name} controls={svgControls} />
                  </div>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </>
  )
}

export default Navbar
