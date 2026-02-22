import { useState } from 'react'
import clsx from 'clsx'

function Image ({
  alt,
  src
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={clsx('relative transition-all duration-300 motion-safe:will-change-transform', {
        'grayscale blur-md': !isLoaded,
        'grayscale-0 blur-none': isLoaded
      })}
    >
      <img
        className='block max-w-full w-full h-full'
        alt={alt}
        src={src}
        onLoad={() => setIsLoaded(true)}
        loading='lazy'
      />
    </div>
  )
}

export default Image
