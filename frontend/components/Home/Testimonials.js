import React from 'react';
import { Fade } from 'react-reveal'
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows } from '../theme'

// Components
import Banner from '../Banner'
import { Box3 } from '../Boxes'
import { Flex } from '../Containers'
import { P1, P2 } from '../Typography'

export function Testimonials() {
    const [ testimonialSelection, setTestimonialSelection] = React.useState('1')

    return (
        <Box3 marginTop={100}>
            <div style={{ background: colors.grey,  }}>
                <Box3 paddingTop={100} paddingBottom={75}>
                    <Banner
                        heading={'Testimonials'}
                        subheading={'What our clients are saying.'}
                        textColor={colors.white}
                        line1Color={colors.yellow}
                        line2Color={colors.white}
                    />
                </Box3>
                <Box3 paddingBottom={100}>
                    <Flex wrap={'true'}>
                        <StyledSelectionContainer>
                            <StyledSelectionItem onClick={() => setTestimonialSelection('1')} active={testimonialSelection === '1'}>
                                <StyledSelectionImage src="/static/Testimonial_img_1.jpg" alt="Aysha Saeed"/>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P1 bold uppercase>AYSHA SAEED</P1>
                                    </Box3>
                                    <P2 color={colors.green}>– CEO of Aysha NY</P2>
                                </Flex>
                            </StyledSelectionItem>
                            <StyledSelectionItem onClick={() => setTestimonialSelection('2')} active={testimonialSelection === '2'}>
                                <StyledSelectionImage src="/static/Testimonial_img_2.jpg" alt="Aysha Saeed"/>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P1 bold uppercase>JUSTIN MASTRANGELO</P1>
                                    </Box3>
                                    <P2 color={colors.green}>– Founder of BurghTV</P2>
                                </Flex>
                            </StyledSelectionItem>
                            <StyledSelectionItem onClick={() => setTestimonialSelection('3')} active={testimonialSelection === '3'}>
                                <StyledSelectionImage src="/static/Testimonial_img_3.jpg" alt="Aysha Saeed"/>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P1 bold uppercase>ANDY CHAN</P1>
                                    </Box3>
                                    <P2 color={colors.green}>– CEO of VIT</P2>
                                </Flex>
                            </StyledSelectionItem>
                        </StyledSelectionContainer>
                        <StyledSelectedContainer>
                            <StyledSelectedImage src="" alt=""/>
                            <p>Testimonial</p>
                            <p>Name</p>
                            <p>Title</p>
                        </StyledSelectedContainer>
                    </Flex>
                </Box3>
            </div>
        </Box3>
    )
}

const StyledSelectedContainer = styled.div`

`

const StyledSelectedImage = styled.img`

`

const StyledSelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 55rem;
    justify-content: space-between;
`

const StyledSelectionImage = styled.img`
    border: 4px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.buttonHover};
    height: 10rem;
    margin-left: 5rem;
    margin-right: 4rem;
    width: 10rem;
`

const StyledSelectionItem = styled.div`
    align-items: center;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    display: flex;
    height: 15rem;
    transition: all .3s ease;
    width: 50rem;

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

    ${props => props.active && css`
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.green};
        border-left: 10px solid ${colors.green};
    `}
`
