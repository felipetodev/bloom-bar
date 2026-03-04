import { motion } from 'framer-motion'

const transition = { type: 'tween', duration: 0.2 }

const MenuIcon = ({ isOpen, ...props }) => (
  <svg {...props} width='41' height='37' viewBox='0 0 41 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <motion.line
      style={{ transformOrigin: '20.5px 10.918px' }}
      initial={false}
      variants={{
        closed: { rotate: 0, y: 0, transition },
        open: { rotate: -45, y: 7, transition }
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
      initial={false}
      variants={{
        closed: { opacity: 1, transition },
        open: { opacity: 0, transition: { duration: 0 } }
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
      style={{ transformOrigin: '20.5px 24.918px' }}
      initial={false}
      variants={{
        closed: { rotate: 0, y: 0, transition },
        open: { rotate: 45, y: -7, transition }
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
