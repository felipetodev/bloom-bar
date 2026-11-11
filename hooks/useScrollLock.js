import { useEffect } from 'react'

// locks page scroll while mounted, compensating the scrollbar width so the layout does not shift
// the lock goes on <body>, not <html>: the page sets overflow on body, and a non-visible overflow on <html> stops body's
// from reaching the viewport, which turns body into its own scroll container and breaks every sticky element (navbar, category nav)
//
// several locks can be active at once (favorites panel + nav menu) and may be released in any order, so the original
// styles are captured only by the first lock and restored only when the last one is released
let locks = 0
let previous = null

const useScrollLock = () => {
  useEffect(() => {
    const { body, documentElement } = document

    if (locks === 0) {
      previous = { overflow: body.style.overflow, paddingRight: documentElement.style.paddingRight }
      const scrollbarWidth = window.innerWidth - documentElement.clientWidth

      body.style.overflow = 'hidden'
      if (scrollbarWidth > 0) documentElement.style.paddingRight = `${scrollbarWidth}px`
    }
    locks++

    return () => {
      locks--
      if (locks === 0 && previous) {
        body.style.overflow = previous.overflow
        documentElement.style.paddingRight = previous.paddingRight
        previous = null
      }
    }
  }, [])
}

export default useScrollLock
