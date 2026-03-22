export interface Article {
  _id?: string
  title: string
  slug: string
  publishDate: string
  featuredImage?: string
  entity?: 'stelle' | 'sogni'
  author?: string
  imagePosition?: string
}
