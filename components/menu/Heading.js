import clsx from 'clsx'

const Heading = ({ title, variant = 'primary', subtitle, icon }) => {
  const styles = clsx(
    'ml-4 flex-grow border-t',
    {
      'border-bloom-orange-100': variant === 'primary',
      'border-bloom-celeste-100': variant === 'secondary'
    }
  )
  return (
    <div className='relative flex items-center pb-10'>
      {icon && (
        <span className='mr-4 text-bloom-softGray-100'>(🌱)</span>
      )}
      <h2 className='text-xl text-bloom-softGray-100 tracking-widest'>
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
