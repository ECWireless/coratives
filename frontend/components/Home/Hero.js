import styled from 'styled-components'
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
                            <H1 center>Behind every <span style={{fontWeight: 'bold'}}>business idea</span></H1>
                            <H1 center>is a <span style={{fontWeight: 'bold'}}>creative</span></H1>
                            <StyledButtonsContainer>
                                <ButtonBlack>Services</ButtonBlack>
                                <ButtonWhite>Testimonials</ButtonWhite>
                            </StyledButtonsContainer>
                        </StyledSloganContainer>
                    </StyledHeroForeground>
                </StyledBackgroundContainer>
            </Container>
        </Box3>
    )
}

const StyledBackgroundContainer = styled.div`
    height: 65rem;
    width: 100%;
`

const StyledHeroBackground = styled.div`
    background: ${colors.grey};
    border-radius: 36px;
    height: 60rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    z-index: 1;
`

const StyledHeroForeground = styled.div`
    background: ${colors.blueLight};
    height: 100%;
    width: 95%;
    margin: 0 auto;
    padding: 0 5rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
`

const StyledSloganContainer = styled.div`
    margin-top: 18rem;
    z-index: 5;
    position: relative;
`

const StyledLogo = styled.img`
    position: absolute;
    opacity: 0.05;
    top: 40%;
    transform: translate(-50%, -50%);
    left: 50%;
    height: 50rem;
    width: 50rem;
    z-index: 3;
`

const StyledButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20rem auto 0;
    width: 42rem;
`
