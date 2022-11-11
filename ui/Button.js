import clsx from 'clsx'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const styles = clsx(
    'min-w-fit text-sm sm:text-base border border-solid py-1 px-10 rounded-[4px]',
    className,
    {
      'border-bloom-orange-100 text-bloom-orange-100': variant === 'primary',
      'border-bloom-softGray-100 text-bloom-softGray-100': variant === 'secondary',
      'border-[#D9D9D9] text-[#D9D9D9] bg-white/25': variant === 'nav'
    }
  )
  return (
    <button {...props} className={styles}>
      {children}
    </button>
  )
}

export default Button
