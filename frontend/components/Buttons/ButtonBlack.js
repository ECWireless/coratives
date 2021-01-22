import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows} from '../theme'

export const ButtonBlack = styled.button`
    background: ${colors.grey};
    border: 1px solid ${colors.white};
    border-radius: 36px;
    color: #FFF;
    font-size: 1.4rem;
    height: 4rem;
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

    ${respondTo.xs`
        font-size: 1.8rem;
        height: 5rem;
        width: 20rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        height: 6rem;
        width: 24rem;
    `}
`
