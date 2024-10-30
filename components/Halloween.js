import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePosition } from '../hooks/usePosition'

export function HalloweenDecorations ({ slug = 'nikkei' }) {
  const [scrollY, setScrollY] = useState(0)
  const { position } = usePosition()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  const isNikkei = slug === 'nikkei'

  const decorations = useMemo(() => [
    {
      src: '/halloween/bats.png',
      alt: 'bats',
      width: 262,
      height: 214,
      scroll: -(scrollY / 10),
      initialY: position.y / 6,
      className: '-z-20 absolute w-full mx-auto grid place-content-center select-none'
    },
    {
      src: `/halloween/zom-${isNikkei ? '01' : '02'}.png`,
      alt: 'zombie',
      width: `${isNikkei ? 262 : 162}`,
      height: `${isNikkei ? 342 : 374}`,
      scroll: -(scrollY / 20),
      initialY: position.y / 1.9,
      className: '-z-20 absolute left-0 sm:left-16 md:left-56 grid place-content-center select-none'
    },
    {
      src: '/halloween/pumpkin.png',
      alt: 'pumpkin',
      width: 200,
      height: 191,
      scroll: -(scrollY / 20),
      initialY: position.y / 1,
      className: '-z-20 absolute right-0 sm:right-8 md:right-28 grid place-content-center select-none'
    }
  ], [position, scrollY])

  return (
    <>
      <img
        className='fixed top-[10%] scale-[3] sm:scale-100 sm:top-0 left-[40%] sm:left-0 opacity-50 sm:opacity-30 pointer-events-none select-none'
        src='/halloween/cobweb.svg'
      />

      {decorations.map((decoration, index) => (
        <motion.div
          key={decoration.alt}
          style={{ top: decoration.initialY, y: decoration.scroll }}
          className={decoration.className}
        >
          <Image
            alt={decoration.alt}
            width={decoration.width}
            height={decoration.height}
            className={[
              'opacity-0 transition-opacity duration-500 p-9 sm:p-0',
              position.y > 0 && '!opacity-10',
              decoration.alt === 'pumpkin' && 'rotate-[16deg]'
            ].join(' ')}
            src={decoration.src}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      ))}

      <div className={['fixed top-0 md:top-[90px] left-0 right-0 bottom-0 w-full h-screen opacity-0 transition-opacity duration-700 pointer-events-none select-none', position.y > 0 && '!opacity-10'].join(' ')}>
        <img loading='eager' decoding='sync' className='object-cover w-full h-full' src='/halloween/mysterious-character-forest.png' />
      </div>
    </>
  )
}
