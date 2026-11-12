import clsx from 'clsx'

export const getAnchorId = (category) => (
  category?.title?.replaceAll(' ', '') || category?.mainTitle?.replaceAll(' ', '') || ''
)

const CategoryNavItem = ({ category, isActive, isVisible = true, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    aria-current={isActive && isVisible ? 'location' : undefined}
    className={clsx(
      'outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#DB7526]',
      'shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm uppercase tracking-wider text-bloom-softGray-100', {
        // the transition lives on the active state only: the tab becoming active fades in, the one losing it
        // switches off instantly (no cross-fade while scrolling) and hover feedback stays immediate.
        // Only color/opacity change, so it is kept under prefers-reduced-motion
        'bg-bloom-darkGreen-200 transition-[background-color,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]': isActive && isVisible,
        // hover gated to real pointers (touch fires sticky false hovers); lighter than the active background
        // so hover and selected can be told apart
        'opacity-70 [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-bloom-darkGreen-200/50': !isActive || !isVisible
      }
    )}
  >
    {category?.title || category?.mainTitle}
  </button>
)

export default CategoryNavItem
