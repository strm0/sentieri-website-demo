'use client'

import ArticleList from '../article/ArticleList'

interface Article {
  _id?: string
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
  author?: string
}

interface GridPageTemplateProps {
  title: string
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
        paddingBottom: '80px',
      }}
    >
      {/* Title */}
      <h1
        className="heading-xl"
        style={{
          fontSize: '8.5rem',
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

      {/* Center Divider */}
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '100%',
          background: 'var(--black)',
          left: mirrored ? '62%' : '38%',
          top: 0,
        }}
      />
    </div>
  )
}
