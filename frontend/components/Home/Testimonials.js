import React from 'react';
import BlockContent from '@sanity/block-content-to-react'
import { Fade } from 'react-reveal'
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows } from '../theme'

// Components
import Banner from '../Banner'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { P1, P2, P3, P4, P4Block } from '../Typography'

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
                        <Flex wrap={'true'}>
                            <StyledSelectionContainer>
                                <StyledSelectionItem onClick={() => setTestimonialSelection('1')} active={testimonialSelection === '1'}>
                                    <StyledSelectionImage src={testimonial1Photo} alt={testimonial1Name}/>
                                    <Flex direction={'column'}>
                                        <Box3 marginBottom={10}>
                                            <P1 bold uppercase>{testimonial1Name}</P1>
                                        </Box3>
                                        <P2 color={colors.green}>
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
                                        <P2 color={colors.green}>
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
                                        <P2 color={colors.green}>
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
                <StyledSelectedImage src={image} alt={name} />
                <StyledTestimonialContainer>
                    <Box3 marginBottom={25}>
                        <P4Block>
                            <BlockContent
                                blocks={testimonial}
                            />
                        </P4Block>
                    </Box3>
                    <Box3 marginBottom={10}>
                        <P3 uppercase bold>{name}</P3>
                    </Box3>
                    <P4 color={colors.green}>{title}</P4>
                </StyledTestimonialContainer>
            </StyledSelectedContainer>
        </Fade>
    )
}

const StyledSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSelectedImage = styled.img`
    border-radius: 36px;
    box-shadow: ${shadows.buttonHover};
    height: 30rem;
    margin: 0 auto;
    width: 30rem;

    ${respondTo.xs`
        height: 40rem;
        width: 40rem;
    `}

    ${respondTo.sm`
        height: 50rem;
        width: 50rem;
    `}

    ${respondTo.xl`
        height: 75rem;
        width: 75rem;
    `}
`

const StyledSelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 34rem;
    justify-content: space-between;
    margin-bottom: 4rem;

    ${respondTo.xs`
        height: 38rem;
        margin-bottom: 6rem;
    `}

    ${respondTo.sm`
        margin-bottom: 8rem;
    `}

    ${respondTo.lg`
        height: 55rem;
        margin-bottom: 0;
    `}

    ${respondTo.xl`
        height: 68rem;
    `}
`

const StyledSelectionImage = styled.img`
    border: 4px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.buttonHover};
    height: 6rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 6rem;

    ${respondTo.xs`
        height: 8rem;
        margin-left: 3rem;
        margin-right: 2rem;
        width: 8rem;
    `}

    ${respondTo.lg`
        height: 10rem;
        margin-left: 5rem;
        margin-right: 4rem;
        width: 10rem;
    `}
`

const StyledSelectionItem = styled.div`
    align-items: center;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    display: flex;
    height: 10rem;
    transition: all .3s ease;
    width: 30rem;

    &:hover {
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.green};

        ${props => props.active && css`
            border-left: 10px solid ${colors.green};
        `}
    }

    &:active,
    &:focus {
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.green};
        border-left: 10px solid ${colors.green};
    }

    ${respondTo.xs`
        height: 11rem;
        width: 40rem;
    `}

    ${respondTo.lg`
        height: 15rem;
        width: 50rem;
    `}

    ${respondTo.xl`
        height: 20rem;
        width: 65rem;
    `}

    ${props => props.active && css`
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.green};
        border-left: 10px solid ${colors.green};
    `}
`

const StyledTestimonialContainer = styled.div`
    background: ${colors.white};
    border-radius: 36px;
    margin: 0 auto;
    padding: 4rem;
    transform: translateY(-5rem);
    width: 28rem;

    ${respondTo.xs`
        width: 38rem;
    `}

    ${respondTo.sm`
        width: 45rem;
    `}

    ${respondTo.xl`
        width: 70rem;
    `}
`
