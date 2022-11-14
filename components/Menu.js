import Heading from './menu/Heading'
import Dish from './menu/Dish'
import CardImage from './menu/CardImage'
import CardOutlined from './menu/CardOutlined'
import MainHeading from './menu/MainHeading'
import FlowerIconSpacer from '../ui/FlowerIconSpacer'
import useMediaQuery from '../hooks/useMediaQuery'

const tailwindMQ = '(max-width: 640px)'

const Menu = ({ menu }) => {
  const isMobile = useMediaQuery(tailwindMQ)
  const categories = menu?.menuCategoriesCollection.items
  const isPrimary = menu?.color === 'primary'
  const { desktopLeftSideCollection, desktopRightSideCollection } = menu || {}
  return (
    <>
      {isPrimary
        ? (
          <div className='absolute w-52 top-2 -right-6 sm:invisible md:visible md:-top-4 md:right-9 md:w-auto'>
            <img className='' src='/nikkei-ship.svg' alt='ship' />
          </div>
          )
        : (
          <div className='absolute w-48 top-2 -right-14 sm:invisible'>
            <img className='' src='/gin.svg' alt='gin' />
          </div>
          )}
      <MainHeading title={menu?.mainTitle} variant={menu?.color} />
      {!isMobile && (
        <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
          {/* LEFTSIDE */}
          <div className='w-full'>
            <div className='flex flex-col h-full'>
              {desktopLeftSideCollection?.items.map((category, idx) => (
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
                  {idx !== desktopLeftSideCollection.items.length - 1 && (
                    <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[85px]'>
                      <FlowerIconSpacer />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* RIGHTSIDE */}
          <div className='w-full'>
            <div className='flex flex-col'>
              {desktopRightSideCollection?.items.map((category, idx) => (
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
                  {idx !== desktopRightSideCollection.items.length - 1 && (
                    <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[85px]'>
                      <FlowerIconSpacer />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        // <div className='grid-cols-1 sm:columns-2 sm:gap-x-24 md:gap-x-36'>
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
