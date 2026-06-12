import {type SchemaTypeDefinition} from 'sanity'
import {article} from './article'
import {winePage} from './winePage'
import {oliveOilPage} from './oliveOilPage'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [article, winePage, oliveOilPage],
}
