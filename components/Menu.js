import Heading from './menu/Heading'
import Dish from './menu/Dish'
import CardImage from './menu/CardImage'
import CardOutlined from './menu/CardOutlined'
import MainHeading from './menu/MainHeading'
import FlowerIconSpacer from '../ui/FlowerIconSpacer'

const Menu = ({ menu }) => {
  const categories = menu?.menuCategoriesCollection.items
  const isPrimary = menu?.color === 'primary'
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
      <div className='grid-cols-1 sm:columns-2 sm:gap-x-24 md:gap-x-36'>
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
              <div className='text-bloom-softGray-100 flex justify-center py-14 sm:py-[85px]'>
                <FlowerIconSpacer />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu
