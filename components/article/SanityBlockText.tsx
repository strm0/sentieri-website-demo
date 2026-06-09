'use client'

import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { Geist_Mono } from 'next/font/google'

// Geist Mono is used (per design) for article subheaders only. Scoped here so
// the rest of the site keeps using Noi Grotesk.
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400'], display: 'swap' })

const components: PortableTextComponents = {
  block: {
    // `normal` → body paragraph. The `.body-text p` rule supplies paragraph spacing.
    normal: ({ children }) => <p>{children}</p>,
    // `h2` → the site's existing subheader treatment, set in Geist Mono.
    h2: ({ children }) => (
      <h2 className="subheader-l1" style={{ fontFamily: geistMono.style.fontFamily }}>
        {children}
      </h2>
    ),
  },
}

/**
 * Renders a single Portable Text block from a Sanity Article body. Rendering one
 * block at a time lets the parent template split text vs. image members across
 * the two desktop panes while preserving order on mobile.
 */
export default function SanityBlockText({ block }: { block: PortableTextBlock }) {
  return <PortableText value={[block]} components={components} />
}
