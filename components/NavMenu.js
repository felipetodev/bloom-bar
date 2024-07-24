import { useState } from 'react'
import Link from 'next/link'
import SignIcon from '../ui/SignIcon'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_MENU = [
  {
    name: 'INICIO',
    route: '/'
  },
  {
    name: 'CARTA',
    route: '/carta/nikkei'
  },
  {
    name: 'BLOOM REWARDS',
    route: '/rewards'
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

const NavMenu = ({ setIsOpen }) => {
  const isMobile = useMediaQuery(tailwindMQ)
  const [transition, setTransition] = useState(null)
  return (
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
              onClick={() => setIsOpen(false)}
            >
              <Link href={it.route}>
                {it.name}
              </Link>
              <AnimatePresence>
                {!isMobile && transition === it.name
                  ? (
                    <div key={it.name} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 overflow-hidden'>
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
  )
}

export default NavMenu
