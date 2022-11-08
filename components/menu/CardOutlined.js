const CardOutlined = () => {
  return (
    <div className='flex flex-col text-bloom-softGray-100 text-center border border-solid border-bloom-softGray-100 rounded-xl mt-14'>
      <div className='mb-3 mt-5'>
        <h2 className='text-xl tracking-widest'>JUGOS DE LA CASA</h2>
        <span className='text-sm'>3.500</span>
      </div>
      <div className='mb-14 flex-grow border-t mx-4' />
      <div className='flex flex-col gap-5 mb-10'>
        <h3 className='text-sm'>Frambuesa</h3>
        <h3 className='text-sm'>Mango</h3>
        <h3 className='text-sm'>Maracuyá</h3>
        <h3 className='text-sm'>Frutilla</h3>
      </div>
    </div>
  )
}

export default CardOutlined
