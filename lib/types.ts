import React from 'react'

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

export type ContentBlock =
  | { type: 'text'; content: React.ReactNode }
  | { type: 'image'; url: string; alt: string }
