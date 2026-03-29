'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'
import { useCanHover } from '@/lib/useCanHover'

interface MenuOverlayProps {
  isOpen: boolean
  side: 'left' | 'right'
  onClose: () => void
}

interface MenuItem {
  label: string
  href: string
}

// Left menu (Azienda Agricola)
const leftMenuItems: MenuItem[] = [
  { label: 'Wine', href: '/wine' },
  { label: 'Olive Oil', href: '/olive-oil' },
  { label: 'Shop', href: '/shop' },
]

// Right menu (Associazione Culturale)
const rightMenuItems: MenuItem[] = [
  { label: 'Residencies', href: '/residencies' },
  { label: 'Archive', href: '/archive' },
  { label: 'About us', href: '/about' },
]

export default function MenuOverlay({ isOpen, side, onClose }: MenuOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const canHover = useCanHover()

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const isLeft = side === 'left'
  const menuItems = isLeft ? leftMenuItems : rightMenuItems
  const headingText = isLeft ? ['Azienda', 'Agricola'] : ['Associazione', 'Culturale']
  const headingHref = isLeft ? '/azienda-agricola' : '/associazione-culturale'
  const headingKey = isLeft ? 'heading-left' : 'heading-right'

  return (
    <>
      {/* Transparent backdrop — only covers the area outside the overlay so clicks close the menu */}
      <div
        className="fixed inset-0 z-[40]"
        style={{
          top: 'var(--header-total-height)',
          height: 'calc(100dvh - var(--header-total-height))',
          pointerEvents: isOpen ? 'auto' : 'none',
          background: 'transparent',
        }}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Menu overlay */}
      <div
        className="fixed z-[40] transition-all duration-300 ease-in-out"
        style={{
          width: isOpen ? 'var(--overlay-width)' : '0',
          backgroundColor: '#FFFFFF',
          top: 'var(--header-total-height)',
          height: 'calc(100dvh - var(--header-total-height))',
          left: isLeft ? '0' : undefined,
          right: isLeft ? undefined : '0',
          pointerEvents: isOpen ? 'auto' : 'none',
          overflow: 'hidden',
        }}
        aria-hidden={!isOpen}
      >
        <div
          style={{
            height: '100%',
            position: 'relative',
            paddingLeft: isLeft ? '18px' : 'calc(var(--sidebar-width) + 18px)',
            paddingRight: isLeft ? 'calc(var(--sidebar-width) + 18px)' : '18px',
            paddingTop: '40px',
            paddingBottom: '40px',
          }}
        >
          {/* Main Heading — top area */}
          <Link
            href={headingHref}
            onMouseEnter={canHover ? () => setHoveredItem(headingKey) : undefined}
            onMouseLeave={canHover ? () => setHoveredItem(null) : undefined}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            style={{
              textDecoration: 'none',
              display: 'block',
              textAlign: isLeft ? 'left' : 'right',
            }}
          >
            <h2
              className="heading-xl"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 8.5rem)',
                color: '#000000',
                margin: 0,
              }}
            >
              <AnimatedUnderline active={hoveredItem === headingKey}>
                <span>
                  {headingText[0]}
                  <br />
                  {headingText[1]}
                </span>
              </AnimatedUnderline>
            </h2>
          </Link>

          {/* Nav links — desktop: absolutely positioned, mobile: vertical stack */}
          <nav>
            {/* Desktop layout (>= 1024px) — absolute positioning */}
            <div>
              {isLeft ? (
                <>
                  {/* Wine — mid-left */}
                  <div style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }}>
                    <MenuLink
                      item={leftMenuItems[0]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                  {/* Olive Oil — bottom-left */}
                  <div style={{ position: 'absolute', left: '18px', bottom: '40px' }}>
                    <MenuLink
                      item={leftMenuItems[1]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                  {/* Shop — bottom-right */}
                  <div style={{ position: 'absolute', right: 'calc(var(--sidebar-width) + 18px)', bottom: '40px' }}>
                    <MenuLink
                      item={leftMenuItems[2]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Residencies — mid-right */}
                  <div style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)' }}>
                    <MenuLink
                      item={rightMenuItems[0]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                  {/* Archive — bottom-left */}
                  <div style={{ position: 'absolute', left: 'calc(var(--sidebar-width) + 18px)', bottom: '40px' }}>
                    <MenuLink
                      item={rightMenuItems[1]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                  {/* About us — bottom-right */}
                  <div style={{ position: 'absolute', right: '18px', bottom: '40px' }}>
                    <MenuLink
                      item={rightMenuItems[2]}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      onClose={onClose}
                      canHover={canHover}
                    />
                  </div>
                </>
              )}
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}

function MenuLink({
  item,
  hoveredItem,
  setHoveredItem,
  onClose,
  canHover,
}: {
  item: MenuItem
  hoveredItem: string | null
  setHoveredItem: (item: string | null) => void
  onClose: () => void
  canHover: boolean
}) {
  return (
    <Link
      href={item.href}
      onMouseEnter={canHover ? () => setHoveredItem(item.href) : undefined}
      onMouseLeave={canHover ? () => setHoveredItem(null) : undefined}
      style={{
        display: 'block',
        textDecoration: 'none',
      }}
      onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}
    >
      <AnimatedUnderline active={hoveredItem === item.href}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.7rem',
            lineHeight: '28px',
            color: '#000000',
            whiteSpace: 'nowrap',
          }}
        >
          {item.label}
        </span>
      </AnimatedUnderline>
    </Link>
  )
}
