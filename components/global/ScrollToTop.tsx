'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset window scroll
    window.scrollTo(0, 0)

    // Reset scroll on <main> and any scrollable children (mobile template divs)
    const main = document.querySelector('main')
    if (main) {
      main.scrollTo(0, 0)
      main.querySelectorAll('*').forEach((el) => {
        if (el instanceof HTMLElement && el.scrollTop > 0) {
          el.scrollTo(0, 0)
        }
      })
    }

    // Run again after a frame to catch content that mounts after this effect
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      if (main) {
        main.scrollTo(0, 0)
      }
    })
  }, [pathname])

  return null
}
