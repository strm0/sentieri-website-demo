import type {StructureResolver} from 'sanity/structure'
import {SINGLETONS, SINGLETON_TYPES} from './lib/singletons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singletons, pinned — each opens its one fixed document directly.
      ...SINGLETONS.map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .id(singleton.id)
          .child(
            S.document().schemaType(singleton.type).documentId(singleton.id)
          )
      ),
      S.divider(),
      // Everything else (e.g. the Article collection), minus the singleton types.
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.has(item.getId() as string)
      ),
    ])
