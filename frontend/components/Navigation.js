import React from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors, shadows } from './theme'
import respondTo from '../components/Breakpoints'

// Components
import { Container, Flex } from './Containers'
import { SandwichMenu } from './Buttons'

export default function Navigation({ setSidebar }) {
    const [shadow, setShadow] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset === 0) {
                setShadow(false)
            } else {
                setShadow(true)
            }
        });
    }, [])
    

      
    return (
        <StyledHeader shadow={shadow}>
            <StyledMenuContainer>
                <SandwichMenu setSidebar={setSidebar} />
            </StyledMenuContainer>
            <Container style={{ height: '100%', zIndex: '100' }}>
                <Flex style={{ height: '100%' }} align={'center'} justify={'space-between'}>
                    <Link href='/'>
                        <StyledLogo src="/static/coratives_logo.png" alt="Coratives Logo"/>
                    </Link>
                    <StyledNav>
                        <Link href='/'>
                            {router.pathname === '/'
                                ? <StyledNavButtonActive>Home</StyledNavButtonActive>
                                : <StyledNavButton>Home</StyledNavButton>
                            }
                        </Link>
                        <StyledLine />
                        <Link href='/about'>
                            {router.pathname === '/about'
                                ? <StyledNavButtonActive>About</StyledNavButtonActive>
                                : <StyledNavButton>About</StyledNavButton>
                            }
                        </Link>
                        <Link href='/blog'>
                            {router.pathname === '/blog'
                                ? <StyledNavButtonActive>Blog</StyledNavButtonActive>
                                : <StyledNavButton>Blog</StyledNavButton>
                            }
                        </Link>
                        <Link href='/contact'>
                            {router.pathname === '/contact'
                                ? <StyledNavButtonActive>Contact</StyledNavButtonActive>
                                : <StyledNavButton>Contact</StyledNavButton>
                            }
                        </Link>
                    </StyledNav>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

const StyledMenuContainer = styled.div`
    left: 1.5rem;
    position: absolute;
    top: 1.5rem;
    z-index: 103;

    ${respondTo.xs`
        left: 2rem;
        top: 2rem;
    `}

    ${respondTo.lg`
        display: none;
    `}
`

const StyledHeader = styled.header`
    background: ${colors.blue};
    height: 8rem;
    overflow: hidden;
    left: 0;
    position: sticky;
    top: 0;
    transition: all .3s ease;
    z-index: 100;

    ${respondTo.xs`
        height: 10rem;
    `}

    ${respondTo.xl`
        height: 12rem;
    `}

    ${props => props.shadow && css`
        box-shadow: ${shadows.buttonHover};
    `}
`

const StyledLine = styled.div`
    background: #292F33;
    height: 8px;
    left: 45.5rem;
    position: absolute;
    top: 4.6rem;
    width: 100vw;
    z-index: 101;

    ${respondTo.xl`
        left: 90rem;
        top: 5.6rem;
    `}
`

const StyledLogo = styled.img`
    height: 3rem;
    width: 15rem;
    margin: 0 auto;

    &:hover {
        cursor: pointer;
    }

    ${respondTo.xs`
        height: 4rem;
        width: 20rem;
    `}

    ${respondTo.lg`
        margin: 0;
    `}

    ${respondTo.xl`
        height: 5rem;
        width: 24rem;
    `}
`

const StyledNav = styled.nav`
    align-items: center;
    display: none;
    justify-content: space-between;
    width: 75rem;

    ${respondTo.lg`
        display: flex;
        width: 75rem;
    `}

    ${respondTo.xl`
        width: 95rem;
    `}
`

const StyledNavButton = styled.button`
    background: ${colors.grey};
    border: 1px solid ${colors.white};
    border-radius: 36px;
    color: #FFF;
    font-size: 1.8rem;
    height: 3rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    width: 18rem;
    z-index: 102;

    &:hover {
        border: 1px solid ${colors.yellow};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    ${respondTo.xl`
        font-size: 2rem;
        height: 4.5rem;
        width: 22rem;
    `}
`

const StyledNavButtonActive = styled.button`
    color: #292F33;
    background: #FFF;
    border: none;
    border-radius: 36px;
    box-shadow: ${shadows.button};
    font-size: 1.8rem;
    height: 3rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    width: 18rem;
    z-index: 102;

    &:hover {
        border: 1px solid ${colors.grey};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    ${respondTo.xl`
        font-size: 2rem;
        height: 4.5rem;
        width: 22rem;
    `}
`
