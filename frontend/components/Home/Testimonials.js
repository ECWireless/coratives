import React from 'react';
import { Fade } from 'react-reveal'
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows } from '../theme'

// Components
import Banner from '../Banner'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { P1, P2, P3, P4 } from '../Typography'

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
                    <Container>
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
                            {testimonialSelection === '1' && (
                            <SelectedCoontainer
                                testimonial={`"CORATIVES not only rapidly understood our mission and business goals, but also quickly provided outstanding written marketing & sales material which facilitated a successful launch of a new product concept during one of the most tumultuous times for fashion brands especially. It's obvious they're very passionate about helping businesses not only stay alive, but truly thrive!"`}
                                name={'Aysha Saeed'}
                                title={'– CEO of Aysha NY'}
                                image={'1'}
                            />)}
                            {testimonialSelection === '2' && (
                            <SelectedCoontainer
                                testimonial={`"CORATIVES helped burghTV grow from what was just a small idea into an organization with a history of generating terrific content and serious growth potential. Their ability to manage both the content creation of the stories has been invaluable. In addition, their ability to help the organization contact new partners and audiences has shown they understand the artistic side as well as the professional and branding aspects of the organization."`}
                                name={'Justin Mastrangelo'}
                                title={'– Founder of BurghTV'}
                                image={'2'}
                            />)}
                            {testimonialSelection === '3' && (
                            <SelectedCoontainer
                                testimonial={`"Working with CORATIVES is providing our sales & marketing team a big boost in confidence. When we share any challenges our team is facing, such as our prospective clients navigating the unpredictable COVID-19 work safety protocols, CORATIVES quickly pulls together creative solution concepts, delivering outstanding results within days. We feel very excited about our partnership with CORATIVES!”`}
                                name={'Andy Chan'}
                                title={'– CEO of VIT'}
                                image={'3'}
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
                <StyledSelectedImage src={`/static/Testimonial_img_${image}.jpg`} alt="Aysha Saeed" />
                <StyledTestimonialContainer>
                    <Box3 marginBottom={25}>
                        <P4>{testimonial}</P4>
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
