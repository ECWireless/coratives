import { Fade } from 'react-reveal'
import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { colors } from '../theme'

// Components
import { Box3 } from '../Boxes'
import { ButtonBlack, ButtonWhite } from '../Buttons'
import { Container } from '../Containers'
import { H1 } from '../Typography'

export default function Hero() {
    return (
        <Box3 paddingTop={25} paddingBottom={75}>
            <Container>
                <StyledBackgroundContainer>
                    <StyledHeroBackground />
                    <StyledHeroForeground>
                        <StyledLogo src="/static/c.png" alt="C Logo" />
                        <StyledSloganContainer>
                            <Fade bottom ssrFadout>
                                <H1 center>Behind every <span style={{fontWeight: 'bold'}}>business idea</span></H1>
                            </Fade>
                            <Fade delay={200} bottom ssrFadout>
                                <H1 center>is a <span style={{fontWeight: 'bold'}}>creative</span></H1>
                            </Fade>
                            <StyledButtonsContainer>
                            <Fade delay={200} ssrFadout>
                                <ButtonBlack>Services</ButtonBlack>
                            </Fade>
                            <Fade delay={400} ssrFadout>
                                <ButtonWhite>Testimonials</ButtonWhite>
                            </Fade>
                            </StyledButtonsContainer>
                        </StyledSloganContainer>
                    </StyledHeroForeground>
                </StyledBackgroundContainer>
            </Container>
        </Box3>
    )
}

const StyledBackgroundContainer = styled.div`
    height: 55rem;
    width: 100%;

    ${respondTo.xs`
        height: 65rem;
    `}

    ${respondTo.xl`
        height: 80rem;
    `}
`

const StyledHeroBackground = styled.div`
    background: ${colors.grey};
    border-radius: 36px;
    height: 52rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 1;

    ${respondTo.xs`
        height: 60rem;
    `}

    ${respondTo.xl`
        height: 75rem;
    `}
`

const StyledButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 10rem;
    justify-content: space-between;
    margin: 14rem auto 0;
    width: 15rem;

    ${respondTo.xs`
        height: 12rem;
        margin: 15rem auto 0;
        width: 25rem;
    `}

    ${respondTo.sm`
        flex-direction: row;
        height: auto;
        width: 42rem;
    `}

    ${respondTo.xl`
        margin: 25rem auto 0;
        width: 50rem;
    `}
`

const StyledHeroForeground = styled.div`
    background: ${colors.blueLight};
    height: 100%;
    left: 50%;
    margin: 0 auto;
    padding: 0 4rem;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 93%;
    z-index: 2;

    ${respondTo.xs`
        padding: 0 5rem;
        width: 95%;
    `}

    ${respondTo.sm`
        padding: 0 2rem;
    `}

    ${respondTo.md`
        padding: 0 5rem;
    `}
`

const StyledLogo = styled.img`
    height: 32rem;
    left: 50%;
    opacity: 0.05;
    position: absolute;
    top: 30%;
    transform: translate(-50%, -50%);
    width: 32rem;
    z-index: 3;

    ${respondTo.xs`
        height: 40rem;
        width: 40rem;
    `}

    ${respondTo.sm`
        height: 50rem;
        top: 40%;
        width: 50rem;
    `}

    ${respondTo.xl`
        top: 38%;
    `}
`

const StyledSloganContainer = styled.div`
    margin-top: 10rem;
    position: relative;
    z-index: 5;

    ${respondTo.xs`
        margin-top: 12rem;
    `}

    ${respondTo.sm`
        margin-top: 18rem;
    `}

    ${respondTo.xl`
        margin-top: 22rem;
    `}
`
