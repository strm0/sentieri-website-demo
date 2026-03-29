import GridPageTemplate from '@/components/templates/GridPageTemplate'
import { articles } from '@/lib/articles'

export default function ArchivePage() {
  const allArticles = articles.map(article => ({
    title: article.title,
    slug: article.slug,
    publishDate: article.publishDate,
    featuredImage: article.featuredImage,
    entity: article.entity,
    author: article.author,
  }))

  return (
    <GridPageTemplate
      title="Archive"
      description={
        <>
          <p>
            The Archive brings together writings, documentation, and reflections from
            across our agricultural and cultural activities. Here you'll find stories from the
            field, workshop reports, artistic research, and collaborative experiments that span
            both Sentieri di Stelle and Sentieri di Sogni.
          </p>
          <p>
            This archive is a living resource — a place to trace the evolving relationship between
            land stewardship, cultural practice, and collective imagination. Each piece reflects
            our commitment to sharing knowledge, fostering exchange, and documenting the ongoing
            work of rural regeneration.
          </p>
        </>
      }
      featuredArticles={allArticles}
      mirrored={true}
    />
  )
}
