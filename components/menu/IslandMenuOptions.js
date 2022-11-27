import Link from 'next/link'
import { Trigger } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import FlameIcon from '../../ui/FlameIcon'
import ArrowIcon from '../../ui/ArrowIcon'
import ArrowNext from '../../ui/ArrowNext'
import WineCupIcon from '../../ui/WineCupIcon'

const IslandMenuOptions = ({ hasQuerySlug, nextMenu, open }) => {
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
    }
  )
  return (
    <div className='flex justify-between items-center p-2'>
      {hasQuerySlug && nextMenu?.color !== 'secondary' && (
        <div className='mr-2 ml-1 rotate-180'>
          <ArrowNext />
        </div>
      )}
      {hasQuerySlug && nextMenu?.color !== 'secondary' && (
        <Link href={`/carta/${nextMenu?.slug ?? ''}`} className='flex justify-between items-center group'>
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
      <Trigger asChild>
        <button className={triggerStyles} aria-label='Customise options'>
          <ArrowIcon isOpen={open} /> CARTA
        </button>
      </Trigger>
      {(!hasQuerySlug || nextMenu?.color === 'secondary') && (
        <Link href={`/carta/${nextMenu?.slug ?? ''}`} className='flex justify-between items-center group'>
          <div className='mr-2 text-bloom-softGray-100 self-center'>
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
  )
}

export default IslandMenuOptions
