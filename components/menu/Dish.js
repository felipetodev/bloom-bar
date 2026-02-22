import ImagePreview from '../../ui/ImagePreview'
import VeganIcon from '../../ui/VeganIcon'
import clsx from 'clsx'

const Dish = ({
  title,
  hasTitle,
  description,
  price,
  isVegan,
  isPrimary,
  image,
  onSelectImage
}) => {
  const styles = clsx(
    'text-[17px] sm:text-[22px] font-marcellus',
    {
      'mb-0': hasTitle,
      'mb-[10px]': !hasTitle
    }
  )
  return (
    <div
      className={clsx(
        'text-bloom-softGray-100 flex relative z-10',
        {
          'mb-[10px] sm:mb-[20px]': hasTitle,
          'first:pt-0 pt-8 sm:pt-10': !hasTitle
        }
      )}
    >
      <div className='flex flex-col justify-center'>
        <div className='flex items-baseline'>
          {isVegan && (
            <span className='pr-2 md:pr-4 text-bloom-softGray-100'>
              <VeganIcon />
            </span>
          )}
          <h3 className={styles}>{title}</h3>
          {image?.url && (
            <button
              onClick={onSelectImage}
              className={clsx(
                'self-baseline pl-2 md:pl-4 outline-none focus:outline-none transition overflow-visible', {
                  'text-bloom-orange-100 hover:text-bloom-orange-100/70': isPrimary,
                  'text-bloom-celeste-100 hover:text-bloom-celeste-100/70': !isPrimary
                }
              )}
            >
              <ImagePreview />
            </button>
          )}
        </div>
        {!hasTitle && (
          <p className='text-[15px] sm:text-lg font-abel'>{description}</p>
        )}
      </div>
      {price && (
        <span className='text-[15px] sm:text-lg pl-8 ml-auto font-abel'>
          {price}
        </span>
      )}
    </div>
  )
}

export default Dish
