import Image from 'next/image'
import FlowerIcon from '../../ui/FlowerIcon'
import clsx from 'clsx'

const CardImage = ({ cardInfo, variant = 'primary' }) => {
  const styles = clsx({
    'text-bloom-orange-100': variant === 'primary',
    'text-bloom-celeste-100': variant === 'secondary'
  })
  return (
    <div className='relative z-10 overflow-hidden max-w-fit min-w-full w-full mt-14'>
      <Image
        className='object-cover rounded-xl w-full'
        width={600}
        height={600}
        title={cardInfo.title}
        alt={cardInfo.title ?? 'menu-image'}
        src={cardInfo.url}
      />
      <div className='rounded-xl absolute bg-menu-card bottom-0 left-0 right-0 top-0 flex justify-between items-end w-full p-5 overflow-hidden'>
        <span className={styles}>
          <FlowerIcon />
        </span>
        <h4 className='text-bloom-softGray-100'>{cardInfo.title}</h4>
      </div>
    </div>
  )
}
export default CardImage
