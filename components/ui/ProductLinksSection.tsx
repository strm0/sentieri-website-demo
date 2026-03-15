'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedUnderline from './AnimatedUnderline'

export interface ProductLink {
  title: string
  href: string
  snippet: string
}

interface ProductLinksSectionProps {
  productLinks: ProductLink[]
}

export default function ProductLinksSection({ productLinks }: ProductLinksSectionProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <>
      {/* Top horizontal divider */}
      <div
        style={{
          width: 'calc(100% + 18px + 130px)',
          height: '1px',
          background: 'var(--black)',
          marginTop: '60px',
          marginBottom: '40px',
          marginLeft: '-18px',
        }}
      />

      {/* Product links grid with vertical divider */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% + 18px + 130px)',
          marginLeft: '-18px',
        }}
      >
        <div
          className="grid grid-cols-2"
          style={{
            gap: '0',
            alignItems: 'start',
          }}
        >
          {productLinks.map((product, index) => (
            <Link
              key={product.href}
              href={product.href}
              className="cursor-pointer block"
              style={{
                paddingLeft: index === 0 ? '18px' : '20px',
                paddingRight: '20px',
                paddingTop: '20px',
                paddingBottom: 0,
              }}
              onMouseEnter={() => setHoveredProduct(product.href)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <AnimatedUnderline active={hoveredProduct === product.href}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.3rem',
                    lineHeight: '1.1',
                    letterSpacing: '-0.05rem',
                    color: 'var(--black)',
                    margin: 0,
                  }}
                >
                  {product.title}
                </h2>
              </AnimatedUnderline>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  letterSpacing: 0,
                  lineHeight: '26px',
                  color: 'var(--black)',
                  marginTop: '8px',
                  marginBottom: 0,
                }}
              >
                {product.snippet}
              </p>
            </Link>
          ))}
        </div>

        {/* Vertical divider line between columns */}
        <div
          style={{
            position: 'absolute',
            width: '1px',
            height: 'calc(100% + 120px)',
            background: 'var(--black)',
            left: '50%',
            top: '-40px',
            marginLeft: '-0.5px',
          }}
        />
      </div>
    </>
  )
}
