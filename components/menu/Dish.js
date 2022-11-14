import VeganIcon from '../../ui/VeganIcon'
import clsx from 'clsx'

const Dish = ({ title, hasTitle, description, price, isVegan }) => {
  const styles = clsx(
    'text-[17px] sm:text-[22px] font-marcellus',
    {
      'mb-0': hasTitle,
      'mb-[10px]': !hasTitle
    }
  )
  return (
    <div className={clsx(
      'text-bloom-softGray-100 flex',
      {
        'mb-[10px] sm:mb-[20px]': hasTitle,
        'first:pt-0 pt-8 sm:pt-10': !hasTitle
      }
    )}
    >
      <div className='flex flex-col justify-center'>
        <div className='flex'>
          {isVegan && (
            <span className='pr-2 md:pr-4 text-bloom-softGray-100'>
              <VeganIcon />
            </span>
          )}
          <h3 className={styles}>{title}</h3>
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
