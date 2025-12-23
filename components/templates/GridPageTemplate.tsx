'use client'

import Link from 'next/link'
import { useState } from 'react'
import ArticleGrid from '../article/ArticleGrid'

interface ProductLink {
  title: string
  href: string
  snippet: string
}

interface Article {
  _id?: string
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
}

interface GridPageTemplateProps {
  title: string
  tagline?: string
  description: React.ReactNode | string
  featuredArticles: Article[]
  productLinks?: ProductLink[]
  scrollable?: boolean
  mirrored?: boolean
}

export default function GridPageTemplate({
  title,
  tagline,
  description,
  featuredArticles,
  productLinks,
  scrollable = false,
  mirrored = false,
}: GridPageTemplateProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const textPane = (
    <div
      className="no-scrollbar overflow-y-scroll"
      style={{
        width: '50%',
        height: '100%',
        overflowX: 'hidden',
        background: 'var(--cream)',
        paddingLeft: '18px',
        paddingRight: '130px',
        paddingTop: '300px',
        paddingBottom: '80px',
      }}
    >
      {/* Title */}
      <h1 className="heading-xl">{title}</h1>

      {/* Tagline */}
      {tagline && (
        <p
          className="italic"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            letterSpacing: 0,
            lineHeight: '26px',
            marginBottom: '45px',
          }}
        >
          {tagline}
        </p>
      )}

      {/* Description */}
      <div
        className="body-text"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          letterSpacing: 0,
          lineHeight: '26px',
        }}
      >
        {description}
      </div>

      {/* Product Links Section - Below fold */}
      {productLinks && productLinks.length > 0 && (
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
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                    }}
                  >
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
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        width: hoveredProduct === product.href ? '100%' : 0,
                        height: '2px',
                        background: 'var(--black)',
                        transition: 'width 0.3s ease',
                        transform: 'translateZ(0)',
                        willChange: 'width',
                      }}
                    />
                  </div>
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
      )}
    </div>
  )

  const articlePane = (
    <div style={{ width: '50%', height: '100%' }}>
      <ArticleGrid articles={featuredArticles} scrollable={scrollable} />
    </div>
  )

  return (
    <div
      className="flex w-full"
      style={{
        height: 'calc(100vh - var(--header-height))',
        position: 'relative',
      }}
    >
      {/* Render panes in order based on mirrored prop */}
      {mirrored ? (
        <>
          {articlePane}
          {textPane}
        </>
      ) : (
        <>
          {textPane}
          {articlePane}
        </>
      )}

      {/* Center Divider */}
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '100%',
          background: 'var(--black)',
          left: '50%',
          top: 0,
        }}
      />
    </div>
  )
}
