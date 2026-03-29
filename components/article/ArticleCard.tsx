'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import AnimatedUnderline from '@/components/ui/AnimatedUnderline'
import { useCanHover } from '@/lib/useCanHover'

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
  const canHover = useCanHover()

  return (
    <Link
      href={`/articles/${slug}`}
      className="block cursor-pointer"
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      onMouseEnter={canHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={canHover ? () => setIsHovered(false) : undefined}
    >
      {/* Card Container - Square aspect ratio, centered with padding */}
      <div
        className="relative overflow-hidden bg-cream"
        style={{
          aspectRatio: '1 / 1',
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
          <div className="absolute inset-0" style={{ background: 'var(--cream)' }} />
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
        <AnimatedUnderline active={isHovered}>
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
        </AnimatedUnderline>
      </div>
    </Link>
  )
}
