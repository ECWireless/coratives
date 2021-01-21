import styled from 'styled-components'

// Components
import { Container, Flex } from '../components/Containers'

export default function Header() {
    return (
        <StyledHeader>
            <Container style={{ height: '100%' }}>
                <Flex style={{ height: '100%' }} align={'center'} justify={'space-between'}>
                    <StyledLogo src="/static/coratives_logo.png" alt="Coratives Logo"/>
                    <StyledNav>
                        <StyledNavButtonActive>Home</StyledNavButtonActive>
                        <StyledLine />
                        <StyledNavButton>About</StyledNavButton>
                        <StyledNavButton>Blog</StyledNavButton>
                        <StyledNavButton>Contact</StyledNavButton>
                    </StyledNav>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    height: 10rem;
    background: #CAE6EE;
`

const StyledLogo = styled.img`
    width: 20rem;
    height: 4rem;

    &:hover {
        cursor: pointer;
    }
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75rem;
`

const StyledNavButton = styled.button`
    background: #292F33;
    border: 1px solid #F0FAFF;
    border-radius: 36px;
    width: 18rem;
    height: 3rem;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`

const StyledNavButtonActive = styled.button`
    background: #FFF;
    border: none;
    border-radius: 36px;
    width: 19rem;
    height: 3.5rem;
    color: #292F33;
    font-size: 1.8rem;
    text-transform: uppercase;
    box-shadow: 0px 8px 20px rgba(41, 47, 51, 0.3);
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`

const StyledLine = styled.div`
    width: 100vw;
    height: 8px;
    background: #292F33;
    position: absolute;
    left: 45rem;
    top: 4.5rem;
`
