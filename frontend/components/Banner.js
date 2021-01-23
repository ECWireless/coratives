import { Fade } from 'react-reveal'
import styled from 'styled-components'
import respondTo from '../components/Breakpoints'
import { colors } from '../components/theme'

// Components
import { Box3 } from '../components/Boxes'
import { H1, P1 } from '../components/Typography'

export default function Banner({
    heading,
    subheading,
    textColor,
    line1Color,
    line2Color,
}) {
    return (
        <Box3>
            <StyledBannerContainer>
                <StyledLeftContainer>
                    <Fade ssrFadeout>
                        <StyledLineLeft style={{ background: line1Color }} />
                    </Fade>
                </StyledLeftContainer>
                <StyledMidContainer>
                    <Box3 marginBottom={25}>
                        <Fade bottom ssrFadeout>
                            <H1 color={textColor} uppercase>{heading}</H1>
                        </Fade>
                    </Box3>
                    <Fade delay={200} bottom ssrFadeout>
                        <P1 color={textColor}>{subheading}</P1>
                    </Fade>
                </StyledMidContainer>
                <StyledRightContainer>
                    <Fade ssrFadeout>
                        <StyledLineRight style={{ background: line2Color }} />
                    </Fade>
                </StyledRightContainer>
            </StyledBannerContainer>
        </Box3>
    )
}

const StyledBannerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 30rem 1fr;

    ${respondTo.xs`
        grid-template-columns: 1fr 35rem 1fr;
    `}

    ${respondTo.sm`
        grid-template-columns: 1fr 55rem 1fr;
    `}

    ${respondTo.md`
        grid-template-columns: 1fr 60rem 1fr;
    `}

    ${respondTo.lg`
        grid-template-columns: 1fr 70rem 1fr;
    `}

    ${respondTo.xl`
        grid-template-columns: 1fr 100rem 1fr;
    `}
`

const StyledLeftContainer = styled.div`
    grid-column: 1 / 3;

    ${respondTo.xs`
        grid-column: 1 / 2;
    `}
`

const StyledMidContainer = styled.div`
    grid-column: 2 / 3;
    text-align: center;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;

    ${respondTo.xs`
        height: auto;
        padding-top: 0;
    `}
`

const StyledRightContainer = styled.div`
    grid-column: 2 / 4;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;

    ${respondTo.xs`
        grid-column: 3 / 4;
    `}
`

const StyledLineLeft = styled.div`
    width: 100%;
    height: 5px;
    background: ${colors.grey};

    ${respondTo.sm`
        height: 8px;
    `}
`

const StyledLineRight = styled.div`
    width: 100%;
    height: 5px;
    background: ${colors.white};

    ${respondTo.sm`
        height: 8px;
    `}
`
