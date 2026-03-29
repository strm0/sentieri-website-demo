'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const [hoveredBlock, setHoveredBlock] = useState<'agricola' | 'culturale' | null>(null)
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

            {/* Scroll indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#000000',
                fontFamily: 'var(--font-body)',
                fontSize: '2.5rem',
                animation: 'bounce-gentle 2s ease-in-out infinite',
              }}
            >
              ↓
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
              flexDirection: 'column',
              background: '#FFFFFF',
            }}
          >
            {/* Top block — Azienda Agricola */}
            <div
              onClick={() => router.push('/azienda-agricola')}
              onMouseEnter={() => setHoveredBlock('agricola')}
              onMouseLeave={() => setHoveredBlock(null)}
              style={{
                width: '100%',
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 'calc(var(--sidebar-width) + 40px)',
                paddingRight: 'calc(var(--sidebar-width) + 40px)',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              <AnimatedUnderline active={hoveredBlock === 'agricola'}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(3rem, 5.5vw, 7.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {agricolaCard.title}
                </span>
              </AnimatedUnderline>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)',
                  lineHeight: 1.5,
                  textAlign: 'left',
                  margin: '12px 0 0',
                }}
              >
                {agricolaCard.description}
              </p>
            </div>

            {/* Bottom block — Associazione Culturale */}
            <div
              onClick={() => router.push('/associazione-culturale')}
              onMouseEnter={() => setHoveredBlock('culturale')}
              onMouseLeave={() => setHoveredBlock(null)}
              style={{
                width: '100%',
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingLeft: 'calc(var(--sidebar-width) + 40px)',
                paddingRight: 'calc(var(--sidebar-width) + 40px)',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              <AnimatedUnderline active={hoveredBlock === 'culturale'}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(3rem, 5.5vw, 7.5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: 0,
                    textAlign: 'right',
                  }}
                >
                  {culturaleCard.title}
                </span>
              </AnimatedUnderline>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)',
                  lineHeight: 1.5,
                  textAlign: 'right',
                  margin: '12px 0 0',
                }}
              >
                {culturaleCard.description}
              </p>
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

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#000000',
              fontFamily: 'var(--font-body)',
              fontSize: '2.5rem',
              animation: 'bounce-gentle 2s ease-in-out infinite',
            }}
          >
            ↓
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
