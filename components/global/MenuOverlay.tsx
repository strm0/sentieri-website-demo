'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface MenuOverlayProps {
  isOpen: boolean
  side: 'left' | 'right'
  onClose: () => void
}

interface MenuItem {
  label: string
  href: string
}

// Left menu (Azienda Agricola) - excluding the main heading
const leftMenuItems: MenuItem[] = [
  { label: 'Wine', href: '/wine' },
  { label: 'Olive oil', href: '/olive-oil' },
  { label: 'Shop', href: '/shop' },
]

// Right menu (Associazione Culturale) - excluding the main heading
const rightMenuItems: MenuItem[] = [
  { label: 'Residencies', href: '/residencies' },
  { label: 'Research Archive', href: '/research-archive' },
  { label: 'About us', href: '/about' },
]

export default function MenuOverlay({ isOpen, side, onClose }: MenuOverlayProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

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

  // Left menu layout (Azienda Agricola)
  if (side === 'left') {
    return (
      <>
        {/* Full-screen backdrop */}
        <div
          className="fixed inset-0 z-[40]"
          style={{
            top: 'var(--header-height)',
            height: 'calc(100vh - var(--header-height))',
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          onClick={onClose}
          aria-hidden={!isOpen}
        />

        {/* Menu overlay */}
        <div
          className="fixed h-screen z-[40] transition-all duration-300 ease-in-out"
          style={{
            width: isOpen ? '50vw' : '0',
            backgroundColor: 'var(--cream)',
            top: 'var(--header-height)',
            height: 'calc(100vh - var(--header-height))',
            left: '0',
            pointerEvents: isOpen ? 'auto' : 'none',
            overflow: 'hidden',
          }}
          aria-hidden={!isOpen}
        >
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '18px',
              paddingRight: 'calc(var(--sidebar-width) + 130px)',
              paddingTop: '110px',
              paddingBottom: '80px',
            }}
          >
            {/* Main Heading */}
            <Link
              href="/azienda-agricola"
              onMouseEnter={() => setHoveredItem('heading-left')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              style={{
                textDecoration: 'none',
              }}
            >
              <div style={{ marginBottom: '45px', minHeight: '13.3rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '6.65rem',
                    letterSpacing: '-2px',
                    lineHeight: '100%',
                    color: 'var(--black)',
                    margin: 0,
                  }}
                >
                  Azienda{' '}
                  <span
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    Agricola
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: hoveredItem === 'heading-left' ? '100%' : 0,
                        height: '2px',
                        background: 'var(--black)',
                        transition: 'width 0.3s ease',
                        transform: 'translateZ(0)',
                        willChange: 'width',
                      }}
                    />
                  </span>
                </h2>
              </div>
            </Link>

            {/* Menu Items with Divider Lines */}
            <nav>
              {leftMenuItems.map((item, index) => (
                <div key={item.href}>
                  {/* Top border line - full width */}
                  <div
                    style={{
                      width: '100vw',
                      height: '1px',
                      background: 'var(--black)',
                      marginBottom: '20px',
                      marginLeft: '-18px',
                    }}
                  />

                  {/* Menu Item */}
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      marginBottom: '20px',
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      onClose()
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '3.3rem',
                          letterSpacing: '-0.1rem',
                          lineHeight: '37pt',
                          color: 'var(--black)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.label}
                      </span>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: 0,
                          width: hoveredItem === item.href ? '100%' : 0,
                          height: '2px',
                          background: 'var(--black)',
                          transition: 'width 0.3s ease',
                          transform: 'translateZ(0)',
                          willChange: 'width',
                        }}
                      />
                    </div>
                  </Link>

                  {/* Bottom border line for last item - full width */}
                  {index === leftMenuItems.length - 1 && (
                    <div
                      style={{
                        width: '100vw',
                        height: '1px',
                        background: 'var(--black)',
                        marginLeft: '-18px',
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </>
    )
  }

  // Right menu layout (Associazione Culturale) - same structure as left
  return (
    <>
      {/* Full-screen backdrop */}
      <div
        className="fixed inset-0 z-[40]"
        style={{
          top: 'var(--header-height)',
          height: 'calc(100vh - var(--header-height))',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Menu overlay */}
      <div
        className="fixed h-screen z-[40] transition-all duration-300 ease-in-out"
        style={{
          width: isOpen ? '50vw' : '0',
          backgroundColor: 'var(--cream)',
          top: 'var(--header-height)',
          height: 'calc(100vh - var(--header-height))',
          right: '0',
          pointerEvents: isOpen ? 'auto' : 'none',
          overflow: 'hidden',
        }}
        aria-hidden={!isOpen}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 'calc(var(--sidebar-width) + 18px)',
            paddingRight: '130px',
            paddingTop: '110px',
            paddingBottom: '80px',
          }}
        >
          {/* Main Heading */}
          <Link
            href="/associazione-culturale"
            onMouseEnter={() => setHoveredItem('heading-right')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            style={{
              textDecoration: 'none',
            }}
          >
            <div style={{ marginBottom: '45px', minHeight: '13.3rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '6.65rem',
                  letterSpacing: '-2px',
                  lineHeight: '100%',
                  color: 'var(--black)',
                  margin: 0,
                }}
              >
                Associazione{' '}
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  Culturale
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: hoveredItem === 'heading-right' ? '100%' : 0,
                      height: '2px',
                      background: 'var(--black)',
                      transition: 'width 0.3s ease',
                      transform: 'translateZ(0)',
                      willChange: 'width',
                    }}
                  />
                </span>
              </h2>
            </div>
          </Link>

          {/* Menu Items with Divider Lines */}
          <nav>
            {rightMenuItems.map((item, index) => (
              <div key={item.href}>
                {/* Top border line - full width */}
                <div
                  style={{
                    width: '100vw',
                    height: '1px',
                    background: 'var(--black)',
                    marginBottom: '20px',
                    marginLeft: 'calc(-1 * (var(--sidebar-width) + 18px))',
                  }}
                />

                {/* Menu Item */}
                <Link
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    marginBottom: '20px',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '3.3rem',
                        letterSpacing: '-0.1rem',
                        lineHeight: '37pt',
                        color: 'var(--black)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: hoveredItem === item.href ? '100%' : 0,
                        height: '2px',
                        background: 'var(--black)',
                        transition: 'width 0.3s ease',
                        transform: 'translateZ(0)',
                        willChange: 'width',
                      }}
                    />
                  </div>
                </Link>

                {/* Bottom border line for last item - full width */}
                {index === rightMenuItems.length - 1 && (
                  <div
                    style={{
                      width: '100vw',
                      height: '1px',
                      background: 'var(--black)',
                      marginLeft: 'calc(-1 * (var(--sidebar-width) + 18px))',
                    }}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
