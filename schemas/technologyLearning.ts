import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'technologyLearning',
  title: 'Technology & AI Learning',
  type: 'document',
  icon: () => '💻',
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
      name: 'whatILearned',
      title: 'What I Learned',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Learning Point',
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
      name: 'connectionToHealth',
      title: 'Connection to Health',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'technicalDetails',
      title: 'Technical Details (Optional)',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'nextSteps',
      title: 'Next Steps to Explore',
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
    },
    prepare(selection) {
      const { title, date } = selection
      return {
        title: title,
        subtitle: date,
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
