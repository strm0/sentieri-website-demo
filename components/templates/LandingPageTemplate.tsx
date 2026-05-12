'use client'

import { useRouter } from 'next/navigation'
import { useState, useCallback, useRef } from 'react'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'

interface EntityCard {
  title: string
  description: string
  href: string
}

interface LandingPageTemplateProps {
  agricolaCard: EntityCard
  culturaleCard: EntityCard
}

function HeroSection({ height, objectPosition = 'center 30%' }: { height: string; objectPosition?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [soundOn, setSoundOn] = useState(false)

  const toggleSound = useCallback(() => {
    const video = videoRef.current
    const audio = audioRef.current
    if (!audio || !video) return
    if (soundOn) {
      audio.pause()
      setSoundOn(false)
    } else {
      audio.volume = 0.2
      audio.currentTime = video.currentTime % (audio.duration || video.currentTime + 1)
      audio.play().catch(() => {})
      setSoundOn(true)
    }
  }, [soundOn])

  return (
    <section
      style={{
        width: '100%',
        height,
        minHeight: height,
        scrollSnapAlign: 'start',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src="/video/landing_page.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
        }}
      />
      <audio ref={audioRef} src="/audio/landing_page.mp3" loop preload="auto" />

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        aria-label={soundOn ? 'Turn sound off' : 'Turn sound on'}
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          zIndex: 2,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {soundOn ? (
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <polygon points="0,6 5,6 10,1 10,19 5,14 0,14" fill="#000000" />
            <path d="M14 5 Q17 10 14 15" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M17 2 Q22 10 17 18" stroke="#000000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <polygon points="0,6 5,6 10,1 10,19 5,14 0,14" fill="#000000" />
            <line x1="13" y1="5" x2="21" y2="15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21" y1="5" x2="13" y2="15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

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
  )
}

export default function LandingPageTemplate({
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
          <HeroSection height={contentHeight} />

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
        <HeroSection height={mobileContentHeight} objectPosition="20% 30%" />

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
