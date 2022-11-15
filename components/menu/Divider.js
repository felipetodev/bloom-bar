import FlowerIconSpacer from '../../ui/FlowerIconSpacer'

const Divider = ({ divider }) => (
  <>
    {divider?.title && (
      <>
        <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[150px]'>
          <FlowerIconSpacer />
        </div>
        <div className='w-full pb-[55px] sm:pb-[150px]'>
          <h1
            id={divider?.title?.replaceAll(' ', '')}
            className='text-xl text-center sm:text-[30px] tracking-bloom font-marcellus text-bloom-softGray-100'
          >
            {divider.title}
          </h1>
        </div>
      </>
    )}
  </>
)

export default Divider
