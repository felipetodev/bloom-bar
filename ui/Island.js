import { Fragment, useState } from 'react'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import FlameIcon from './FlameIcon'
import ArrowIcon from './ArrowIcon'
import ArrowNext from './ArrowNext'
import WineCupIcon from './WineCupIcon'
import clsx from 'clsx'
import { useIsland } from '../context/island-context'

const Island = () => {
  const [open, setIsOpen] = useState(false)
  const {
    hasQuerySlug,
    nextMenu,
    slug,
    menuCategoriesCollection
  } = useIsland()

  const styles = clsx(
    'rounded-full flex justify-center items-center min-w-[36px] w-[36px] h-[36px] min-h-[36px]', {
      'bg-bloom-orange-100 text-bloom-softGray-100 group-hover:bg-bloom-orange-50': nextMenu?.color === 'primary',
      'bg-bloom-cyan-100 text-bloom-darkGreen-100 group-hover:bg-bloom-cyan-50': nextMenu?.color === 'secondary'
    }
  )

  const triggerStyles = clsx(
    'IconButton flex justify-center items-center bg-[#CAC2BB] h-[36px] w-[149px] rounded-[3px]', {
      'ml-2': hasQuerySlug && nextMenu?.color !== 'secondary',
      'mr-2': hasQuerySlug && nextMenu?.color === 'secondary'
    })

  return (
    <div className='bg-transparent pointer-events-none flex justify-center items-center fixed w-full bottom-0 py-10 bg-island-gradient z-30'>
      <div className='bg-bloom-black-100 pointer-events-auto flex justify-center items-center rounded-[7px] border border-solid border-bloom-softGray-100 max-w-max max-h-max min-w-[250px] min-h-[50px]'>
        <DropdownMenu.Root open={open} onOpenChange={(state) => setIsOpen(state)}>
          <div className='flex justify-between items-center p-2'>
            {hasQuerySlug && nextMenu?.color !== 'secondary' && (
              <div className='mr-2 ml-1 rotate-180'>
                <ArrowNext />
              </div>
            )}
            {hasQuerySlug && nextMenu?.color !== 'secondary' && (
              <Link href={`/carta/${nextMenu?.slug}`} className='flex justify-between items-center group'>
                <div className={styles}>
                  {nextMenu?.slug === 'nikkei' ? <FlameIcon /> : <WineCupIcon />}
                </div>
                <div className='ml-2 text-bloom-softGray-100 self-center w-[70px]'>
                  <p className='text-[8px]'>
                    {hasQuerySlug && nextMenu?.color !== 'secondary' ? 'VOLVER A CARTA' : 'IR A CARTA'}
                  </p>
                  <p className='text-sm'>
                    {nextMenu?.slug?.toUpperCase()}
                  </p>
                </div>
              </Link>
            )}
            <DropdownMenu.Trigger asChild>
              <button className={triggerStyles} aria-label='Customise options'>
                <ArrowIcon isOpen={open} /> CARTA
              </button>
            </DropdownMenu.Trigger>
            {(!hasQuerySlug || nextMenu?.color === 'secondary') && (
              <Link href={`/carta/${nextMenu?.slug}`} className='flex justify-between items-center group'>
                <div className='mr-2 text-bloom-softGray-100 self-center w-[70px]'>
                  <p className='text-[8px]'>
                    {hasQuerySlug && nextMenu?.color !== 'secondary' ? 'VOLVER A CARTA' : 'IR A CARTA'}
                  </p>
                  <p className='text-sm'>
                    {nextMenu?.slug?.toUpperCase()}
                  </p>
                </div>
                <div className={styles}>
                  {nextMenu?.slug === 'nikkei' ? <FlameIcon /> : <WineCupIcon />}
                </div>
                <div className='ml-2 mr-1'>
                  <ArrowNext />
                </div>
              </Link>
            )}
          </div>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align='start'
              alignOffset={hasQuerySlug && nextMenu?.color !== 'secondary' ? -156 : -10}
              className='DropdownMenuContent max-h-[400px] sm:max-h-[500px] bg-bloom-black-100 rounded-lg text-bloom-softGray-100 flex flex-col gap-8 border border-solid border-bloom-softGray-100 p-[30px]'
              sideOffset={5}
            >
              {menuCategoriesCollection?.items?.map(category => (
                <Fragment key={category.sys.id}>
                  {category?.mainTitle && slug === 'drinks' && (
                    <DropdownMenu.Item onClick={() => setIsOpen(false)} className='DropdownMenuItem text-[18px] hover:underline'>
                      <Link href={`/carta/${slug}/#${category.mainTitle?.replaceAll(' ', '')}`}>
                        {category.mainTitle}
                      </Link>
                    </DropdownMenu.Item>
                  )}
                  {category?.title && slug === 'nikkei' && (
                    <DropdownMenu.Item onClick={() => setIsOpen(false)} className='DropdownMenuItem text-[18px] hover:underline'>
                      <Link href={`/carta/${slug}/#${category.title?.replaceAll(' ', '')}`}>
                        {category.title}
                      </Link>
                    </DropdownMenu.Item>
                  )}
                </Fragment>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}

export default Island
