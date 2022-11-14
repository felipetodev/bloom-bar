import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import MenuIcon from '../ui/MenuIcon'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const NavMenu = dynamic(() => import('./NavMenu'))

const Navbar = ({ navbarButton }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='bg-transparent bg-nav-gradient px-5 sm:px-10 md:px-14 py-2.5 fixed w-full z-50 top-0 left-0 pointer-events-none'>
        <div className='my-10 flex flex-wrap justify-between items-start mx-auto'>
          <Link href='/' className='flex items-center pointer-events-auto w-[30px] h-[65.12px] sm:w-auto sm:h-auto'>
            <Image priority src='/b-logo.svg' alt='Bloom Logo' width={41} height={89} />
          </Link>
          <div className='flex md:order-2 items-center gap-[30px] sm:gap-[58px] pointer-events-auto'>
            {navbarButton?.link && (
              <Button href={navbarButton.link} rel='noopener noreferrer' target='_blank' type='link' className='!px-[17px] !py-[6px] sm:!px-[42px] sm:!py-[5px] hover:bg-bloom-orange-200 hover:border-bloom-orange-200' variant='nav'>
                {navbarButton?.title?.toUpperCase()}
              </Button>
            )}
            <span className='cursor-pointer select-none' onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className='select-none !w-8 sm:!w-[41px]' />
            </span>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <NavMenu />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
