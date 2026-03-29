'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'

interface EntityCard {
  title: string
  description: string
  href: string
}

interface LandingPageTemplateProps {
  heroImage?: string
  agricolaCard: EntityCard
  culturaleCard: EntityCard
}

export default function LandingPageTemplate({
  heroImage = '/images/articles/our-way-here/our-way-here-5.jpg',
  agricolaCard,
  culturaleCard,
}: LandingPageTemplateProps) {
  const [hoveredCard, setHoveredCard] = useState<'agricola' | 'culturale' | null>(null)

  const contentHeight = 'calc(100vh - var(--header-height))'
  const mobileContentHeight = 'calc(100svh - var(--header-total-height))'

  const openSidebar = useCallback((side: 'left' | 'right') => {
    window.dispatchEvent(new CustomEvent('sentieri-open-sidebar', { detail: side }))
  }, [])

  return (
    <>
      {/* Desktop layout (>= 1024px) — unchanged */}
      <div
        className="hidden lg:block"
        style={{
          width: '100%',
          height: contentHeight,
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
        }}
      >
        <div className="no-scrollbar" style={{ width: '100%', height: '100%', overflowY: 'auto', scrollSnapType: 'y mandatory' }}>
          {/* SECTION 1 — Hero */}
          <section
            style={{
              width: '100%',
              height: contentHeight,
              minHeight: contentHeight,
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={heroImage}
              alt="Sentieri landscape"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'grayscale(100%)',
              }}
              priority
              unoptimized
            />

            {/* Tagline */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '0',
                width: '38%',
                paddingLeft: '18px',
                paddingRight: '18px',
              }}
            >
              <h1
                className="heading-xl"
                style={{
                  fontSize: 'clamp(3rem, 5.5vw, 7.5rem)',
                  textAlign: 'left',
                  paddingLeft: '12px',
                  color: '#FFFFFF',
                  marginBottom: 0,
                }}
              >
                An agroecological project where agriculture, art, and community meet.
              </h1>
            </div>

            {/* Scroll indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                opacity: 0.7,
              }}
            >
              {[0, 1, 2].map((i) => (
                <svg
                  key={i}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  style={{ opacity: 1 - i * 0.25 }}
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>
          </section>

          {/* SECTION 2 — Entity selection */}
          <section
            style={{
              width: '100%',
              height: contentHeight,
              minHeight: contentHeight,
              scrollSnapAlign: 'start',
              display: 'flex',
              background: '#FFFFFF',
            }}
          >
            {/* Azienda Agricola card */}
            <div
              onMouseEnter={() => setHoveredCard('agricola')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: hoveredCard === 'agricola' ? '55%' : hoveredCard === 'culturale' ? '45%' : '50%',
                height: '100%',
                color: '#000000',
                background: '#FFFFFF',
                transition: 'width 0.4s ease',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.5s ease, top 0.5s ease, left 0.5s ease',
                  top: hoveredCard === 'agricola' ? '40px' : '50%',
                  left: hoveredCard === 'agricola' ? '30px' : '50%',
                  transform: hoveredCard === 'agricola'
                    ? 'translate(0, 0) rotate(0deg)'
                    : 'translate(-50%, -50%) rotate(-90deg)',
                  transformOrigin: 'center center',
                  zIndex: 1,
                }}
              >
                <Link href={agricolaCard.href} style={{ textDecoration: 'none', color: '#000000' }}>
                  <AnimatedUnderline>
                    <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', letterSpacing: '-0.02em', lineHeight: '1.2', margin: 0 }}>
                      {agricolaCard.title}
                    </h2>
                  </AnimatedUnderline>
                </Link>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '90px',
                  left: '30px',
                  right: '30px',
                  opacity: hoveredCard === 'agricola' ? 1 : 0,
                  transition: `opacity 0.5s ease ${hoveredCard === 'agricola' ? '0.45s' : '0s'}`,
                  pointerEvents: hoveredCard === 'agricola' ? 'auto' : 'none',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)', lineHeight: '1.4', margin: 0 }}>
                  {agricolaCard.description}
                </p>
              </div>

              <CardNavLink href="/wine" label="Wine" visible={hoveredCard === 'agricola'} style={{ left: '30px', top: '50%', transform: 'translateY(-50%)' }} />
              <CardNavLink href="/olive-oil" label="Olive Oil" visible={hoveredCard === 'agricola'} style={{ left: '30px', bottom: '40px' }} />
              <CardNavLink href="/shop" label="Shop" visible={hoveredCard === 'agricola'} style={{ right: '30px', bottom: '40px' }} />
            </div>

            {/* Associazione Culturale card */}
            <div
              onMouseEnter={() => setHoveredCard('culturale')}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: hoveredCard === 'culturale' ? '55%' : hoveredCard === 'agricola' ? '45%' : '50%',
                height: '100%',
                color: '#000000',
                background: '#FFFFFF',
                transition: 'width 0.4s ease',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.5s ease, top 0.5s ease, left 0.5s ease',
                  top: hoveredCard === 'culturale' ? '40px' : '50%',
                  left: hoveredCard === 'culturale' ? '30px' : '50%',
                  transform: hoveredCard === 'culturale'
                    ? 'translate(0, 0) rotate(0deg)'
                    : 'translate(-50%, -50%) rotate(90deg)',
                  transformOrigin: 'center center',
                  zIndex: 1,
                }}
              >
                <Link href={culturaleCard.href} style={{ textDecoration: 'none', color: '#000000' }}>
                  <AnimatedUnderline>
                    <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', letterSpacing: '-0.02em', lineHeight: '1.2', margin: 0 }}>
                      {culturaleCard.title}
                    </h2>
                  </AnimatedUnderline>
                </Link>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '90px',
                  left: '30px',
                  right: '30px',
                  opacity: hoveredCard === 'culturale' ? 1 : 0,
                  transition: `opacity 0.5s ease ${hoveredCard === 'culturale' ? '0.45s' : '0s'}`,
                  pointerEvents: hoveredCard === 'culturale' ? 'auto' : 'none',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)', lineHeight: '1.4', margin: 0 }}>
                  {culturaleCard.description}
                </p>
              </div>

              <CardNavLink href="/residencies" label="Residencies" visible={hoveredCard === 'culturale'} style={{ right: '30px', top: '50%', transform: 'translateY(-50%)' }} />
              <CardNavLink href="/archive" label="Archive" visible={hoveredCard === 'culturale'} style={{ left: '30px', bottom: '40px' }} />
              <CardNavLink href="/about" label="About us" visible={hoveredCard === 'culturale'} style={{ right: '30px', bottom: '40px' }} />
            </div>
          </section>
        </div>
      </div>

      {/* Mobile layout (< 1024px) */}
      <div
        className="lg:hidden no-scrollbar"
        style={{
          width: '100%',
          height: mobileContentHeight,
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          background: '#FFFFFF',
        }}
      >
        {/* SECTION 1 — Hero */}
        <section
          style={{
            width: '100%',
            height: mobileContentHeight,
            minHeight: mobileContentHeight,
            scrollSnapAlign: 'start',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={heroImage}
            alt="Sentieri landscape"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
              filter: 'grayscale(100%)',
            }}
            priority
            unoptimized
          />

          {/* Tagline */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              width: '80%',
              padding: '0 16px',
            }}
          >
            <h1
              className="heading-xl"
              style={{
                fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
                textAlign: 'left',
                color: '#FFFFFF',
                marginBottom: 0,
              }}
            >
              An agroecological project where agriculture, art, and community meet.
            </h1>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              opacity: 0.7,
            }}
          >
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                style={{ opacity: 1 - i * 0.25 }}
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </section>

        {/* SECTION 2 — Entity cards (side by side) */}
        <section
          style={{
            width: '100%',
            height: mobileContentHeight,
            minHeight: mobileContentHeight,
            scrollSnapAlign: 'start',
            flexDirection: 'column',
            background: '#FFFFFF',
          }}
        >
          {/* Top block — Azienda Agricola */}
          <div
            onClick={() => openSidebar('left')}
            style={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '24px',
              paddingRight: '24px',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(2.5rem, 8vw, 8.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {agricolaCard.title}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                lineHeight: 1.5,
                marginTop: '12px',
                textAlign: 'left',
                margin: '12px 0 0',
              }}
            >
              {agricolaCard.description}
            </p>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.5rem', marginTop: '12px' }}>←</span>
          </div>

          {/* Bottom block — Associazione Culturale */}
          <div
            onClick={() => openSidebar('right')}
            style={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingLeft: '24px',
              paddingRight: '24px',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(2.5rem, 8vw, 8.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
                textAlign: 'right',
              }}
            >
              {culturaleCard.title}
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                lineHeight: 1.5,
                textAlign: 'right',
                margin: '12px 0 0',
              }}
            >
              {culturaleCard.description}
            </p>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.5rem', marginTop: '12px' }}>→</span>
          </div>
        </section>
      </div>
    </>
  )
}

function CardNavLink({
  href,
  label,
  visible,
  style,
}: {
  href: string
  label: string
  visible: boolean
  style: React.CSSProperties
}) {
  return (
    <Link
      href={href}
      style={{
        position: 'absolute',
        textDecoration: 'none',
        color: '#000000',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.5s ease ${visible ? '0.45s' : '0s'}`,
        pointerEvents: visible ? 'auto' : 'none',
        ...style,
      }}
    >
      <AnimatedUnderline>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.7rem',
            lineHeight: '28px',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </AnimatedUnderline>
    </Link>
  )
}
