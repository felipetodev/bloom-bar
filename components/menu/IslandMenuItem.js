import { Item } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

const getAnchorLink = (category) => {
  const link = category?.title?.replaceAll(' ', '') || category?.mainTitle?.replaceAll(' ', '')
  return link ? `#${link}` : ''
}

const IslandMenuItem = ({ category, slug, onClick }) => (
  <Item onClick={onClick} className='DropdownMenuItem text-[18px] hover:underline'>
    <Link href={`/carta/${slug}/${getAnchorLink(category)}`}>
      {category?.title || category?.mainTitle}
    </Link>
  </Item>
)

export default IslandMenuItem
