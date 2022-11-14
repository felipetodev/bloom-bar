import { useState, useEffect } from 'react'

const tablet = {
  breakpoint: 1024
}

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || window.innerWidth < tablet.breakpoint
    setMobile(mobile)
  }, [])

  return isMobile
}

export default useDeviceDetect
