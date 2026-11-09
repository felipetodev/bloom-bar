import { useEffect } from 'react'

// locks page scroll while mounted, compensating the scrollbar width so the layout does not shift
const useScrollLock = () => {
  useEffect(() => {
    const { style } = document.documentElement
    const previous = { overflow: style.overflow, paddingRight: style.paddingRight }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    style.overflow = 'hidden'
    if (scrollbarWidth > 0) style.paddingRight = `${scrollbarWidth}px`

    return () => {
      style.overflow = previous.overflow
      style.paddingRight = previous.paddingRight
    }
  }, [])
}

export default useScrollLock
