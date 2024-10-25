import { Fragment, useState } from 'react'
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
import DishDialog from './DishDialog'

const tailwindMQ = '(max-width: 640px)'

const Menu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dishImage, setDishImage] = useState({})

  const isMobile = useMediaQuery(tailwindMQ)
  const categories = menu?.menuCategories
  const isPrimary = menu?.color === 'primary'
  const { desktopSection1Left, desktopSection1Right, firstDivider } = menu || {}
  const { desktopSection2Left, desktopSection2Right, secondDivider } = menu || {}
  const { desktopSection3Left, desktopSection3Right, thirdDivider } = menu || {}
  const { desktopSection4Left, desktopSection4Right } = menu || {}

  const onSelectImage = (img) => {
    setDishImage(img)
    setIsOpen(true)
  }

  return (
    <>
      {isPrimary
        ? (
          <div
            style={{ transform: 'rotate(8deg)' }}
            className='absolute -top-4 -right-5 sm:-top-9 sm:right-14 w-[175.48px] sm:w-[230px] md:-top-3 md:right-20 md:w-[260px]'
          >
            <Image decoding='sync' quality={100} width={400} height={400} src='/homies-carta.png' alt='homies carta' />
          </div>
          )
        : (
          <div
            style={{ transform: 'rotate(8deg)' }}
            className='absolute top-2 -right-2 sm:-top-4 sm:right-4 w-[175.48px] sm:w-[230px] md:-top-5 md:right-14 md:w-[260px]'
          >
            <Image decoding='sync' quality={100} width={400} height={400} src='/maru-drinks.png' alt='maru drinks' />
          </div>
          )}
      <MainHeading title={menu?.mainTitle} variant={menu?.color} />
      {!isMobile && (
        <>
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection1Left} onSelectImage={onSelectImage} />
            <MenuSection menu={menu} section={desktopSection1Right} onSelectImage={onSelectImage} />
          </div>
          <Divider divider={firstDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection2Left} onSelectImage={onSelectImage} />
            <MenuSection menu={menu} section={desktopSection2Right} onSelectImage={onSelectImage} />
          </div>
          <Divider divider={secondDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection3Left} onSelectImage={onSelectImage} />
            <MenuSection menu={menu} section={desktopSection3Right} onSelectImage={onSelectImage} />
          </div>
          <Divider divider={thirdDivider} />
          <div className='flex sm:gap-x-24 md:gap-x-36 w-100'>
            <MenuSection menu={menu} section={desktopSection4Left} onSelectImage={onSelectImage} />
            <MenuSection menu={menu} section={desktopSection4Right} onSelectImage={onSelectImage} />
          </div>
        </>
      )}
      {isMobile && (
        <div className='grid-cols-1'>
          {categories?.map((category, idx) => (
            <Fragment key={category?.id || idx}>
              {category?.mainTitle
                ? <Divider isMobile divider={category} />
                : (
                  <div className='h-fit'>
                    {(category.title || category.subtitle) && (
                      <Heading title={category.title} subtitle={category.subtitle} variant={menu?.color} />
                    )}
                    <div className='flex flex-col'>
                      {category.dishes?.map((dish) => (
                        <Dish
                          key={dish.id}
                          title={dish.title}
                          price={dish.price}
                          hasTitle={dish.uniqueTitle}
                          description={dish.description}
                          isVegan={dish.vegan}
                          isPrimary={isPrimary}
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
                      <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[85px]'>
                        <FlowerIconSpacer />
                      </div>
                    )}
                  </div>
                  )}
            </Fragment>
          ))}
        </div>
      )}

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
