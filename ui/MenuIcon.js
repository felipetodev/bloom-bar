import { motion } from 'framer-motion'

const MenuIcon = ({ isOpen, ...props }) => (
  <svg {...props} width='41' height='37' viewBox='0 0 41 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <motion.line
      variants={{
        closed: { transform: 'rotate(0deg) translate(0px, 0px)' },
        open: { transform: 'rotate(-43deg) translate(-6px, 6.5px)' }
      }}
      animate={isOpen ? 'open' : 'closed'}
      x1='1.55078'
      y1='10.918'
      x2='39.5508'
      y2='10.918'
      stroke='#DDD6CF'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <motion.line
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 }
      }}
      animate={isOpen ? 'open' : 'closed'}
      x1='1.55078'
      y1='17.918'
      x2='39.5508'
      y2='17.918'
      stroke='#DDD6CF'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <motion.line
      variants={{
        closed: { transform: 'rotate(0deg) translate(0px, 0px)' },
        open: { transform: 'rotate(43deg) translate(-3px, -4px)' }
      }}
      animate={isOpen ? 'open' : 'closed'}
      x1='1.55078'
      y1='24.918'
      x2='39.5508'
      y2='24.918'
      stroke='#DDD6CF'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)

export default MenuIcon
