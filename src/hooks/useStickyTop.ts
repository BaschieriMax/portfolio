import { useEffect, useRef, useState } from 'react'

/**
 * `top` value for a sticky element that can be taller than the viewport: 0 when it fits,
 * otherwise negative, so the element scrolls with the page until its bottom edge is visible
 * and then stays put. No inner scrollbar is needed.
 * Without ResizeObserver (old browsers, jsdom) it stays at 0.
 */
export const useStickyTop = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const [top, setTop] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof ResizeObserver === 'undefined') return

    const update = () => setTop(Math.min(0, window.innerHeight - element.offsetHeight))
    const observer = new ResizeObserver(update)
    observer.observe(element)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return { ref, top }
}
