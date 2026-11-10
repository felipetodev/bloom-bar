import { useEffect } from 'react'

// locks page scroll while mounted, compensating the scrollbar width so the layout does not shift
// the lock goes on <body>, not <html>: the page sets overflow on body, and a non-visible overflow on <html> stops body's
// from reaching the viewport, which turns body into its own scroll container and breaks every sticky element (navbar, category nav)
const useScrollLock = () => {
  useEffect(() => {
    const { body, documentElement } = document
    const previous = { overflow: body.style.overflow, paddingRight: documentElement.style.paddingRight }
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) documentElement.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previous.overflow
      documentElement.style.paddingRight = previous.paddingRight
    }
  }, [])
}

export default useScrollLock
