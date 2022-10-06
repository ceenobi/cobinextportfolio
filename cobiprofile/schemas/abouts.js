export default {
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          name: 'experience',
          title: 'Experience',
          type: 'string',
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'text',
    },
    {
      name: 'thissite',
      title: 'This Site',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
