export default {
    name: 'contact',
    title: 'Contact',
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
            name: 'contactHeading',
            title: 'Contact Heading',
            type: 'string'
        },
        {
            name: 'contactSubheading',
            title: 'Contact Subheading',
            type: 'string'
        },
    ],
  
    preview: {
        select: {
            title: 'title',
        },
    }
}
  