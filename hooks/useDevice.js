import { useState, useEffect } from 'react'

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    setMobile(mobile)
  }, [])

  return isMobile
}

export default useDeviceDetect
