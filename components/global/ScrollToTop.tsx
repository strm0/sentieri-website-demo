'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset scroll on the main element (mobile uses this for scrolling)
    const main = document.querySelector('main')
    if (main) {
      main.scrollTo(0, 0)
    }
    // Also reset window scroll
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
