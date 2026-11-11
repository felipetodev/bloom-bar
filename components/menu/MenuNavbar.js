import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../ui/Button'
import MenuIcon from '../../ui/MenuIcon'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import useMeasure from 'react-use-measure'

const NavMenu = dynamic(() => import('../NavMenu'), { ssr: false })

// scrolled past COMPACT_AT the band shrinks; it only grows back near the top (gap avoids flicker when the shrink moves the content)
const COMPACT_AT = 120
const EXPAND_AT = 40
// time after load during which scroll events (the browser restoring the position) are ignored
const RESTORE_WAIT_MS = 400

// solid gradient band at the top of the carta
const MenuNavbar = ({ navbarButton, headerImage, contentClassName, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuTriggerRef = useRef(null)
  const [isCompact, setIsCompact] = useState(false)
  const [ref, bounds] = useMeasure()

  useEffect(() => {
    // the band always starts at its original size, even when the browser restores a scrolled position (refresh / back);
    // scroll events are ignored until the page loaded and the restoration had time to happen, so only a later scroll shrinks it
    let isReady = false
    let readyTimeout = null

    const onScroll = () => {
      if (!isReady) return
      const y = window.scrollY
      setIsCompact((compact) => compact ? y > EXPAND_AT : y > COMPACT_AT)
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

  // the sticky category nav and the section anchors sit below the band, so they follow its measured (animated) height
  useEffect(() => {
    if (!bounds.height) return
    document.body.style.setProperty('--menu-navbar-h', `${bounds.height}px`)
  }, [bounds.height])

  useEffect(() => () => document.body.style.removeProperty('--menu-navbar-h'), [])

  return (
    <>
      <nav
        ref={ref}
        className={clsx(
          'px-5 sm:px-10 md:px-14 w-full z-[60] top-0 left-0 sticky',
          // speckle texture tile layered over the orange gradient
          "overflow-hidden bg-[url('/textures/menu-speckle.png'),linear-gradient(to_right,theme(colors.bloom.orange.200)_40%,theme(colors.bloom.peach.100))]"
        )}
      >
        <div
          className={clsx(
            // items sit below the middle of the band, bottom aligned like the reference design
            'relative flex flex-wrap justify-between mx-auto items-end transition-[height,padding] duration-300 ease-out motion-reduce:transition-none',
            isCompact ? 'h-[80px] pb-4' : 'h-[120px] pb-7 sm:h-28 sm:pb-6',
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
                  'pointer-events-none select-none absolute top-0 left-8 sm:left-20 w-auto transition-[height] duration-300 ease-out motion-reduce:transition-none',
                  isCompact ? 'h-16' : 'h-24'
                )}
              />
              )
            : null}
          <Link
            href='/'
            className={clsx(
              'relative flex items-center pointer-events-auto transition-[width] duration-300 ease-out motion-reduce:transition-none',
              isCompact ? 'w-6' : 'w-7'
            )}
          >
            <Image decoding='sync' loading='eager' priority src='/b-logo.svg' alt='Bloom Logo' width={41} height={89} className='w-full h-auto' />
          </Link>
          <div className='relative flex md:order-2 items-center pointer-events-auto gap-5 sm:gap-7'>
            {/* max-sm:!py-1 beats the base `!py-3` of Button (same !important, emitted later in the CSS) */}
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
            {/* extra controls (e.g. favorites), placed between the button and the burger */}
            {children}
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
      <AnimatePresence>
        {isOpen && (
          <NavMenu setIsOpen={setIsOpen} triggerRef={menuTriggerRef} />
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuNavbar
