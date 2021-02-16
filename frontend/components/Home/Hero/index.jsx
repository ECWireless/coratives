import { Fade } from 'react-reveal'

// Components
import {
    StyledBackgroundContainer,
    StyledHeroBackground,
    StyledButtonsContainer,
    StyledHeroForeground,
    StyledLogo,
    StyledSloganContainer,
} from './components'
import { Box3 } from '../../Boxes'
import { ButtonBlack, ButtonWhite } from '../../Buttons'
import { Container } from '../../Containers'
import { H1 } from '../../Typography'

export function Hero({
    heroHeadingLine1Light,
    heroHeadingLine1Bold,
    heroHeadingLine2Light,
    heroHeadingLine2Bold,
}) {
    return (
        <Box3 paddingTop={25}>
            <Container>
                <StyledBackgroundContainer>
                    <StyledHeroBackground />
                    <StyledHeroForeground>
                        <StyledLogo src="/static/c.png" alt="C Logo" />
                        <StyledSloganContainer>
                            <Fade bottom ssrFadout>
                                <H1 center>{heroHeadingLine1Light} <span style={{fontWeight: 'bold'}}>{heroHeadingLine1Bold}</span></H1>
                            </Fade>
                            <Fade delay={200} bottom ssrFadout>
                                <H1 center>{heroHeadingLine2Light} <span style={{fontWeight: 'bold'}}>{heroHeadingLine2Bold}</span></H1>
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


