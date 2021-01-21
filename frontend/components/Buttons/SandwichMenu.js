import styled, { css } from 'styled-components'
import { colors } from '../theme'
import respondTo from '../Breakpoints'
import { Box3 } from '../Boxes'
import { Flex } from '../Containers'

const SandwichMenu = ({ setSidebar }) => {
    return (
        <ButtonContainer onClick={() => setSidebar(true)}>
            <Flex direction={'column'} justify={'space-between'}>
                <Box3>
                    <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine id="sandwhich-line" width={35} color={'white'} />
                </Box3>
            </Flex>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width: 50px;
    height: 50px;
    background: ${colors.blue};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
    transition: all .5s ease;
    z-index: 105;

    &:hover,
    &:focus,
    &:active {
		background: ${colors.grey};
        cursor: pointer;

        #sandwhich-line {
            background: ${colors.white};
        }
    }

    ${respondTo.xs`
        left: 4rem;
        width: 55px;
        height: 55px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
    `}

    ${respondTo.lg`
        display: none;
    `}
`

const ButtonMenuLine = styled.div`
    background: ${colors.grey};

    ${props => css`
        width: ${props.width * .8}px;
        height: 2px;
        margin: 0 auto;

        ${respondTo.xs`
            width: ${props.width * .9}px;
            height: 2px;
            margin: 0 auto;
        `}

        ${respondTo.sm`
            width: ${props.width}px;
            height: 3px;
            margin: 0 auto;
        `}
    `};
`

export default SandwichMenu
