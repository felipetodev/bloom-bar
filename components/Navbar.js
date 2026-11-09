import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import MenuIcon from '../ui/MenuIcon'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

const NavMenu = dynamic(() => import('./NavMenu'), { ssr: false })

// overlay: transparent and fixed over the page hero; menu: solid gradient band at the top of the carta
const Navbar = ({ navbarButton, variant = 'overlay', headerImage, contentClassName, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuTriggerRef = useRef(null)
  const isMenu = variant === 'menu'

  return (
    <>
      <nav
        className={clsx(
          'px-5 sm:px-10 md:px-14 w-full z-[60] top-0 left-0',
          isMenu
            // speckle texture tile layered over the orange gradient
            ? "relative overflow-hidden bg-[url('/textures/menu-speckle.png'),linear-gradient(to_right,theme(colors.bloom.orange.200)_40%,theme(colors.bloom.peach.100))]"
            : 'fixed py-2.5 bg-transparent bg-nav-gradient pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'relative flex flex-wrap justify-between mx-auto',
            // menu: items sit below the middle of the band, bottom aligned like the reference design
            isMenu ? 'items-end h-[120px] pb-7 sm:h-28 sm:pb-6' : 'items-start my-5 sm:my-10 md:my-[60px]',
            contentClassName
          )}
        >
          {isMenu && headerImage?.url
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
          <Link
            href='/'
            className={clsx(
              'relative flex items-center pointer-events-auto',
              isMenu ? 'w-7' : 'w-[30px] h-[65.12px] sm:w-auto sm:h-auto'
            )}
          >
            <Image decoding='sync' loading='eager' priority src='/b-logo.svg' alt='Bloom Logo' width={41} height={89} className={clsx({ 'w-full h-auto': isMenu })} />
          </Link>
          <div className={clsx('relative flex md:order-2 items-center pointer-events-auto', isMenu ? 'gap-5 sm:gap-7' : 'gap-[30px] sm:gap-[58px]')}>
            {/* menu: max-sm:!py-1 beats the base `!py-3` of Button (same !important, emitted later in the CSS) */}
            {navbarButton?.link
              ? (
                <Button
                  href={navbarButton.link}
                  rel='noopener noreferrer'
                  target='_blank'
                  type='link'
                  variant={isMenu ? 'light' : 'nav'}
                  className={isMenu
                    ? '!px-3 !py-1 max-sm:!py-1 !text-[11px] sm:!text-xs tracking-wider hover:bg-white hover:border-white font-semibold'
                    : '!px-[17px] !py-[6px] sm:!px-[42px] sm:!py-[5px] hover:bg-bloom-orange-100 hover:border-bloom-orange-100'}
                >
                  {navbarButton?.title?.toUpperCase()}
                </Button>
                )
              : null}
            {/* extra controls (e.g. favorites), placed between the button and the burger */}
            {children}
            <span ref={menuTriggerRef} className={clsx('cursor-pointer select-none', { 'text-bloom-darkGreen-100': isMenu })} onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon
                isOpen={isOpen}
                color={isMenu ? 'currentColor' : undefined}
                className={clsx('select-none', isMenu ? '!w-6 sm:!w-7 !h-auto' : '!w-8 sm:!w-[41px]')}
              />
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

export default Navbar
