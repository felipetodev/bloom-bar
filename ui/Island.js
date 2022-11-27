import { Fragment, useEffect, useState } from 'react'
import { Root, Portal, Content } from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { useIsland } from '../context/island-context'
import IslandMenuItem from '../components/menu/IslandMenuItem'
import IslandMenuOptions from '../components/menu/IslandMenuOptions'

const Island = ({ islandMenu }) => {
  const [open, setIsOpen] = useState(false)
  const {
    hasQuerySlug,
    nextMenu,
    slug,
    updateValues,
    menuCategoriesCollection
  } = useIsland()

  useEffect(() => {
    updateValues(islandMenu)
  }, [])

  return (
    <div className='bg-transparent pointer-events-none flex justify-center items-center fixed w-full bottom-0 py-10 bg-island-gradient z-30'>
      <div className='bg-bloom-black-100 pointer-events-auto flex justify-center items-center rounded-[7px] border border-solid border-bloom-softGray-100 max-w-max max-h-max min-w-[250px] min-h-[50px]'>
        <Root open={open} onOpenChange={(state) => setIsOpen(state)}>
          <IslandMenuOptions
            open={open}
            hasQuerySlug={hasQuerySlug}
            nextMenu={nextMenu}
          />
          <Portal>
            <Content
              align='start'
              sideOffset={5}
              alignOffset={hasQuerySlug && nextMenu?.color !== 'secondary' ? -156 : -10}
              className={clsx(
                'DropdownMenuContent max-h-[400px] sm:max-h-[500px] bg-bloom-black-100 rounded-lg text-bloom-softGray-100 flex flex-col gap-8 border border-solid border-bloom-softGray-100 p-[30px]', {
                  'min-w-[294px]': nextMenu?.color === 'secondary'
                }
              )}
            >
              {menuCategoriesCollection?.items?.map(category => (
                <Fragment key={category.sys.id}>
                  {category?.navbarIsland && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={slug}
                    />
                  )}
                  {category?.mainTitle && slug === 'drinks' && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={slug}
                    />
                  )}
                  {category?.title && slug === 'nikkei' && (
                    <IslandMenuItem
                      onClick={() => setIsOpen(false)}
                      category={category}
                      slug={slug}
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
}

export default Island
