import Heading from './menu/Heading'
import Dish from './menu/Dish'
import CardImage from './menu/CardImage'
import CardOutlined from './menu/CardOutlined'
import MainHeading from './menu/MainHeading'

const Menu = () => {
  return (
    <>
      <MainHeading variant='primary' />
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-24 md:gap-x-36'>
        <div>
          <Heading title='IZAKAYA' />
          <Dish
            title='Batera sakana y foie (6 bocados)'
            price='12.900'
            description='Bocados rectangulares rellenos de chicharrón de pescado, neggi y palta, cubiertos de pescado blanco grillado con
          foie gras y emulsión de ostra.'
          />
          <CardImage />
        </div>
        <div>
          <Heading title='IZAKAYA' subtitle='6 y 10 bocados' variant='primary' />
          <Dish
            title='Batera sakana y foie (6 bocados)'
            price='12.900'
            description='Bocados rectangulares rellenos de chicharrón de pescado, neggi y palta, cubiertos de pescado blanco grillado con
          foie gras y emulsión de ostra.'
          />
          <CardImage />
          <CardOutlined />
        </div>
      </div>
    </>
  )
}

export default Menu
