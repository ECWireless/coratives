import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Components
import { Container, Flex } from '../components/Containers'
import { colors, shadows } from '../components/theme'

export default function Header() {
    const router = useRouter()

    return (
        <StyledHeader>
            <Container style={{ height: '100%' }}>
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

const StyledHeader = styled.header`
    background: ${colors.blue};
    height: 10rem;
    z-index: 100;
`

const StyledLogo = styled.img`
    height: 4rem;
    width: 20rem;

    &:hover {
        cursor: pointer;
    }
`

const StyledNav = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 75rem;
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
`

const StyledNavButtonActive = styled.button`
    color: #292F33;
    background: #FFF;
    border: none;
    border-radius: 36px;
    box-shadow: ${shadows.button};
    font-size: 1.8rem;
    height: 3.5rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    width: 19rem;
    z-index: 102;

    &:hover {
        border: 1px solid ${colors.green};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }
`

const StyledLine = styled.div`
    background: #292F33;
    height: 8px;
    left: 45.5rem;
    position: absolute;
    top: 4.6rem;
    width: 100vw;
    z-index: 101;
`
