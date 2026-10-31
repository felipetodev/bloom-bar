import { memo, useEffect, useMemo, useRef, useState } from 'react'
import IslandMenuItem, { getAnchorId } from '../components/menu/IslandMenuItem'

// .anchor scroll-margin-top (globals.css) + 2px of tolerance, so a section is active right after clicking its tab
const SECTION_OFFSET = 82

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

const HorizontalCategoryNav = memo(({ islandMenu }) => {
  const categories = useMemo(() => getNavCategories(islandMenu), [islandMenu])
  const ids = useMemo(() => categories.map(getAnchorId), [categories])

  const [activeId, setActiveId] = useState(ids[0])
  const navRef = useRef(null)
  const clickedIdRef = useRef(null)

  useEffect(() => {
    let frame = null

    const onViewportChange = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        setActiveId(getActiveId(ids, clickedIdRef.current))
      })
    }

    onViewportChange()
    window.addEventListener('scroll', onViewportChange, { passive: true })
    window.addEventListener('resize', onViewportChange)

    return () => {
      window.cancelAnimationFrame(frame)
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
      behavior: 'smooth'
    })
  }, [activeId])

  if (categories.length === 0) return null

  return (
    <nav
      ref={navRef}
      aria-label='Categorías de la carta'
      className='sticky top-0 z-40 flex items-center h-14 mb-14 -mx-5 sm:-mx-10 md:-mx-14 px-5 sm:px-10 md:px-14 bg-bloom-black-100 overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
    >
      <div className='flex gap-1 w-max'>
        {categories.map((category) => (
          <IslandMenuItem
            key={category.id}
            category={category}
            isActive={getAnchorId(category) === activeId}
            onClick={() => {
              clickedIdRef.current = getAnchorId(category)
              // sections in the same row share a scroll position, so the click may not fire a scroll event
              setActiveId(getAnchorId(category))
            }}
          />
        ))}
      </div>
    </nav>
  )
})

export default HorizontalCategoryNav
