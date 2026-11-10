import { memo, useEffect, useMemo, useRef, useState } from 'react'
import CategoryNavItem, { getAnchorId } from '../components/menu/CategoryNavItem'

// .anchor scroll-margin-top (globals.css) + 2px of tolerance, so a section is active right after clicking its tab
const SECTION_OFFSET = 82
// after a tab click the page scrolls smoothly; the active tab is recomputed once scrolling stops
const SCROLL_IDLE_MS = 150

const getNavCategories = ({ menuCategories }) => (
  menuCategories?.filter((category) => getAnchorId(category)) ?? []
)

// last section whose top has reached the offset (first one if none has)
const getActiveId = (ids) => {
  let activeId = ids[0]
  // the sticky MenuNavbar sits above the category nav
  const navbarHeight = parseFloat(window.getComputedStyle(document.body).getPropertyValue('--menu-navbar-h')) || 0
  const offset = SECTION_OFFSET + navbarHeight

  ids.forEach((id) => {
    const top = document.getElementById(id)?.getBoundingClientRect().top
    if (top !== undefined && top <= offset) activeId = id
  })

  return activeId
}

const HorizontalCategoryNav = memo(({ categoryNav }) => {
  const categories = useMemo(() => getNavCategories(categoryNav), [categoryNav])
  const ids = useMemo(() => categories.map(getAnchorId), [categories])

  const [activeId, setActiveId] = useState(ids[0])
  // false until the first scroll-based computation of the active tab, so the tabs fade in already correct
  const [isReady, setIsReady] = useState(false)
  const navRef = useRef(null)
  const hasShownTabsRef = useRef(false)
  // timeout id while a tab click is scrolling the page, so the tabs in between are not highlighted
  const scrollLockRef = useRef(null)
  const lockUntilIdleRef = useRef(null)

  useEffect(() => {
    let frame = null
    let settleFrame = null
    // stays false until the page has loaded and the browser had a chance to restore the scroll position
    let isSettled = false

    const updateActiveId = () => {
      setActiveId(getActiveId(ids))
      if (isSettled) setIsReady(true)
    }

    const settle = () => {
      settleFrame = window.requestAnimationFrame(() => {
        settleFrame = window.requestAnimationFrame(() => {
          settleFrame = null
          isSettled = true
          updateActiveId()
        })
      })
    }

    const lockUntilIdle = () => {
      window.clearTimeout(scrollLockRef.current)
      scrollLockRef.current = window.setTimeout(() => {
        scrollLockRef.current = null
        updateActiveId()
      }, SCROLL_IDLE_MS)
    }
    lockUntilIdleRef.current = lockUntilIdle

    const onViewportChange = () => {
      if (scrollLockRef.current !== null) {
        lockUntilIdle()
        return
      }
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        updateActiveId()
      })
    }

    onViewportChange()
    if (document.readyState === 'complete') settle()
    else window.addEventListener('load', settle, { once: true })
    window.addEventListener('scroll', onViewportChange, { passive: true })
    window.addEventListener('resize', onViewportChange)

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(settleFrame)
      window.removeEventListener('load', settle)
      window.clearTimeout(scrollLockRef.current)
      scrollLockRef.current = null
      window.removeEventListener('scroll', onViewportChange)
      window.removeEventListener('resize', onViewportChange)
    }
  }, [ids])

  useEffect(() => {
    const nav = navRef.current
    const tab = nav?.querySelector('[aria-current]')
    if (!tab) return

    nav.scrollTo({
      left: tab.offsetLeft - (nav.clientWidth - tab.offsetWidth) / 2,
      // the first positioning happens while the tabs are still fading in, so it must not be seen sliding
      behavior: hasShownTabsRef.current ? 'smooth' : 'instant'
    })
    if (isReady) hasShownTabsRef.current = true
  }, [activeId, isReady])

  if (categories.length === 0) return null

  return (
    <nav
      ref={navRef}
      aria-label='Categorías de la carta'
      className='sticky top-[var(--menu-navbar-h)] z-40 flex items-center h-14 mb-14 -mx-5 sm:-mx-10 md:-mx-14 px-5 sm:px-10 md:px-14 bg-bloom-darkGreen-100 shadow-[0_0_0_100vmax_theme(colors.bloom.darkGreen.100)] [clip-path:inset(0_-100vmax)] overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
    >
      <div className='flex gap-1 w-max'>
        {categories.map((category) => (
          <CategoryNavItem
            key={category.id}
            category={category}
            isActive={getAnchorId(category) === activeId}
            isVisible={isReady}
            onClick={() => {
              const id = getAnchorId(category)
              lockUntilIdleRef.current?.()
              setActiveId(id)
              // no URL hash on purpose; smoothness comes from CSS scroll-behavior (respects reduced motion)
              document.getElementById(id)?.scrollIntoView({ block: 'start' })
            }}
          />
        ))}
      </div>
    </nav>
  )
})

export default HorizontalCategoryNav
