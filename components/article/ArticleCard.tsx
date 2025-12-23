'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface ArticleCardProps {
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
}

export default function ArticleCard({
  title,
  slug,
  publishDate,
  featuredImage,
  entity,
}: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/articles/${slug}`}
      className="block cursor-pointer"
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container - Square aspect ratio, centered with padding */}
      <div
        className="relative overflow-hidden bg-cream"
        style={{
          aspectRatio: '1 / 1',
          borderRadius: '9px',
          width: '100%',
        }}
      >
        {/* Featured Image / Illustration */}
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          // Placeholder background when no image
          <div className="absolute inset-0 bg-gradient-to-br from-cream to-header-beige" />
        )}
      </div>

      {/* Title - Below card, aligned to left edge of image */}
      <div
        style={{
          width: '100%',
          textAlign: 'left',
          marginTop: '5%',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              lineHeight: '1.3',
              color: 'var(--black)',
              margin: 0,
            }}
          >
            {title}
          </h3>
          <div
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              width: isHovered ? '100%' : 0,
              height: '2px',
              background: 'var(--black)',
              transition: 'width 0.3s ease',
              transform: 'translateZ(0)',
              willChange: 'width',
            }}
          />
        </div>
      </div>
    </Link>
  )
}
