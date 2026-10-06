import { useEffect, useRef, useState } from 'react'

/**
 * Becomes `true` the first time the element enters the viewport, then stops observing.
 * Without IntersectionObserver (old browsers, jsdom) the content is visible straight away.
 */
export const useRevealOnScroll = <T extends Element>() => {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      // Start slightly before the section is fully on screen
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return { ref, isVisible }
}
