'use client'

import { useState, useMemo } from 'react'
import ArticleGrid from '@/components/article/ArticleGrid'
import FilterPills from '@/components/article/FilterPills'

// Sample articles (will be replaced with Sanity data later)
const allArticles = [
  {
    _id: '1',
    title: 'Wine is made in the field, not in the winery',
    slug: 'wine-made-in-field',
    publishDate: '2024-11-15',
    featuredImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    entity: 'stelle' as const,
  },
  {
    _id: '2',
    title: 'Residencies as tools for rural regeneration',
    slug: 'residencies-rural-regeneration',
    publishDate: '2024-11-20',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    entity: 'sogni' as const,
  },
  {
    _id: '3',
    title: 'The ancient olive trees of Loreto Aprutino',
    slug: 'ancient-olive-trees',
    publishDate: '2024-10-29',
    featuredImage: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=800&q=80',
    entity: 'stelle' as const,
  },
  {
    _id: '4',
    title: 'Art, ecology, and collective imagination',
    slug: 'art-ecology-imagination',
    publishDate: '2024-11-05',
    featuredImage: 'https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=800&q=80',
    entity: 'sogni' as const,
  },
  {
    _id: '5',
    title: 'Hand management: A philosophy of care',
    slug: 'hand-management-philosophy',
    publishDate: '2024-10-12',
    featuredImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    entity: 'stelle' as const,
  },
  {
    _id: '6',
    title: 'Cultural heritage in a changing landscape',
    slug: 'cultural-heritage-landscape',
    publishDate: '2024-10-18',
    featuredImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    entity: 'sogni' as const,
  },
  {
    _id: '7',
    title: 'Harvest season reflections',
    slug: 'harvest-season-reflections',
    publishDate: '2024-09-28',
    featuredImage: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80',
    entity: 'stelle' as const,
  },
  {
    _id: '8',
    title: 'Community workshops: Herbal self-production',
    slug: 'herbal-self-production-workshop',
    publishDate: '2024-09-30',
    featuredImage: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80',
    entity: 'sogni' as const,
  },
]

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'stelle' | 'sogni'>('all')

  // Filter articles based on active filter
  const filteredArticles = useMemo(() => {
    if (activeFilter === 'all') return allArticles
    return allArticles.filter((article) => article.entity === activeFilter)
  }, [activeFilter])

  return (
    <div
      className="flex w-full"
      style={{
        marginLeft: 'var(--sidebar-width)',
        marginRight: 'var(--sidebar-width)',
        height: 'calc(100vh - var(--header-height))',
      }}
    >
      {/* Left Pane - Title & Filters */}
      <div
        className="overflow-y-scroll no-scrollbar"
        style={{
          width: '50%',
          height: '100%',
          background: 'var(--cream)',
          paddingLeft: '18px',
          paddingRight: '130px',
          paddingTop: '110px',
          paddingBottom: '80px',
        }}
      >
        {/* Title */}
        <h1 className="heading-xl">Research Archive</h1>

        {/* Filter Pills */}
        <div className="mt-5">
          <FilterPills activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Intro Text */}
        <div
          className="mt-10"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '20px',
            lineHeight: '21px',
          }}
        >
          <p>
            Exploring the intersections of agriculture, art, ecology, and community through
            research and reflection.
          </p>
        </div>
      </div>

      {/* Center Divider */}
      <div
        style={{
          width: '1px',
          height: '100%',
          background: 'var(--black)',
        }}
      />

      {/* Right Pane - Scrollable Article Grid */}
      <div style={{ width: '50%', height: '100%' }}>
        <ArticleGrid articles={filteredArticles} scrollable={true} />
      </div>
    </div>
  )
}
