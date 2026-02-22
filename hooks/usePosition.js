import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function usePosition () {
  const [position, setPosition] = useState({ y: 0 })
  const { query } = useRouter()

  useEffect(() => {
    const calculateHeightPosition = () => {
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) - 1250 // footer height * 2

      setPosition({ y: docHeight })
    }

    const timeout = setTimeout(() => {
      calculateHeightPosition()
    }, 100)

    // window.addEventListener('resize', handleResize)

    return () => {
      // window.removeEventListener('resize', handleResize)
      clearTimeout(timeout)
    }
  }, [query.slug])

  return { position }
}
