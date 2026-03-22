'use client'

import ArticleList from '../article/ArticleList'
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

    </div>
  )
}
