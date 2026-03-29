'use client'

import { useState, useEffect } from 'react'

/**
 * Returns true only on devices that support hover (mouse/trackpad).
 * Prevents sticky hover states on touch devices.
 * Defaults to false during SSR; updated on mount.
 */
export function useCanHover() {
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches)
  }, [])
  return canHover
}
