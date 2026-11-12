import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../ui/Button'
import MenuIcon from '../../ui/MenuIcon'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

const NavMenu = dynamic(() => import('../NavMenu'), { ssr: false })

const COMPACT_AT = 8
// ignore the browser's scroll restoration after load (refresh / back), so the band starts expanded
const RESTORE_WAIT_MS = 400

// transform-only so it runs on the compositor (smooth in WebKit, no layout shift)
const TRANSITION = 'transition-transform duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none'

// band + bottomBar (category nav) share one sticky header; the band keeps its height and the header
// slides up --menu-band-collapse to collapse, so both always move together
const MenuNavbar = ({ navbarButton, headerImage, contentClassName, actions, bottomBar }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuTriggerRef = useRef(null)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    let isReady = false
    let readyTimeout = null

    const onScroll = () => {
      if (!isReady) return
      setIsCompact(window.scrollY > COMPACT_AT)
    }

    const onLoad = () => {
      readyTimeout = window.setTimeout(() => { isReady = true }, RESTORE_WAIT_MS)
    }
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.clearTimeout(readyTimeout)
      window.removeEventListener('load', onLoad)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-[60]',
          TRANSITION,
          isCompact && 'translate-y-[calc(var(--menu-band-collapse)*-1)]'
        )}
      >
        <nav
          data-menu-band
          className={clsx(
            'px-5 sm:px-10 md:px-14 w-full',
            "overflow-hidden bg-[url('/textures/menu-speckle.png'),linear-gradient(to_right,theme(colors.bloom.orange.200)_40%,theme(colors.bloom.peach.100))]"
          )}
        >
          <div
            className={clsx(
              // compact: items move down so their bottom gap shrinks to 16px
              'relative flex flex-wrap justify-between mx-auto items-end h-[120px] pb-7 sm:h-28 sm:pb-6',
              TRANSITION,
              isCompact && 'translate-y-[var(--menu-band-shift)]',
              contentClassName
            )}
          >
            {headerImage?.url
              ? (
                <Image
                  src={headerImage.url}
                  alt=''
                  aria-hidden='true'
                  width={0}
                  height={0}
                  sizes='200px'
                  className={clsx(
                    'pointer-events-none select-none absolute top-0 left-8 sm:left-20 w-auto h-24 origin-top-left',
                    TRANSITION,
                    // compact: h-24 -> h-16, kept at the top of the visible band
                    isCompact && 'translate-y-[calc(var(--menu-band-collapse)-var(--menu-band-shift))] scale-[0.667]'
                  )}
                />
                )
              : null}
            <Link
              href='/'
              className={clsx(
                'relative flex items-center pointer-events-auto w-7 origin-bottom',
                TRANSITION,
                isCompact && 'scale-[0.857]' // w-7 -> w-6
              )}
            >
              <Image decoding='sync' loading='eager' priority src='/b-logo.svg' alt='Bloom Logo' width={41} height={89} className='w-full h-auto' />
            </Link>
            <div className='relative flex md:order-2 items-center pointer-events-auto gap-5 sm:gap-7'>
              {/* max-sm:!py-1 beats Button's base !py-3 (same !important, emitted later) */}
              {navbarButton?.link
                ? (
                  <Button
                    href={navbarButton.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    type='link'
                    variant='light'
                    className='!px-3 !py-1 max-sm:!py-1 !text-[11px] sm:!text-xs tracking-wider hover:bg-white hover:border-white font-extrabold uppercase'
                  >
                    {navbarButton?.title}
                  </Button>
                  )
                : null}
              {actions}
              <button
                ref={menuTriggerRef}
                type='button'
                aria-label='Abrir menú'
                aria-haspopup='dialog'
                aria-expanded={isOpen}
                className='flex items-center justify-center cursor-pointer select-none text-bloom-darkGreen-100'
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon isOpen={isOpen} color='currentColor' className='select-none !w-6 sm:!w-7 !h-auto' />
              </button>
            </div>
          </div>
        </nav>
        {bottomBar}
      </header>
      <AnimatePresence>
        {isOpen && (
          <NavMenu setIsOpen={setIsOpen} triggerRef={menuTriggerRef} />
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuNavbar
