export default {
    name: 'about',
    title: 'About',
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
            name: 'aboutHeading',
            title: 'About Heading',
            type: 'string'
        },
        {
            name: 'aboutSubheading',
            title: 'About Subheading',
            type: 'string'
        },
        {
            name: 'aboutPhoto',
            title: 'About Photo',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'aboutDescription',
            title: 'About Description',
            type: 'blockContent'
        },
    ],
  
    preview: {
        select: {
            title: 'title',
        },
    }
}
  