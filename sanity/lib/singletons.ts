// Singleton document types: exactly one instance each, pinned in the Studio,
// no create / delete / duplicate. Add future singletons (oliveOilPage, etc.) here.
export interface Singleton {
  id: string    // fixed document _id  (convention: same as type)
  type: string  // schema type name
  title: string // label in the Studio sidebar
}

export const SINGLETONS: Singleton[] = [
  { id: 'winePage', type: 'winePage', title: 'Wine' },
]

export const SINGLETON_TYPES = new Set(SINGLETONS.map((s) => s.type))
