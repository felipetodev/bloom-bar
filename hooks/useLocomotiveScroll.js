import { useEffect } from 'react'

const useLocomotiveScroll = () => {
  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const dataScrollContainer = document.querySelector(
          '[data-scroll-container]'
        )

        if (!dataScrollContainer) {
          console.warn(
            'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.'
          )
          return null
        }

        window.locomotive = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          smooth: true,
          class: 'is-inview'
        })
      } catch (error) {}
    })()

    return () => {
      window.locomotive?.destroy()
    }
  }, [])
}

export default useLocomotiveScroll
