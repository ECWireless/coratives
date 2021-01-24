import React from 'react';
import { Fade } from 'react-reveal'
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows } from '../theme'

// Components
import Banner from '../Banner'
import { Box3 } from '../Boxes'
import { ButtonWhite } from '../Buttons'
import { Container, Flex } from '../Containers'
import { P1, P2, P3, P4 } from '../Typography'

export function Contact() {
    return (
        <div style={{ background: colors.blueLight,  }}>
            <Box3 paddingTop={100} paddingBottom={75}>
                <Banner
                    heading={'Want to Learn More?'}
                    subheading={'Submit the form and someone will be in touch.'}
                    textColor={colors.grey}
                    line1Color={colors.grey}
                    line2Color={colors.green}
                />
            </Box3>
            <Fade ssrFadeout>
                <Box3 paddingBottom={100}>
                    <Container>
                        <StyledContactForm action="">
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='name'>Name:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='name' type="text"/>
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='email'>Email:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='email' type="email"/>
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex justify={'space-between'} wrap={'true'}>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='phone'>Phone:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='phone' type="tel"/>
                                    </Box3>
                                </Flex>
                                <Flex direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <StyledLabel bold uppercase color={colors.white} htmlFor='title'>Title:</StyledLabel>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <StyledInput id='title' type="text"/>
                                    </Box3>
                                </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Box3 marginBottom={10}>
                                    <StyledLabel bold uppercase color={colors.white} htmlFor='company'>Company:</StyledLabel>
                                </Box3>
                                <Box3 marginBottom={50}>
                                    <StyledInput full id='company' type="text"/>
                                </Box3>
                            </Flex>
                            <Box3 marginTop={25}>
                                <ButtonWhite>Submit</ButtonWhite>
                            </Box3>
                        </StyledContactForm>
                    </Container>
                </Box3>
            </Fade>
        </div>
    )
}

const StyledContactForm = styled.form`
    background: ${colors.grey};
    border-radius: 36px;
    margin: 0 auto;
    padding: 5rem 4rem;
    width: 30rem;

    ${respondTo.xs`
        width: 40rem;
    `}

    ${respondTo.sm`
        padding: 5rem 6rem;
        width: 60rem;
    `}

    ${respondTo.md`
        width: 80rem;
    `}

    ${respondTo.xl`
        width: 110rem;
    `}
`

const StyledInput = styled.input`
    background: ${colors.grey};
    border: none;
    border-bottom: 2px solid ${colors.white};
    color: ${colors.white};
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: regular;
    height: 4rem;
    outline: none;
    padding: 1rem 0;
    transition: all .3s ease;
    width: 22rem;

    &:hover {
        border-bottom: 2px solid ${colors.yellow};
    }

    &:active,
    &:focus {
        border-bottom: 2px solid ${colors.green};
    }

    ${respondTo.xs`
        width: 15rem;
    `}

    ${respondTo.sm`
        font-size: 1.5rem;
        width: 22rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
        line-height: 20px;
        width: 32rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 25px;
        width: 40rem;
    `}

    ${props => props.full && css`
        width: 100%;

        ${respondTo.xs`
            width: 100%;
        `}

        ${respondTo.sm`
            width: 100%;
        `}

        ${respondTo.xl`
            width: 100%;
        `}
    `}
`

const StyledLabel = styled.label`
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: regular;
    margin: 0;
    padding: 0;

    ${respondTo.sm`
        font-size: 1.5rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
        line-height: 20px;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 25px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => css`
        color: ${props.color}
    `}
`
