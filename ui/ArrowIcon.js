
const ArrowIcon = ({ isOpen }) => (
  <svg className='transition-all' style={isOpen ? { transform: 'rotate(180deg)' } : {}} focusable='false' width='20' height='20' aria-hidden='true' viewBox='0 0 24 24'>
    <path fill='currentColor' d='M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z' />
  </svg>
)

export default ArrowIcon
