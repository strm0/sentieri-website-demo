import ArticleCard from './ArticleCard'
import { Article } from '@/lib/types'

interface ArticleGridProps {
  articles: Article[]
  scrollable?: boolean
}

export default function ArticleGrid({ articles, scrollable = false }: ArticleGridProps) {
  return (
    <div
      className={`grid grid-cols-2 no-scrollbar ${
        scrollable ? 'overflow-y-scroll' : 'overflow-hidden grid-rows-2'
      }`}
      style={{
        background: 'var(--cream)',
        padding: '40px',
        gap: '40px',
        height: 'calc(100vh - 55px)',
      }}
    >
      {articles.map((article, index) => (
        <ArticleCard
          key={article._id || article.slug || index}
          title={article.title}
          slug={article.slug}
          publishDate={article.publishDate}
          featuredImage={article.featuredImage}
          entity={article.entity}
        />
      ))}

      {/* If not scrollable and less than 4 articles, show placeholders */}
      {!scrollable && articles.length < 4 && (
        <>
          {Array.from({ length: 4 - articles.length }).map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className="aspect-square"
              style={{ background: 'var(--cream)' }}
            />
          ))}
        </>
      )}
    </div>
  )
}
