'use client'

import { useState } from 'react'
import { useCanHover } from '@/lib/useCanHover'

interface AnimatedUnderlineProps {
  children: React.ReactNode
  /** When provided, controls the underline externally (ignores internal hover). */
  active?: boolean
  /** Height of the underline in pixels. Defaults to 2. */
  lineHeight?: number
}

export default function AnimatedUnderline({
  children,
  active,
  lineHeight = 2,
}: AnimatedUnderlineProps) {
  const [isHovered, setIsHovered] = useState(false)
  const canHover = useCanHover()

  const isControlled = active !== undefined
  const showUnderline = isControlled ? active : (canHover && isHovered)

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={isControlled || !canHover ? undefined : () => setIsHovered(true)}
      onMouseLeave={isControlled || !canHover ? undefined : () => setIsHovered(false)}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: showUnderline ? '100%' : 0,
          height: `${lineHeight}px`,
          background: 'var(--black)',
          transition: 'width 0.3s ease',
          transform: 'translateZ(0)',
          willChange: 'width',
        }}
      />
    </div>
  )
}
