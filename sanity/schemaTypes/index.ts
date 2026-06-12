import {type SchemaTypeDefinition} from 'sanity'
import {article} from './article'
import {winePage} from './winePage'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [article, winePage],
}
