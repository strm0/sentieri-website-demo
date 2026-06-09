import {defineType, defineField, defineArrayMember} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'publishDate', title: 'Publish date', type: 'date'}),
    defineField({name: 'author', type: 'string'}),
    defineField({
      name: 'entity',
      type: 'string',
      options: {
        list: [
          {title: 'Stelle', value: 'stelle'},
          {title: 'Sogni', value: 'sogni'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'audio',
      title: 'Audio (optional)',
      type: 'file',
      options: {accept: 'audio/*'},
    }),
    // The body array's ORDER is the mobile rendering order. Drag to reorder.
    defineField({
      name: 'body',
      title: 'Body — drag to reorder (this is the mobile order)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Paragraph', value: 'normal'},
            {title: 'Subheader', value: 'h2'},
          ],
          lists: [],
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({name: 'caption', type: 'string'}),
            defineField({
              name: 'spacing',
              type: 'string',
              options: {list: ['compact', 'normal', 'spacious'], layout: 'radio'},
              initialValue: 'normal',
            }),
          ],
        }),
      ],
    }),
  ],
})
