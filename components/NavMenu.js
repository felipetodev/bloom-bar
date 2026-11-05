import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import SignIcon from '../ui/SignIcon'
import MenuIcon from '../ui/MenuIcon'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_MENU = [
  {
    name: 'INICIO',
    route: '/'
  },
  {
    name: 'CARTA',
    route: '/carta'
  },
  // {
  //   name: 'BLOOM REWARDS',
  //   route: '/rewards'
  // },
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

// framer-motion runs opacity through the Web Animations API and restores the inline style one frame late,
// which flashes the overlay when the fade ends; an onUpdate handler keeps the animation on the JS driver
const noop = () => {}

// locks page scroll while the menu is open, compensating the scrollbar width so the layout does not shift
const useScrollLock = () => {
  useEffect(() => {
    const { style } = document.documentElement
    const previous = { overflow: style.overflow, paddingRight: style.paddingRight }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    style.overflow = 'hidden'
    if (scrollbarWidth > 0) style.paddingRight = `${scrollbarWidth}px`

    return () => {
      style.overflow = previous.overflow
      style.paddingRight = previous.paddingRight
    }
  }, [])
}

const NavMenu = ({ setIsOpen, triggerRef }) => {
  const isMobile = useMediaQuery(tailwindMQ)
  const [transition, setTransition] = useState(null)
  // the close icon sits exactly where the burger that opened the menu is
  const [triggerRect] = useState(() => {
    const trigger = triggerRef?.current
    return (trigger?.querySelector('svg') ?? trigger)?.getBoundingClientRect() ?? null
  })

  useScrollLock()

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setIsOpen])

  // portaled to <body> so it covers every page layer (navbar, sticky category nav, scroll container)
  return createPortal(
    <motion.div
      role='dialog'
      aria-modal='true'
      aria-label='Menú'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onUpdate={noop}
      className='bg-bloom-black-100 fixed inset-0 z-[1000]'
    >
      <button
        type='button'
        aria-label='Cerrar menú'
        onClick={() => setIsOpen(false)}
        style={triggerRect ? { top: triggerRect.top, left: triggerRect.left, width: triggerRect.width, height: triggerRect.height } : undefined}
        className='absolute top-5 right-5 flex items-center justify-center cursor-pointer select-none'
      >
        <MenuIcon isOpen className='w-full h-auto' />
      </button>
      <ul className='text-bloom-softGray-100 flex flex-col gap-9 justify-center items-center h-full text-[40px] md:gap-8 md:text-[60px]'>
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
    </motion.div>,
    document.body
  )
}

export default NavMenu
