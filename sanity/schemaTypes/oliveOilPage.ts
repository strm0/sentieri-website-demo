import {defineType, defineField, defineArrayMember} from 'sanity'

export const oliveOilPage = defineType({
  name: 'oliveOilPage',
  title: 'Olive oil',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (tagline under the title)',
      type: 'string',
      description: 'Short tagline shown in Geist Mono under the page title. Optional.',
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
