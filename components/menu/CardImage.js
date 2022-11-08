import Image from 'next/image'
import FlowerIcon from '../../ui/FlowerIcon'

const CardImage = () => {
  return (
    <div className='relative overflow-hidden max-w-fit mt-14'>
      <Image
        className='object-cover rounded-xl'
        width={600}
        height={600}
        alt='bloombar-wave-bg'
        src='/sashimi.jpeg'
      />
      <div className='rounded-xl absolute bg-menu-card bottom-0 left-0 right-0 top-0 flex justify-between items-end w-full p-5 overflow-hidden'>
        <FlowerIcon />
        <h2 className='text-bloom-softGray-100'>Tiradito Shiromi</h2>
      </div>
    </div>
  )
}
export default CardImage
