'use client'

import Link from 'next/link'
import Image from 'next/image'
import ArticleList from '../article/ArticleList'
import AnimatedUnderline from '../ui/AnimatedUnderline'
import { Article } from '@/lib/types'

interface GridPageTemplateProps {
  title: React.ReactNode
  description: React.ReactNode | string
  featuredArticles: Article[]
  mirrored?: boolean
}

export default function GridPageTemplate({
  title,
  description,
  featuredArticles,
  mirrored = false,
}: GridPageTemplateProps) {
  const textPane = (
    <div
      className="text-pane no-scrollbar"
      style={{
        width: '38%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: 'var(--cream)',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '40px',
        paddingBottom: '20px',
      }}
    >
      {/* Title */}
      <h1
        className="heading-xl"
        style={{
          fontSize: 'clamp(3rem, 5.5vw, 7.5rem)',
          textAlign: mirrored ? 'left' : 'right',
          marginBottom: '160px',
          paddingRight: mirrored ? undefined : '20px',
          paddingLeft: mirrored ? '12px' : undefined,
        }}
      >
        {title}
      </h1>

      {/* Description */}
      <div
        className="body-text"
        style={{
          fontFamily: 'var(--font-body)',
          letterSpacing: 0,
          paddingLeft: '12px',
          paddingRight: '20px',
        }}
      >
        {description}
      </div>

    </div>
  )

  const articlePane = (
    <div style={{ width: '62%', height: '100%' }}>
      <ArticleList articles={featuredArticles} />
    </div>
  )

  return (
    <>
      {/* Desktop layout (>= 1024px) — unchanged */}
      <div
        className="hidden lg:flex w-full"
        style={{
          height: 'calc(100vh - var(--header-height))',
          position: 'relative',
        }}
      >
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
      </div>

      {/* Mobile layout (< 1024px) — single column */}
      <div
        className="lg:hidden"
        style={{
          width: '100%',
          overflowY: 'auto',
          background: '#FFFFFF',
          paddingBottom: '40px',
        }}
      >
        {/* Title */}
        <div style={{ padding: '24px 16px 0' }}>
          <h1
            className="heading-xl"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              textAlign: 'left',
              marginBottom: '60px',
            }}
          >
            {title}
          </h1>
        </div>

        {/* Description */}
        <div
          className="body-text"
          style={{
            fontFamily: 'var(--font-body)',
            letterSpacing: 0,
            padding: '0 16px',
            marginBottom: '40px',
          }}
        >
          {description}
        </div>

        {/* Article cards */}
        {featuredArticles.length > 0 && (
          <div>
            {featuredArticles.map((article, index) => (
              <div key={article.slug}>
                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: '#000000' }} />

                <Link
                  href={`/articles/${article.slug}`}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  {/* Image */}
                  <div style={{ width: '100%', position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                    {article.featuredImage ? (
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                          objectPosition: article.imagePosition || 'center center',
                        }}
                        unoptimized
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', minHeight: '200px', background: '#FFFFFF' }} />
                    )}
                  </div>

                  {/* Title */}
                  <div style={{ padding: '16px' }}>
                    <h3 style={{ fontSize: '1.3rem', lineHeight: '1.3', margin: 0 }}>
                      <AnimatedUnderline>
                        {article.title}
                      </AnimatedUnderline>
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
