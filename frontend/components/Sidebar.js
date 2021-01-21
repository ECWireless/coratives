import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from './theme'
import { Flex } from './Containers'
import { P2 } from './Typography'

const Sidebar = ({ sidebar, setSidebar }) => {
    const router = useRouter()
    
    return (
        <SidebarContainer open={sidebar}>
            <SidebarTop>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-around'}>
                    <Link href="/">
                        <StyledLogo onClick={() => setSidebar(false)} src="/static/coratives_logo.png" alt="Coratives Logo"/>
                    </Link>
                    <CloseContainer onClick={() => setSidebar(false)}>
                        <p style={{padding: 0, margin: 0}}>&times;</p>
                    </CloseContainer>
                </Flex>
            </SidebarTop>
            <Link href="/about">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/about' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>About</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/blog">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/blog' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Blog</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/contact">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/contact' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Contact</P2>
                    </Flex>
                </SidebarOption>
            </Link>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 25rem;
	height: 100%;
	background: ${colors.white};
	z-index: 1000;
	box-shadow: ${shadows.sidebar};
	transform: translateX(-30rem);
    transition: all .5s ease;

    ${respondTo.md`
        width: 30rem;
    `}

    ${respondTo.lg`
        display: none;
    `}

	${props => props.open && css`
		transform: translateX(0rem);
        box-shadow: none;
    `}
`

const SidebarTop = styled.div`
	height: 8rem;
	width: 100%;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    
    ${respondTo.xl`
	    height: 10rem;
    `}
`

const CloseContainer = styled.div`
    width: 50px;
    height: 50px;
    background: ${colors.white};
    border: 2px solid ${colors.grey};
    border-radius: 50%;
    position: relative;
    transition: all .5s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	
	p {
        line-height: 0;
		color: ${colors.grey};
		font-size: 6rem;
        font-weight: 200;

        ${respondTo.sm`
            top: 38%;
        `}

        ${respondTo.md`
            top: 35%;
        `}
	}

    ${respondTo.xs`
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        width: 50px;
        height: 50px;
    `}

    ${respondTo.md`
        p {
            font-size: 6rem;
            margin-bottom: 12px;
        }
    `}

    &:hover,
    &:focus,
    &:active {
		background: ${colors.grey};
        cursor: pointer;

        p {
            color: ${colors.white};
        }
    }
`

const SidebarOption = styled.div`
    height: 6rem;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    border-right: 5px solid transparent;
    transition: all .3s ease;

    ${respondTo.md`
	    height: 7rem;
    `}

    ${respondTo.xl`
	    height: 7.5rem;
    `}
    
    &:hover {
        cursor: pointer;
        background: #EFEFEF;
    }

    ${props => props.active && css`
        border-right: 5px solid ${colors.green};
        background: #EFEFEF;
    `}
`

const StyledLogo = styled.img`
    height: 2.5rem;
    width: 13rem;

    &:hover {
        cursor: pointer;
    }

    ${respondTo.sm`
        height: 2.5rem;
        width: 13rem;
    `}

    ${respondTo.md`
        height: 3rem;
        width: 16rem;
    `}
`
