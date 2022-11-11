import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import MenuIcon from '../ui/MenuIcon'
import SignIcon from '../ui/SignIcon'
import useMediaQuery from '../hooks/useMediaQuery'
import { AnimatePresence, motion } from 'framer-motion'

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

const tailwindMQ = '(max-width: 640px)'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [transition, setTransition] = useState(null)
  const isMobile = useMediaQuery(tailwindMQ)

  return (
    <>
      <nav className='bg-transparent bg-nav-gradient px-5 sm:px-10 md:px-14 py-2.5 fixed w-full z-50 top-0 left-0 pointer-events-none'>
        <div className='my-10 flex flex-wrap justify-between items-start mx-auto'>
          <Link href='/' className='flex items-center pointer-events-auto w-[30px] h-[65.12px] sm:w-auto sm:h-auto'>
            <Image priority src='/b-logo.svg' alt='Bloom Logo' width={41} height={89} />
          </Link>
          <div className='flex md:order-2 items-center gap-[30px] sm:gap-[58px] pointer-events-auto'>
            <Button className='!px-[17px] !py-[6px] sm:!px-[42px] sm:!py-[5px]' variant='nav'>
              RESERVA
            </Button>
            <span className='cursor-pointer select-none' onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className='select-none !w-8 sm:!w-[41px]' />
            </span>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='bg-bloom-black-100 fixed w-full z-40 top-0 left-0 bottom-0 right-0'
          >
            <ul className='text-bloom-softGray-100 flex flex-col gap-9 justify-center items-center h-screen text-[40px] md:gap-8 md:text-[60px]'>
              {NAV_MENU.map((it) => {
                return (
                  <li
                    key={it.name}
                    className='relative'
                    onMouseEnter={() => setTransition(it.name)}
                    onMouseLeave={() => setTransition(null)}
                  >
                    <Link href={it.route}>
                      {it.name}
                    </Link>
                    <AnimatePresence>
                      {!isMobile && transition === it.name
                        ? (
                          <div key={it.name} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 max-w-[210.74px] rounded-[7px] overflow-hidden'>
                            <SignIcon />
                          </div>
                          )
                        : null}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
