import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'publicHealthLearning',
  title: 'Human-Centered AI in Healthcare Learning',
  type: 'document',
  icon: () => '🏥',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'takeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Takeaway Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'explanation',
              title: 'Explanation',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'reflection',
      title: 'Reflection',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'questions',
      title: 'Questions for Further Exploration',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      source: 'source',
    },
    prepare(selection) {
      const { title, date, source } = selection
      return {
        title: title,
        subtitle: `${date} • ${source}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
