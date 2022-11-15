import FlowerIconSpacer from '../../ui/FlowerIconSpacer'
import CardImage from './CardImage'
import CardOutlined from './CardOutlined'
import Dish from './Dish'
import Heading from './Heading'

const MenuSection = ({ menu, section }) => (
  <>
    {section?.items?.length > 0 && (
      <div className='w-full'>
        <div className='flex flex-col'>
          {section?.items?.map((category, idx) => (
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
              {idx !== section?.items?.length - 1 && (
                <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[85px]'>
                  <FlowerIconSpacer />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </>
)

export default MenuSection
