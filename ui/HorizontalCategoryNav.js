import { memo, useEffect, useMemo, useRef, useState } from 'react'
import CategoryNavItem, { getAnchorId } from '../components/menu/CategoryNavItem'

// .anchor scroll-margin-top (globals.css) + 2px of tolerance, so a section is active right after clicking its tab
const SECTION_OFFSET = 82
// after a tab click the page scrolls smoothly; the active tab is recomputed once scrolling stops
const SCROLL_IDLE_MS = 150
// sessionStorage key and how long the page height must stay unchanged before manual restoration stops
const SCROLL_STORAGE_KEY = 'carta-scroll-position'
const SCROLL_SETTLE_MS = 600

const getNavCategories = ({ menuCategories }) => (
  menuCategories?.filter((category) => getAnchorId(category)) ?? []
)

// picks by position instead of list order because desktop renders the sections in two columns
const getActiveId = (ids, clickedId) => {
  let activeId = ids[0]
  let activeTop = -Infinity

  ids.forEach((id) => {
    const top = document.getElementById(id)?.getBoundingClientRect().top
    if (top === undefined || top > SECTION_OFFSET) return

    const isSameRow = Math.abs(top - activeTop) < 1
    if (isSameRow ? id === clickedId : top > activeTop) {
      activeId = id
      activeTop = top
    }
  })

  return activeId
}

const HorizontalCategoryNav = memo(({ categoryNav }) => {
  const categories = useMemo(() => getNavCategories(categoryNav), [categoryNav])
  const ids = useMemo(() => categories.map(getAnchorId), [categories])

  const [activeId, setActiveId] = useState(ids[0])
  const navRef = useRef(null)
  const clickedIdRef = useRef(null)
  // timeout id while a tab click is scrolling the page, so the tabs in between are not highlighted
  const scrollLockRef = useRef(null)
  const lockUntilIdleRef = useRef(null)

  useEffect(() => {
    let frame = null

    const updateActiveId = () => setActiveId(getActiveId(ids, clickedIdRef.current))

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
    window.addEventListener('scroll', onViewportChange, { passive: true })
    window.addEventListener('resize', onViewportChange)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(scrollLockRef.current)
      scrollLockRef.current = null
      window.removeEventListener('scroll', onViewportChange)
      window.removeEventListener('resize', onViewportChange)
    }
  }, [ids])

  // Manual scroll restoration anchored to a section (+ offset) instead of raw pixels. The browser restores
  // before the desktop/mobile switch and image loading finish, so the page height is still wrong by then.
  // Here we keep re-aligning to the saved section while the document height changes, until it settles
  // or the user takes control.
  useEffect(() => {
    if (ids.length === 0) return

    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    let saved = null
    try {
      saved = JSON.parse(window.sessionStorage.getItem(SCROLL_STORAGE_KEY))
    } catch (e) {}

    let restoring = Boolean(saved)
    let frame = null
    let settleTimer = null
    const userEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown']

    // last section whose top has reached the sticky nav, and where it currently sits in the viewport
    const findPosition = () => {
      let position = null
      ids.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top === undefined || top > SECTION_OFFSET) return
        if (position === null || top > position.top) position = { id, top }
      })
      return position
    }

    const save = () => {
      if (restoring) return
      try {
        const position = findPosition()
        if (position) window.sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(position))
        else window.sessionStorage.removeItem(SCROLL_STORAGE_KEY)
      } catch (e) {}
    }

    const onScroll = () => {
      if (frame !== null || restoring) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        save()
      })
    }

    const align = () => {
      const top = document.getElementById(saved.id)?.getBoundingClientRect().top
      if (top === undefined) return
      const delta = top - saved.top
      if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: 'instant' })
    }

    const resizeObserver = new window.ResizeObserver(() => {
      align()
      armSettle()
    })

    const finishRestoring = () => {
      restoring = false
      window.clearTimeout(settleTimer)
      resizeObserver.disconnect()
      window.removeEventListener('load', align)
      userEvents.forEach((event) => window.removeEventListener(event, finishRestoring))
    }

    const armSettle = () => {
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(finishRestoring, SCROLL_SETTLE_MS)
    }

    if (restoring) {
      align()
      armSettle()
      resizeObserver.observe(document.body)
      window.addEventListener('load', align)
      userEvents.forEach((event) => window.addEventListener(event, finishRestoring, { passive: true, once: true }))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pagehide', save)

    return () => {
      window.cancelAnimationFrame(frame)
      finishRestoring()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pagehide', save)
      window.history.scrollRestoration = previousRestoration
    }
  }, [ids])

  useEffect(() => {
    const nav = navRef.current
    const tab = nav?.querySelector('[aria-current]')
    if (!tab) return

    nav.scrollTo({
      left: tab.offsetLeft - (nav.clientWidth - tab.offsetWidth) / 2,
      behavior: 'smooth'
    })
  }, [activeId])

  if (categories.length === 0) return null

  return (
    <nav
      ref={navRef}
      aria-label='Categorías de la carta'
      className='sticky top-0 z-40 flex items-center h-14 mb-14 -mx-5 sm:-mx-10 md:-mx-14 px-5 sm:px-10 md:px-14 bg-bloom-darkGreen-100 shadow-[0_0_0_100vmax_theme(colors.bloom.darkGreen.100)] [clip-path:inset(0_-100vmax)] overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
    >
      <div className='flex gap-1 w-max'>
        {categories.map((category) => (
          <CategoryNavItem
            key={category.id}
            category={category}
            isActive={getAnchorId(category) === activeId}
            onClick={() => {
              const id = getAnchorId(category)
              clickedIdRef.current = id
              lockUntilIdleRef.current?.()
              // sections in the same row share a scroll position, so the click may not fire a scroll event
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
