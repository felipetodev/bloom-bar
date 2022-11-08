import { motion } from 'framer-motion'

const SignIcon = ({ custom, id, controls }) => {
  return (
    <motion.svg width='215' height='62' viewBox='0 0 215 62' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        key={id}
        custom={custom}
        d='M2.34375 47.8937C15.2384 45.1306 55.6847 32.495 60.3696 20.8764C68.045 1.84148 -16.6911 50.3498 37.0365 50.3498C90.764 50.3498 145.72 25.1746 134.667 8.90282C123.615 -7.36896 29.0541 40.8324 81.8606 56.4901C134.667 72.1479 194.228 35.3061 206.202 15.6571C218.175 -3.9918 197.912 -3.37777 173.658 19.3413C149.404 42.0604 154.84 62.3234 212.757 37.7622'
        stroke='#D16A1B'
        strokeWidth={3}
        strokeLinecap='round'
        initial={{
          pathLength: 0
        }}
        animate={controls}
        transition={{
          delay: 0.1,
          duration: 0.5
        }}
      />
    </motion.svg>
  )
}

export default SignIcon
