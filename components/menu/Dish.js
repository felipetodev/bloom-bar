const Dish = ({ title, description, price }) => {
  return (
    <div className='text-bloom-softGray-100 flex'>
      <div className='flex flex-col'>
        <h3 className='mb-3 text-lg'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
      {price && (
        <span className='ml-8 text-lg'>
          {price}
        </span>
      )}
    </div>
  )
}

export default Dish
