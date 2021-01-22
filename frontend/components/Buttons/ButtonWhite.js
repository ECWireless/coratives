import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { colors, shadows} from '../theme'

export const ButtonWhite = styled.button`
    color: #292F33;
    background: #FFF;
    border: none;
    border-radius: 36px;
    box-shadow: ${shadows.button};
    font-size: 1.8rem;
    height: 5rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    width: 20rem;
    z-index: 102;

    &:hover {
        border: 1px solid ${colors.green};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    ${respondTo.xl`
        font-size: 2rem;
        height: 4.5rem;
        width: 22rem;
    `}
`
