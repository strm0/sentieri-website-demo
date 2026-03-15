'use client'

import { useState } from 'react'

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

  const isControlled = active !== undefined
  const showUnderline = isControlled ? active : isHovered

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={isControlled ? undefined : () => setIsHovered(true)}
      onMouseLeave={isControlled ? undefined : () => setIsHovered(false)}
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
