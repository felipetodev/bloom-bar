import { Fragment, useState, memo } from 'react'
import { Root, Portal, Content } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import IslandMenuItem from '../components/menu/IslandMenuItem'
import IslandMenuOptions from '../components/menu/IslandMenuOptions'

const islandNextRoute = {
  drinks: {
    color: 'primary',
    slug: 'nikkei'
  },
  nikkei: {
    color: 'secondary',
    slug: 'drinks'
  }
}

const Island = memo(({ islandMenu }) => {
  const [open, setIsOpen] = useState(false)

  return (
    <div className='bg-transparent pointer-events-none flex justify-center items-center fixed w-full bottom-0 py-10 bg-island-gradient z-30'>
      <div className='bg-bloom-black-100 pointer-events-auto flex justify-center items-center rounded-[7px] border border-solid border-bloom-softGray-100 max-w-max max-h-max min-w-[250px] min-h-[50px]'>
        <Root open={open} onOpenChange={(state) => setIsOpen(state)}>
          <IslandMenuOptions
            open={open}
            nextMenu={islandNextRoute[islandMenu.slug]}
          />
          <Portal>
            <Content
              align='start'
              sideOffset={5}
              alignOffset={islandNextRoute[islandMenu.slug]?.color !== 'secondary' ? -156 : -10}
              className={clsx(
                'DropdownMenuContent max-h-[400px] sm:max-h-[500px] bg-bloom-black-100 rounded-lg text-bloom-softGray-100 flex flex-col gap-8 border border-solid border-bloom-softGray-100 p-[30px]', {
                  'min-w-[294px]': islandNextRoute[islandMenu.slug]?.color === 'secondary'
                }
              )}
            >
              {islandMenu.menuCategories?.map(category => (
                <Fragment key={category.id}>
                  {category?.navbarIsland && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={islandMenu.slug}
                    />
                  )}
                  {category?.mainTitle && islandMenu.slug === 'drinks' && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={islandMenu.slug}
                    />
                  )}
                  {category?.title && islandMenu.slug === 'nikkei' && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={islandMenu.slug}
                    />
                  )}
                </Fragment>
              ))}
            </Content>
          </Portal>
        </Root>
      </div>
    </div>
  )
})

export default Island
