import clsx from 'clsx'

const Heading = ({ title, variant = 'primary', subtitle }) => {
  const styles = clsx(
    'ml-4 flex-grow border-t',
    {
      'border-bloom-orange-100': variant === 'primary',
      'border-bloom-celeste-100': variant === 'secondary'
    }
  )
  return (
    <div className='relative flex items-center pb-20'>
      <h2 id={title} className='text-xl text-bloom-softGray-100 tracking-widest sm:max-w-[140px] md:max-w-full'>
        {title}
      </h2>
      <div className={styles} />
      {subtitle && (
        <h3 className='ml-4 text-sm text-bloom-softGray-100'>
          {subtitle}
        </h3>
      )}
    </div>
  )
}

export default Heading
