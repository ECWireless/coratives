import styled from 'styled-components'
import { colors } from './theme'

// Components
import { Box3 } from './Boxes'
import { Container } from './Containers'
import { CustomLink } from './Links'
import { H3, P5 } from './Typography'

export default function Footer() {
    return (
        <StyledFooterBackground>
            <StyledLine />
            {/* <StyledCirclesContainer>
                <StyledBlackCircle />
                <StyledWhiteCircle />
            </StyledCirclesContainer> */}
            <Container>
                <Box3 marginTop={75}>
                    <H3 bold center uppercase>CORATIVES ™</H3>
                </Box3>
                <Box3 marginTop={25}>
                    <StyledSvgContainer>
                        <CustomLink>
                            <StyledSvg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>linkedin</title>
                                <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                                <path d="M2 12h6v18h-6v-18z"></path>
                                <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            </StyledSvg>
                        </CustomLink>
                        <CustomLink>
                            <StyledSvg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>instagram</title>
                                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                            </StyledSvg>
                        </CustomLink>
                        <CustomLink>
                            <StyledSvg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>twitter</title>
                                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                            </StyledSvg>
                        </CustomLink>
                    </StyledSvgContainer>
                </Box3>
                <Box3 marginTop={50}>
                    <CustomLink hover>
                        <P5 bold center>mflynn@coratives.com</P5>
                    </CustomLink>
                </Box3>
                <Box3 marginTop={25} paddingBottom={75}>
                    <P5 center uppercase>COPYRIGHT 2020. ALL RIGHTS RESERVED. NEW YORK.</P5>
                </Box3>
            </Container>
        </StyledFooterBackground>
    )
}

// const StyledBlackCircle = styled.div`
//     background: ${colors.grey};
//     border: 1px solid ${colors.white};
//     border-radius: 50%;
//     height: 5rem;
//     width: 5rem;
// `

// const StyledCirclesContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: -2.5rem;
//     left: 50%;
//     transform: translateX(-50%);
// `

const StyledFooterBackground = styled.footer`
    background: ${colors.blue};
    position: relative;
    z-index: 99;
`

const StyledLine = styled.div`
    background: #292F33;
    height: 8px;
    width: 100vw;
    z-index: 101;
`

const StyledSvg = styled.svg`
    fill: ${colors.grey};
    height: 3.2rem;
    transition: all .3s ease;
    width: 3.2rem;

    &:hover {
        fill: ${colors.yellow};
    }
`

const StyledSvgContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 15rem;
`

// const StyledWhiteCircle = styled.div`
//     background: ${colors.white};
//     border-radius: 50%;
//     box-shadow: ${shadows.buttonHover};
//     height: 5.5rem;
//     width: 5.5rem;
// `
