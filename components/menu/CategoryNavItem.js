import clsx from 'clsx'

export const getAnchorId = (category) => (
  category?.title?.replaceAll(' ', '') || category?.mainTitle?.replaceAll(' ', '') || ''
)

const CategoryNavItem = ({ category, isActive, onClick }) => (
  <button
    type='button'
    onClick={onClick}
    aria-current={isActive ? 'location' : undefined}
    className={clsx(
      'outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#DB7526]',
      'shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm uppercase tracking-wider text-bloom-softGray-100 transition-colors hover:bg-bloom-darkGreen-200', {
        'bg-bloom-darkGreen-200': isActive,
        'opacity-70 hover:opacity-100': !isActive
      }
    )}
  >
    {category?.title || category?.mainTitle}
  </button>
)

export default CategoryNavItem
