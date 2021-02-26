import React from 'react';
import BlockContent from '@sanity/block-content-to-react'
import { Fade } from 'react-reveal'
import { colors } from '../../theme'

// Components
import {
    StyledSelectedContainer,
    StyledSelectedImageContainer,
    StyledSelectionContainer,
    StyledSelectionImage,
    StyledSelectionImageBig,
    StyledSelectionItem,
    StyledTestimonialContainer,
} from './components'
import Banner from '../../Banner'
import { Box3 } from '../../Boxes'
import { Container, Flex } from '../../Containers'
import Spacer from '../../Spacer'
import { P1, P2, P3, P4, P4Block } from '../../Typography'

export function Testimonials({
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
}) {
    const [ testimonialSelection, setTestimonialSelection] = React.useState('1')

    return (
        <Box3 marginTop={100}>
            <div style={{ background: colors.grey,  }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={testimonialsHeading}
                        subheading={testimonialsSubheading}
                        textColor={colors.white}
                        line1Color={colors.yellow}
                        line2Color={colors.white}
                    />
                </Box3>
                <Box3 paddingBottom={100}>
                    <Container>
                        <Flex wrap={'true'} justify={'center'}>
                            <StyledSelectionContainer>
                                <StyledSelectionItem onClick={() => setTestimonialSelection('1')} active={testimonialSelection === '1'}>
                                    <StyledSelectionImage src={testimonial1Photo} alt={testimonial1Name}/>
                                    <Flex direction={'column'}>
                                        <Box3 marginBottom={10}>
                                            <P1 bold uppercase>{testimonial1Name}</P1>
                                        </Box3>
                                        <P2 color={colors.grey}>
                                            {testimonial1Title}
                                        </P2>
                                    </Flex>
                                </StyledSelectionItem>
                                <StyledSelectionItem onClick={() => setTestimonialSelection('2')} active={testimonialSelection === '2'}>
                                    <StyledSelectionImage src={testimonial2Photo} alt={testimonial2Name} />
                                    <Flex direction={'column'}>
                                        <Box3 marginBottom={10}>
                                            <P1 bold uppercase>
                                                {testimonial2Name}
                                            </P1>
                                        </Box3>
                                        <P2 color={colors.grey}>
                                            {testimonial2Title}
                                        </P2>
                                    </Flex>
                                </StyledSelectionItem>
                                <StyledSelectionItem onClick={() => setTestimonialSelection('3')} active={testimonialSelection === '3'}>
                                    <StyledSelectionImage src={testimonial3Photo} alt={testimonial3Name} />
                                    <Flex direction={'column'}>
                                        <Box3 marginBottom={10}>
                                            <P1 bold uppercase>
                                                {testimonial3Name}
                                            </P1>
                                        </Box3>
                                        <P2 color={colors.grey}>
                                            {testimonial3Title}
                                        </P2>
                                    </Flex>
                                </StyledSelectionItem>
                            </StyledSelectionContainer>
                            {testimonialSelection === '1' && (
                            <SelectedCoontainer
                                testimonial={testimonial1Quote}
                                name={testimonial1Name}
                                title={testimonial1Title}
                                image={testimonial1Photo}
                            />)}
                            {testimonialSelection === '2' && (
                            <SelectedCoontainer
                                testimonial={testimonial2Quote}
                                name={testimonial2Name}
                                title={testimonial2Title}
                                image={testimonial2Photo}
                            />)}
                            {testimonialSelection === '3' && (
                            <SelectedCoontainer
                                testimonial={testimonial3Quote}
                                name={testimonial3Name}
                                title={testimonial3Title}
                                image={testimonial3Photo}
                            />)}
                        </Flex>
                    </Container>
                </Box3>
            </div>
        </Box3>
    )
}

const SelectedCoontainer = ({
    testimonial,
    name,
    title,
    image,
}) => {
    return (
        <Fade ssrFadeout>
            <StyledSelectedContainer>
                {/* <StyledSelectedImage src={image} alt={name} /> */}
                <StyledTestimonialContainer>
                    <Box3 marginBottom={25}>
                        <P4Block>
                            <BlockContent
                                blocks={testimonial}
                            />
                        </P4Block>
                    </Box3>
                    <Spacer size={'sm'} />
                    <Box3 marginBottom={10}>
                        <P3 uppercase bold>{name}</P3>
                    </Box3>
                    <P4 color={colors.grey}>{title}</P4>
                    <Spacer size={'md'} />
                    <StyledSelectedImageContainer>
                        <StyledSelectionImageBig src={image} alt={name}/>
                    </StyledSelectedImageContainer>
                </StyledTestimonialContainer>
            </StyledSelectedContainer>
        </Fade>
    )
}
