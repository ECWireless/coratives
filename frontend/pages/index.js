import React from 'react'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import { colors } from '../components/theme'

// Components
import {
	Hero,
	Services,
	Testimonials,
	Contact,
} from '../components/Home'

export default function Home({ homeProps }) {
	// Props
	const {
		heroHeadingLine1Light,
		heroHeadingLine1Bold,
		heroHeadingLine2Light,
		heroHeadingLine2Bold,
		servicesHeading,
		servicesSubheading,
		card1Heading,
		card1ListItem1,
		card1ListItem2,
		card1ListItem3,
		card1ListItem4,
		card1ListItem5,
		card1ListItem6,
		card1ListItem7,
		card1ListItem8,
		card2Heading,
		card2ListItem1,
		card2ListItem2,
		card2ListItem3,
		card2ListItem4,
		card2ListItem5,
		card2ListItem6,
		card2ListItem7,
		card2ListItem8,
		testimonialsHeading,
		testimonialsSubheading,
		testimonial1Name,
		testimonial1Photo,
		testimonial1Title,
		testimonial1Quote,
		testimonial2Name,
		testimonial2Photo,
		testimonial2Title,
		testimonial2Quote,
		testimonial3Name,
		testimonial3Photo,
		testimonial3Title,
		testimonial3Quote,
		contactHeading,
		contactSubheading,
	} = homeProps;

	// Refs
	const servicesRef = React.useRef(null);
	const testimonialsRef = React.useRef(null);
	const contactRef = React.useRef(null);

	// Handlers
	const onServicesShortcut = () => servicesRef.current.scrollIntoView({ behavior: 'smooth' })
	const onTestimonialsShortcut = () => testimonialsRef.current.scrollIntoView({ behavior: 'smooth' })
	const onContactShortcut = () => contactRef.current.scrollIntoView({ behavior: 'smooth' })

	return (
		<div>
			<Head>
				<title>Public Relations | Coratives | United States</title>
			</Head>

			<main style={{ background: colors.blue }}>
				<Hero
					/* Props */
					heroHeadingLine1Light={heroHeadingLine1Light}
					heroHeadingLine1Bold={heroHeadingLine1Bold}
					heroHeadingLine2Light={heroHeadingLine2Light}
					heroHeadingLine2Bold={heroHeadingLine2Bold}
					/* Handlers */
					onServicesShortcut={onServicesShortcut}
					onTestimonialsShortcut={onTestimonialsShortcut}
				/>
				<div ref={servicesRef} style={{ transform: 'translateY(-50px)'}} />
				<Services
					/* Props */
					servicesHeading={servicesHeading}
					servicesSubheading={servicesSubheading}
					card1Heading={card1Heading}
					card1ListItem1={card1ListItem1}
					card1ListItem2={card1ListItem2}
					card1ListItem3={card1ListItem3}
					card1ListItem4={card1ListItem4}
					card1ListItem5={card1ListItem5}
					card1ListItem6={card1ListItem6}
					card1ListItem7={card1ListItem7}
					card1ListItem8={card1ListItem8}
					card2Heading={card2Heading}
					card2ListItem1={card2ListItem1}
					card2ListItem2={card2ListItem2}
					card2ListItem3={card2ListItem3}
					card2ListItem4={card2ListItem4}
					card2ListItem5={card2ListItem5}
					card2ListItem6={card2ListItem6}
					card2ListItem7={card2ListItem7}
					card2ListItem8={card2ListItem8}
					/* Handlers */
					onContactShortcut={onContactShortcut}
				/>
				<div ref={testimonialsRef} style={{ transform: 'translateY(-50px)'}} />
				<Testimonials
					testimonialsHeading={testimonialsHeading}
					testimonialsSubheading={testimonialsSubheading}
					testimonial1Name={testimonial1Name}
					testimonial1Photo={urlFor(testimonial1Photo)}
					testimonial1Title={testimonial1Title}
					testimonial1Quote={testimonial1Quote}
					testimonial2Name={testimonial2Name}
					testimonial2Photo={urlFor(testimonial2Photo)}
					testimonial2Title={testimonial2Title}
					testimonial2Quote={testimonial2Quote}
					testimonial3Name={testimonial3Name}
					testimonial3Photo={urlFor(testimonial3Photo)}
					testimonial3Title={testimonial3Title}
					testimonial3Quote={testimonial3Quote}
				/>
				<div ref={contactRef} style={{ transform: 'translateY(-50px)'}} />
				<Contact
					contactHeading={contactHeading}
					contactSubheading={contactSubheading}
				/>
			</main>
		</div>
	)
}

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export async function getServerSideProps() {
	const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
		heroHeadingLine1Light,
		heroHeadingLine1Bold,
		heroHeadingLine2Light,
		heroHeadingLine2Bold,
		servicesHeading,
		servicesSubheading,
		card1Heading,
		card1ListItem1,
		card1ListItem2,
		card1ListItem3,
		card1ListItem4,
		card1ListItem5,
		card1ListItem6,
		card1ListItem7,
		card1ListItem8,
		card2Heading,
		card2ListItem1,
		card2ListItem2,
		card2ListItem3,
		card2ListItem4,
		card2ListItem5,
		card2ListItem6,
		card2ListItem7,
		card2ListItem8,
		testimonialsHeading,
		testimonialsSubheading,
		testimonial1Name,
		testimonial1Photo,
		testimonial1Title,
		testimonial1Quote,
		testimonial2Name,
		testimonial2Photo,
		testimonial2Title,
		testimonial2Quote,
		testimonial3Name,
		testimonial3Photo,
		testimonial3Title,
		testimonial3Quote,
		contactHeading,
		contactSubheading,
	}`)
	return {
	  props: { homeProps },
	}
  }
