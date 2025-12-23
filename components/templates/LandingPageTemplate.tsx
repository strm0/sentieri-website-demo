'use client';

import Link from 'next/link';
import { useState } from 'react';

interface EntityCard {
  title: string;
  description: string;
  href: string;
}

interface LandingPageTemplateProps {
  heroImage?: string;
  agricolaCard: EntityCard;
  culturaleCard: EntityCard;
}

export default function LandingPageTemplate({
  heroImage = '/images/hero-landscape.jpg',
  agricolaCard,
  culturaleCard,
}: LandingPageTemplateProps) {
  const [hoveredCard, setHoveredCard] = useState<'agricola' | 'culturale' | null>(null);

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - var(--header-height))',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--cream)',
      }}
    >
      {/* Hero Illustration Section */}
      <div
        style={{
          width: '100%',
          height: '75vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src={heroImage}
          alt="Sentieri landscape"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      {/* Entity Cards Section */}
      <div
        style={{
          width: '100%',
          height: 'calc(25vh)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid var(--black)',
          flex: '0 0 auto',
          position: 'relative',
        }}
      >
        {/* Left Card - Azienda Agricola */}
        <Link
          href={agricolaCard.href}
          onMouseEnter={() => setHoveredCard('agricola')}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            padding: '40px 18px 40px 18px',
            cursor: 'pointer',
            textDecoration: 'none',
            background: 'var(--cream)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ marginBottom: '45px' }}>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '3.3rem',
                  letterSpacing: '-0.05rem',
                  lineHeight: '37pt',
                  color: 'var(--black)',
                  margin: 0,
                }}
              >
                {agricolaCard.title}
              </h2>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: hoveredCard === 'agricola' ? '100%' : 0,
                  height: '2px',
                  background: 'var(--black)',
                  transition: 'width 0.3s ease',
                  transform: 'translateZ(0)',
                  willChange: 'width',
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              letterSpacing: 0,
              lineHeight: '26px',
              color: 'var(--black)',
            }}
          >
            {agricolaCard.description}
          </p>
        </Link>

        {/* Right Card - Associazione Culturale */}
        <Link
          href={culturaleCard.href}
          onMouseEnter={() => setHoveredCard('culturale')}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            padding: '40px 40px 40px 18px',
            cursor: 'pointer',
            textDecoration: 'none',
            background: 'var(--cream)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ marginBottom: '45px' }}>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '3.3rem',
                  letterSpacing: '-0.05rem',
                  lineHeight: '37pt',
                  color: 'var(--black)',
                  margin: 0,
                }}
              >
                {culturaleCard.title}
              </h2>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: hoveredCard === 'culturale' ? '100%' : 0,
                  height: '2px',
                  background: 'var(--black)',
                  transition: 'width 0.3s ease',
                  transform: 'translateZ(0)',
                  willChange: 'width',
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              letterSpacing: 0,
              lineHeight: '26px',
              color: 'var(--black)',
            }}
          >
            {culturaleCard.description}
          </p>
        </Link>

        {/* Center Divider - Absolutely Positioned */}
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: '100%',
            background: 'var(--black)',
            left: '50%',
            top: 0,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
