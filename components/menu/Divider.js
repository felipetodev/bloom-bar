import clsx from 'clsx'
import FlowerIconSpacer from '../../ui/FlowerIconSpacer'

const Divider = ({ divider, isMobile }) => (
  <>
    {divider?.mainTitle && (
      <>
        {!isMobile && (
          <div className='text-bloom-softGray-100 flex justify-center py-[55px] sm:py-[150px]'>
            <FlowerIconSpacer />
          </div>
        )}
        <div className={clsx(
          'w-full sm:pb-[150px]', {
            'pb-[55px]': !isMobile,
            'py-[55px]': isMobile
          }
        )}
        >
          <h1
            id={divider?.mainTitle?.replaceAll(' ', '')}
            className='anchor text-xl text-center sm:text-[30px] tracking-bloom font-marcellus text-bloom-softGray-100'
          >
            {divider.mainTitle}
          </h1>
        </div>
      </>
    )}
  </>
)

export default Divider
