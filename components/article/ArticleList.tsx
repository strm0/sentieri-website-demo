'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'
import { useCanHover } from '@/lib/useCanHover'
import { Article } from '@/lib/types'

interface ArticleListProps {
  articles: Article[]
}

function ArticleRow({ article }: { article: Article }) {
  const [isHovered, setIsHovered] = useState(false)
  const canHover = useCanHover()
  const year = new Date(article.publishDate).getFullYear()

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block"
      style={{ textDecoration: 'none' }}
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 'calc((100vh - var(--header-height)) / 2.5)',
        }}
      >
        {/* Left half: title + author/year */}
        <div
          style={{
            width: '38%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          <h3 style={{ margin: 0 }}>
            <AnimatedUnderline active={isHovered}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.7rem',
                  lineHeight: '28px',
                  color: '#000000',
                }}
              >
                {article.title}
              </span>
            </AnimatedUnderline>
          </h3>

          <div>
            {article.author && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {article.author}
              </p>
            )}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#000000',
                margin: 0,
              }}
            >
              {year}
            </p>
          </div>
        </div>

        {/* Right half: landscape image */}
        <div
          style={{
            width: '62%',
            padding: '30px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {article.featuredImage ? (
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                className="object-cover"
                style={{ objectPosition: article.imagePosition || 'center center' }}
                sizes="(max-width: 768px) 100vw, 31vw"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0" style={{ background: '#FFFFFF' }} />
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div
      className="no-scrollbar overflow-y-auto"
      style={{
        height: '100%',
        background: '#FFFFFF',
      }}
    >
      {articles.map((article, index) => (
        <div key={article._id || article.slug || index}>
          <ArticleRow article={article} />

          {/* Bottom divider */}
          <div className="hidden lg:block" style={{ width: '100%', height: '1px', background: '#000000' }} />
        </div>
      ))}
    </div>
  )
}
