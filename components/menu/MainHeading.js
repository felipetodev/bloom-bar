import clsx from 'clsx'

const MainHeading = ({ title = 'BLOOM', variant = 'primary' }) => {
  const headingStyles = clsx(
    'text-xl text-center mt-60 mb-20 sm:text-[30px] tracking-bloom font-marcellus',
    {
      'text-bloom-orange-100': variant === 'primary',
      'text-bloom-celeste-100': variant === 'secondary'
    }
  )
  return (
    <h1 className={headingStyles}>
      {title}
    </h1>
  )
}

export default MainHeading
