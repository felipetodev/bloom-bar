const Divider = ({ divider }) => (
  <>
    {divider?.mainTitle && (
      <div className='w-full py-[55px]'>
        <h1
          id={divider?.mainTitle?.replaceAll(' ', '')}
          className='anchor text-xl text-center tracking-bloom font-manrope text-bloom-darkGreen-100'
        >
          {divider.mainTitle}
        </h1>
      </div>
    )}
  </>
)

export default Divider
