import { motion } from 'framer-motion'

const SignIcon = () => {
  return (
    <svg width='343' height='6' viewBox='0 0 343 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        d='M3.05078 3.39844H340.289'
        stroke='#D16A1B'
        strokeWidth='5'
        strokeLinecap='round'
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        exit={{
          pathLength: 0
        }}
        transition={{
          delay: 0.1,
          duration: 0.5
        }}
      />
    </svg>
  )
}

export default SignIcon
