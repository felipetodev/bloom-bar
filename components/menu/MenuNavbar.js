import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../ui/Button'
import MenuIcon from '../../ui/MenuIcon'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

const NavMenu = dynamic(() => import('../NavMenu'), { ssr: false })

// solid gradient band at the top of the carta
const MenuNavbar = ({ navbarButton, headerImage, contentClassName, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuTriggerRef = useRef(null)

  return (
    <>
      <nav
        className={clsx(
          'px-5 sm:px-10 md:px-14 w-full z-[60] top-0 left-0',
          // speckle texture tile layered over the orange gradient
          "relative overflow-hidden bg-[url('/textures/menu-speckle.png'),linear-gradient(to_right,theme(colors.bloom.orange.200)_40%,theme(colors.bloom.peach.100))]"
        )}
      >
        <div
          className={clsx(
            // items sit below the middle of the band, bottom aligned like the reference design
            'relative flex flex-wrap justify-between mx-auto items-end h-[120px] pb-7 sm:h-28 sm:pb-6',
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
                className='pointer-events-none select-none absolute top-0 left-8 sm:left-16 h-20 sm:h-24 w-auto'
              />
              )
            : null}
          <Link href='/' className='relative flex items-center pointer-events-auto w-7'>
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
                  className='!px-3 !py-1 max-sm:!py-1 !text-[11px] sm:!text-xs tracking-wider hover:bg-white hover:border-white font-semibold'
                >
                  {navbarButton?.title?.toUpperCase()}
                </Button>
                )
              : null}
            {/* extra controls (e.g. favorites), placed between the button and the burger */}
            {children}
            <span ref={menuTriggerRef} className='cursor-pointer select-none text-bloom-darkGreen-100' onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon isOpen={isOpen} color='currentColor' className='select-none !w-6 sm:!w-7 !h-auto' />
            </span>
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
