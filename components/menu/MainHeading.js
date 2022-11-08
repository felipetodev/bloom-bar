import clsx from 'clsx'

const MainHeading = ({ variant = 'primary' }) => {
  const headingStyles = clsx(
    'text-xl text-center mt-60 mb-20 sm:text-[30px] tracking-widest',
    {
      'text-bloom-orange-100': variant === 'primary',
      'text-bloom-celeste-100': variant === 'secondary'
    }
  )
  return (
    <h1 className={headingStyles}>
      BLOOM NIKKEI
    </h1>
  )
}

export default MainHeading
