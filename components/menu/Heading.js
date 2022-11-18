import clsx from 'clsx'

const Heading = ({ title, variant = 'primary', subtitle }) => {
  const styles = clsx(
    'ml-4 min-w-[28px] flex-grow border-t',
    {
      'border-bloom-orange-100': variant === 'primary',
      'border-bloom-celeste-100': variant === 'secondary'
    }
  )
  return (
    <div className='relative flex items-center pb-[70px] sm:pb-20'>
      <h2 id={title?.replaceAll(' ', '')} className='anchor w-min sm:w-full text-xl sm:text-[30px] text-bloom-softGray-100 tracking-bloom sm:max-w-[140px] md:max-w-[270px] font-marcellus leading-tight'>
        {title}
      </h2>
      <div className={styles} />
      {subtitle && (
        <h3 className='ml-4 text-lg text-bloom-softGray-100 font-abel min-w-fit text-end'>
          {subtitle}
        </h3>
      )}
    </div>
  )
}

export default Heading
