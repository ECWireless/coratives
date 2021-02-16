export default {
    name: 'home',
    title: 'Home',
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
            name: 'heroHeadingLine1Light',
            title: 'Hero Heading Line 1 Light',
            type: 'string'
        },
        {
            name: 'heroHeadingLine1Bold',
            title: 'Hero Heading Line 1 Bold',
            type: 'string'
        },
        {
            name: 'heroHeadingLine2Light',
            title: 'Hero Heading Line 2 Light',
            type: 'string'
        },
        {
            name: 'heroHeadingLine2Bold',
            title: 'Hero Heading Line 2 Bold',
            type: 'string'
        },
        {
            name: 'servicesHeading',
            title: 'Services Heading',
            type: 'string'
        },
        {
            name: 'servicesSubheading',
            title: 'Services Subheading',
            type: 'string'
        },
        {
            name: 'card1Heading',
            title: 'Card 1 Heading',
            type: 'string'
        },
        {
            name: 'card1ListItem1',
            title: 'Card 1 List Item 1',
            type: 'string'
        },
        {
            name: 'card1ListItem2',
            title: 'Card 1 List Item 2',
            type: 'string'
        },
        {
            name: 'card1ListItem3',
            title: 'Card 1 List Item 3',
            type: 'string'
        },
        {
            name: 'card1ListItem4',
            title: 'Card 1 List Item 4',
            type: 'string'
        },
        {
            name: 'card2Heading',
            title: 'Card 2 Heading',
            type: 'string'
        },
        {
            name: 'card2ListItem1',
            title: 'Card 2 List Item 1',
            type: 'string'
        },
        {
            name: 'card2ListItem2',
            title: 'Card 2 List Item 2',
            type: 'string'
        },
        {
            name: 'card2ListItem3',
            title: 'Card 2 List Item 3',
            type: 'string'
        },
        {
            name: 'card2ListItem4',
            title: 'Card 2 List Item 4',
            type: 'string'
        },
        {
            name: 'testimonialsHeading',
            title: 'Testimonials Heading',
            type: 'string'
        },
        {
            name: 'testimonialsSubheading',
            title: 'Testimonials Subheading',
            type: 'string'
        },
        {
            name: 'testimonial1Name',
            title: 'Testimonial 1 Name',
            type: 'string'
        },
        {
            name: 'testimonial1Photo',
            title: 'Testimonial 1 Photo',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'testimonial1Title',
            title: 'Testimonial 1 Title',
            type: 'string'
        },
        {
            name: 'testimonial1Quote',
            title: 'Testimonial 1 Quote',
            type: 'blockContent'
        },
        {
            name: 'testimonial2Name',
            title: 'Testimonial 2 Name',
            type: 'string'
        },
        {
            name: 'testimonial2Photo',
            title: 'Testimonial 2 Photo',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'testimonial2Title',
            title: 'Testimonial 2 Title',
            type: 'string'
        },
        {
            name: 'testimonial2Quote',
            title: 'Testimonial 2 Quote',
            type: 'blockContent'
        },
        {
            name: 'testimonial3Name',
            title: 'Testimonial 3 Name',
            type: 'string'
        },
        {
            name: 'testimonial3Photo',
            title: 'Testimonial 3 Photo',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'testimonial3Title',
            title: 'Testimonial 3 Title',
            type: 'string'
        },
        {
            name: 'testimonial3Quote',
            title: 'Testimonial 3 Quote',
            type: 'blockContent'
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
  