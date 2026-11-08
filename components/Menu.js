import { Fragment, useState } from 'react'
import Heading from './menu/Heading'
import Dish from './menu/Dish'
import CardImage from './menu/CardImage'
import CardOutlined from './menu/CardOutlined'
import Divider from './menu/Divider'
import FlowerIconSpacer from '../ui/FlowerIconSpacer'
import HorizontalCategoryNav from '../ui/HorizontalCategoryNav'
import DishDialog from './DishDialog'

const Menu = ({ menu, categoryNav }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dishImage, setDishImage] = useState({})

  const categories = menu?.menuCategories

  const onSelectImage = (img) => {
    setDishImage(img)
    setIsOpen(true)
  }

  return (
    <>
      <HorizontalCategoryNav categoryNav={categoryNav} />
      <main className='mx-auto w-full max-w-[600px] md:max-w-[800px]'>
        {categories?.map((category, idx) => (
          <Fragment key={category?.id || idx}>
            {category?.mainTitle
              ? <Divider divider={category} />
              : (
                <div className='h-fit'>
                  {(category.title || category.subtitle) && (
                    <Heading title={category.title} subtitle={category.subtitle} image={category.sectionImage} />
                  )}
                  <div className='flex flex-col gap-3'>
                    {category.dishes?.map((dish) => (
                      <Dish
                        key={dish.id}
                        title={dish.title}
                        price={dish.price}
                        hasTitle={dish.uniqueTitle}
                        description={dish.description}
                        isVegan={dish.vegan}
                        image={dish.image}
                        onSelectImage={() => onSelectImage(dish.image)}
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
                    <div className='text-bloom-darkGreen-100 flex justify-center py-[55px] sm:py-[85px]'>
                      <FlowerIconSpacer />
                    </div>
                  )}
                </div>
                )}
          </Fragment>
        ))}
      </main>

      <DishDialog
        isOpen={isOpen}
        onHandleOpen={() => setIsOpen(false)}
        dishImage={dishImage}
      />

      {/* <DialogPromo /> */}
    </>
  )
}

export default Menu
