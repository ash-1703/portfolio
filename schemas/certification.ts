import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certifications',
  type: 'document',
  icon: () => '🎓',
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Human-Centered AI in Healthcare', value: 'human-centered-ai-healthcare' },
          { title: 'AI & Technology', value: 'ai-tech' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year (for completed)',
      type: 'string',
      hidden: ({ document }) => document?.status !== 'completed',
    }),
    defineField({
      name: 'certificateUrl',
      title: 'Certificate URL (for completed)',
      type: 'url',
      hidden: ({ document }) => document?.status !== 'completed',
    }),
    defineField({
      name: 'takeaway',
      title: 'Key Takeaway (for completed)',
      type: 'text',
      rows: 3,
      hidden: ({ document }) => document?.status !== 'completed',
    }),
    defineField({
      name: 'progress',
      title: 'Progress % (for in-progress)',
      type: 'string',
      placeholder: '60%',
      hidden: ({ document }) => document?.status !== 'in-progress',
    }),
    defineField({
      name: 'expectedCompletion',
      title: 'Expected Completion (for in-progress)',
      type: 'string',
      placeholder: 'March 2026',
      hidden: ({ document }) => document?.status !== 'in-progress',
    }),
    defineField({
      name: 'focus',
      title: 'Focus Area (for in-progress)',
      type: 'text',
      rows: 2,
      hidden: ({ document }) => document?.status !== 'in-progress',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      provider: 'provider',
      status: 'status',
    },
    prepare(selection) {
      const { title, provider, status } = selection
      return {
        title: title,
        subtitle: `${provider} • ${status}`,
      }
    },
  },
})
