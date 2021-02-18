export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
            source: 'title',
            maxLength: 96
            }
        },
        {
            name: 'blogHeading',
            title: 'Blog Heading',
            type: 'string'
        },
        {
            name: 'blogSubheading',
            title: 'Blog Subheading',
            type: 'string'
        },
    ],
  
    preview: {
        select: {
            title: 'title',
        },
    }
}
  