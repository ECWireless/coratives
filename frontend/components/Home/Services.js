import { Fade } from 'react-reveal'
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows } from '../theme'

// Components
import Banner from '../Banner'
import { Box3 } from '../Boxes'
import { ButtonWhite } from '../Buttons'
import { Flex, Container } from '../Containers'
import { H4, P3 } from '../Typography'

export function Services({
		servicesHeading,
		servicesSubheading,
		card1Heading,
		card1ListItem1,
		card1ListItem2,
		card1ListItem3,
		card1ListItem4,
		card2Heading,
		card2ListItem1,
		card2ListItem2,
		card2ListItem3,
		card2ListItem4,
}) {
    return (
        <>
            <Box3 paddingTop={100} paddingBottom={75}>
                <Banner
                    heading={servicesHeading}
                    subheading={servicesSubheading}
                    textColor={colors.grey}
                    line1Color={colors.grey}
                    line2Color={colors.white}
                />
            </Box3>
            <Container>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <StyledCardContainer>
                        <Fade ssrFadeout>
                            <StyledCardWhite>
                                <StyledIconContainer color={colors.green}>
                                    <StyledIcon preserveAspectRatio="xMidYMid meet" data-bbox="27.5 24.5 145 151" viewBox="27.5 24.5 145 151" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
                                        <g>
                                            <path d="M166.82 92.908c-4.907-6.392-12.402-9.912-21.097-9.912h-15.146c6.23-13.612 6.442-33.453 1.485-45.221-3.609-8.563-9.786-13.275-17.398-13.275-2.065 0-4.226.362-6.425 1.067C97.378 29.064 96.97 37.703 96.61 45.321c-.525 11.074-1.32 27.359-29.535 48.386V83.144H27.5v90.882h39.575v-11.241c6.772 6.125 16.413 12.715 26.557 12.715h45.764c9.546 0 18.961-7.209 21.44-16.41l10.278-38.174c2.838-10.55 1.275-20.76-4.294-28.008zM56.546 163.515H38.029V93.66h18.518l-.001 69.855zm104.396-45.33l-10.278 38.176c-1.237 4.598-6.501 8.625-11.269 8.625H93.632c-9.948 0-21.633-11.478-26.557-17.341v-41.027c38.409-26.049 39.433-47.737 40.053-60.801.38-8.062.829-9.112 4.341-10.246 1.153-.371 2.23-.557 3.196-.557 3.193 0 5.778 2.302 7.69 6.838 5.25 12.462 2.515 34.824-5.228 42.724l-8.754 8.931h37.35c5.424 0 9.831 2.003 12.74 5.796 3.559 4.637 4.463 11.515 2.479 18.882z" data-color="1"></path>
                                        </g>
                                    </StyledIcon>
                                </StyledIconContainer>
                                <Box3 marginTop={25}>
                                    <H4 color={colors.grey} uppercase bold center>
                                        {card1Heading}
                                    </H4>
                                </Box3>
                                <Box3 marginTop={25} marginBottom={25}>
                                    <Flex justify={'center'}>
                                        <StyledLine color={colors.yellow} />
                                    </Flex>
                                </Box3>
                                <StyedListContainer>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.green} textColor={colors.grey} text={card1ListItem1} />
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.green} textColor={colors.grey} text={card1ListItem2} />
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.green} textColor={colors.grey} text={card1ListItem3} />
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.green} textColor={colors.grey} text={card1ListItem4} />
                                    </Box3>
                                </StyedListContainer>
                            </StyledCardWhite>
                        </Fade>
                        <Fade delay={200} ssrFadeout>
                            <StyledCardBlack>
                                <StyledIconContainer color={colors.yellow}>
                                    <StyledIcon preserveAspectRatio="xMidYMid meet" data-bbox="28.5 35.5 142.999 129" viewBox="28.5 35.5 142.999 129" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img">
                                        <g>
                                            <path d="M28.5 35.5v97.345h47.631L63.318 164.5h11.384l12.813-31.655h7.21V164.5h10.55v-31.655h7.211l12.811 31.655h11.384l-12.812-31.655h47.63V35.5H28.5zm132.448 86.79H39.05V46.055h121.898v76.235z" data-color="1"></path>
                                        </g>
                                    </StyledIcon>
                                </StyledIconContainer>
                                <Box3 marginTop={25}>
                                    <H4 color={colors.white} uppercase bold center>
                                        {card2Heading}
                                    </H4>
                                </Box3>
                                <Box3 marginTop={25} marginBottom={25}>
                                    <Flex justify={'center'}>
                                        <StyledLine color={colors.green} />
                                    </Flex>
                                </Box3>
                                <StyedListContainer>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.yellow} textColor={colors.white} text={card2ListItem1} />
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.yellow} textColor={colors.white} text={card2ListItem2} />
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <ListItemComponent iconColor={colors.yellow} textColor={colors.white} text={card2ListItem3} />
                                    </Box3>
                                    <ListItemComponent iconColor={colors.yellow} textColor={colors.white} text={card2ListItem4} />
                                </StyedListContainer>
                            </StyledCardBlack>
                        </Fade>
                    </StyledCardContainer>
                    <Box3 marginTop={50}>
                        <ButtonWhite>Contact</ButtonWhite>
                    </Box3>
                </Flex>
            </Container>
        </>
    )
}

export const ListItemComponent = ({
    iconColor,
    text,
    textColor,
}) => {
    return (
        <Flex align={'center'}>
            <StyledListIconContainer>
                <StyledListIcon color={iconColor} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>checkmark2</title>
                    <path d="M12.42 28.678l-12.433-12.238 6.168-6.071 6.265 6.167 13.426-13.214 6.168 6.071-19.594 19.285zM3.372 16.441l9.048 8.905 16.208-15.953-2.782-2.739-13.426 13.214-6.265-6.167-2.782 2.739z"></path>
                </StyledListIcon>
            </StyledListIconContainer>
            <P3 color={textColor}>{text}</P3>
        </Flex>
    )
}


const StyledCardBlack = styled.div`
    background: ${colors.black};
    border: 2px solid ${colors.black};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    padding: 4rem 2rem;
    height: 45rem;
    transition: all .3s ease;
    width: 100%;

    &:hover {
        border: 2px solid ${colors.yellow};
        box-shadow: ${shadows.buttonHover};
    }

    ${respondTo.xs`
        height: 50rem;
        padding: 5rem 2rem;
        width: 40rem;
    `}

    ${respondTo.md`
        height: 60rem;
        width: 40rem;
    `}

    ${respondTo.xl`
        height: 85rem;
        padding: 6rem 4rem;
        width: 65rem;
    `}
`

const StyledCardContainer = styled.div`
    align-content: center;
    border: 2px solid transparent;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${respondTo.xs`
        width: 40rem;
    `}

    ${respondTo.md`
        flex-direction: row;
        width: 90rem;
    `}
    
    ${respondTo.xl`
        width: 140rem;
    `}
`

const StyledCardWhite = styled.div`
    background: ${colors.white};
    border: 2px solid ${colors.white};
    box-shadow: ${shadows.card};
    border-radius: 36px;
    height: 45rem;
    margin-bottom: 3rem;
    padding: 5rem 2rem;
    transition: all .3s ease;
    width: 100%;

    &:hover {
        border: 2px solid ${colors.green};
        box-shadow: ${shadows.buttonHover};
    }

    ${respondTo.xs`
        height: 50rem;
        width: 40rem;
    `}

    ${respondTo.sm`
        margin-bottom: 5rem;
    `}

    ${respondTo.md`
        height: 60rem;
        width: 40rem;
        margin-bottom: 0;
    `}

    ${respondTo.xl`
        height: 85rem;
        padding: 6rem 4rem;
        width: 65rem;
    `}
`

const StyledIcon = styled.svg`
    fill: ${colors.white};
    height: 50%;
    width: 50%;
`

const StyledIconContainer = styled.div`
    border-radius: 50%;
    align-items: center;
    display: flex;
    height: 8rem;
    margin: 0 auto;
    justify-content: center;
    width: 8rem;

    ${respondTo.xl`
        height: 12rem;
        width: 12rem;
    `}

    ${props => props.color && css`
        background: ${props.color};
    `}
`

const StyledLine = styled.div`
    height: 3px;
    width: 2rem;

    ${respondTo.xl`
        height: 5px;
        width: 4rem;
    `}

    ${props => props.color && css`
        background: ${props.color}
    `}
`

const StyedListContainer = styled.div`
    padding: 0 1rem;

    ${respondTo.xs`
        padding: 0 4rem;
    `}
`

const StyledListIcon = styled.svg`
    height: 2rem;
    margin-right: 2rem;
    width: 2rem;

    ${respondTo.xs`
        height: 3rem;
        width: 3rem;
    `}

    ${props => props.color && css`
        fill: ${props.color};
    `}
`

const StyledListIconContainer = styled.div`
    height: 2rem;
    margin-right: 2rem;
    width: 2rem;

    ${respondTo.xs`
        height: 3rem;
        width: 3rem;
    `}
`
