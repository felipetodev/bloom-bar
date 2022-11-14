const CardOutlined = ({ cardInfo }) => {
  const list = Object.values(cardInfo?.list ?? {})
  return (
    <div className='flex flex-col text-bloom-softGray-100 text-center border border-solid border-bloom-softGray-100 rounded-xl mt-14'>
      <div className='mb-3 mt-5'>
        <h2 id={cardInfo.title} className='text-xl sm:text-[30px] tracking-widest mb-[10px] font-marcellus'>
          {cardInfo.title}
        </h2>
        <span className='text-[15px] sm:text-[18px] font-abel'>
          {cardInfo.price}
        </span>
      </div>
      <div className='mb-14 flex-grow border-t mx-4' />
      <div className='flex flex-col gap-5 mb-10 font-marcellus'>
        {list?.map((item) => (
          <h3 key={item} className='text-[17px] sm:text-[22px]'>{item}</h3>
        ))}
      </div>
    </div>
  )
}

export default CardOutlined
