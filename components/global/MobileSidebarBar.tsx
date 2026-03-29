'use client'

import { useState } from 'react'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'
import { useCanHover } from '@/lib/useCanHover'

interface MobileSidebarBarProps {
  openSide: 'left' | 'right' | null
  onToggle: (side: 'left' | 'right') => void
}

export default function MobileSidebarBar({ openSide, onToggle }: MobileSidebarBarProps) {
  const [leftHovered, setLeftHovered] = useState(false)
  const [rightHovered, setRightHovered] = useState(false)
  const canHover = useCanHover()

  return (
    <div
      className="flex lg:hidden"
      style={{
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        right: 0,
        height: 'var(--sidebar-bar-height)',
        background: '#FFFFFF',
        borderBottom: '1px solid var(--black)',
        zIndex: 50,
      }}
    >
      {/* Left half — di Stelle */}
      <button
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
        }}
        onClick={() => onToggle('left')}
        onMouseEnter={canHover ? () => setLeftHovered(true) : undefined}
        onMouseLeave={canHover ? () => setLeftHovered(false) : undefined}
        aria-label="Open Di Stelle menu"
        aria-expanded={openSide === 'left'}
      >
        <AnimatedUnderline active={leftHovered} lineHeight={1}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              letterSpacing: '-0.07em',
              color: 'var(--black)',
              whiteSpace: 'nowrap',
            }}
          >
            di Stelle
          </span>
        </AnimatedUnderline>
      </button>

      {/* Vertical divider */}
      <div style={{ width: '1px', background: 'var(--black)' }} />

      {/* Right half — di Sogni */}
      <button
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
        }}
        onClick={() => onToggle('right')}
        onMouseEnter={canHover ? () => setRightHovered(true) : undefined}
        onMouseLeave={canHover ? () => setRightHovered(false) : undefined}
        aria-label="Open Di Sogni menu"
        aria-expanded={openSide === 'right'}
      >
        <AnimatedUnderline active={rightHovered} lineHeight={1}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              letterSpacing: '-0.07em',
              color: 'var(--black)',
              whiteSpace: 'nowrap',
            }}
          >
            di Sogni
          </span>
        </AnimatedUnderline>
      </button>
    </div>
  )
}
