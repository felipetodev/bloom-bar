import Image from 'next/image'
import Heading from './menu/Heading'
import Dish from './menu/Dish'
import CardImage from './menu/CardImage'
import CardOutlined from './menu/CardOutlined'
import MainHeading from './menu/MainHeading'
import MenuSection from './menu/MenuSection'
import Divider from './menu/Divider'
import FlowerIconSpacer from '../ui/FlowerIconSpacer'
import useMediaQuery from '../hooks/useMediaQuery'

const tailwindMQ = '(max-width: 640px)'

const Menu = ({ menu }) => {
  const isMobile = useMediaQuery(tailwindMQ)
  const categories = menu?.menuCategoriesCollection.items
  const isPrimary = menu?.color === 'primary'
  const { desktopSection1LeftCollection, desktopSection1RightCollection, firstDivider } = menu || {}
  const { desktopSection2LeftCollection, desktopSection2RightCollection, secondDivider } = menu || {}
  const { desktopSection3LeftCollection, desktopSection3RightCollection, thirdDivider } = menu || {}
  const { desktopSection4LeftCollection, desktopSection4RightCollection } = menu || {}
  return (
    <>
      {isPrimary
        ? (
          <div
            style={{ transform: 'rotate(8deg)' }}
            className='absolute -top-4 -right-5 sm:-top-9 sm:right-14 w-[175.48px] sm:w-[230px] md:-top-3 md:right-20 md:w-[260px]'
          >
            <Image quality={100} width={400} height={400} src='/homies-carta.png' alt='homies carta' />
          </div>
          )
        : (
          <div
            style={{ transform: 'rotate(8deg)' }}
            className='absolute top-2 -right-2 sm:-top-4 sm:right-4 w-[175.48px] sm:w-[230px] md:-top-5 md:right-14 md:w-[260px]'
          >
            <Image quality={100} width={400} height={400} src='/maru-drinks.png' alt='maru drinks' />
          </div>
          )}
      <MainHeading title={menu?.mainTitle} variant={menu?.color} />
      {!isMobile && (
        <>
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection1LeftCollection} />
            <MenuSection menu={menu} section={desktopSection1RightCollection} />
          </div>
          <Divider divider={firstDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection2LeftCollection} />
            <MenuSection menu={menu} section={desktopSection2RightCollection} />
          </div>
          <Divider divider={secondDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection3LeftCollection} />
            <MenuSection menu={menu} section={desktopSection3RightCollection} />
          </div>
          <Divider divider={thirdDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection4LeftCollection} />
            <MenuSection menu={menu} section={desktopSection4RightCollection} />
          </div>
        </>
      )}
      {isMobile && (
        <div className='grid-cols-1'>
          {categories?.map((category, idx) => (
            <div key={category.sys.id} className='h-fit'>
              <Heading title={category.title} subtitle={category.subtitle} variant={menu?.color} />
              <div className='flex flex-col'>
                {category.dishesCollection.items.map((dish) => (
                  <Dish
                    key={dish.sys.id}
                    title={dish.title}
                    price={dish.price}
                    hasTitle={dish.uniqueTitle}
                    description={dish.description}
                    isVegan={dish.vegan}
                  />
                ))}
              </div>
              {category.image && (
                <CardImage cardInfo={category.image} variant={menu?.color} />
              )}
              {category.card && (
                <CardOutlined cardInfo={category.card} />
              )}
              {idx !== categories.length - 1 && (
                <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[85px]'>
                  <FlowerIconSpacer />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Menu
