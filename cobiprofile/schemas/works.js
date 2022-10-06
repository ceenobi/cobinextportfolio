export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'project',
      title: 'Project',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'descriptionB',
      title: 'DescriptionB',
      type: 'text',
    },
    {
      name: 'descriptionC',
      title: 'DescriptionC',
      type: 'text',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [
        {
          name: 'roles',
          title: 'Roles',
          type: 'string',
        },
      ],
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'text',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      type: 'array',
      name: 'cloudinaryList',
      description: 'This asset is served from Cloudinary',
      of: [{ type: 'cloudinary.asset' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
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
