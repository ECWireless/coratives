import styled, { css } from 'styled-components'
import respondTo from '../../../Breakpoints'
import { colors, shadows } from '../../../theme'

export const StyledCardBlack = styled.div`
    background: ${colors.grey};
    border: 2px solid ${colors.grey};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    padding: 4rem 2rem;
    height: 45rem;
    transition: all .3s ease;
    width: 100%;

    &:hover {
        border: 2px solid ${colors.yellow};
        box-shadow: ${shadows.buttonHover};
    }

    ${respondTo.xs`
        height: 50rem;
        padding: 5rem 2rem;
        width: 40rem;
    `}

    ${respondTo.md`
        height: 60rem;
        width: 40rem;
    `}

    ${respondTo.xl`
        height: 85rem;
        padding: 6rem 4rem;
        width: 65rem;
    `}
`

export const StyledCardContainer = styled.div`
    align-content: center;
    border: 2px solid transparent;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${respondTo.xs`
        width: 40rem;
    `}

    ${respondTo.md`
        flex-direction: row;
        width: 90rem;
    `}
    
    ${respondTo.xl`
        width: 140rem;
    `}
`

export const StyledCardWhite = styled.div`
    background: ${colors.white};
    border: 2px solid ${colors.white};
    box-shadow: ${shadows.card};
    border-radius: 36px;
    height: 45rem;
    margin-bottom: 3rem;
    padding: 5rem 2rem;
    transition: all .3s ease;
    width: 100%;

    &:hover {
        border: 2px solid ${colors.grey};
        box-shadow: ${shadows.buttonHover};
    }

    ${respondTo.xs`
        height: 50rem;
        width: 40rem;
    `}

    ${respondTo.sm`
        margin-bottom: 5rem;
    `}

    ${respondTo.md`
        height: 60rem;
        width: 40rem;
        margin-bottom: 0;
    `}

    ${respondTo.xl`
        height: 85rem;
        padding: 6rem 4rem;
        width: 65rem;
    `}
`

export const StyledIcon = styled.svg`
    fill: ${colors.white};
    height: 50%;
    width: 50%;
`

export const StyledIconContainer = styled.div`
    border-radius: 50%;
    align-items: center;
    display: flex;
    height: 8rem;
    margin: 0 auto;
    justify-content: center;
    width: 8rem;

    ${respondTo.xl`
        height: 12rem;
        width: 12rem;
    `}

    ${props => props.color && css`
        background: ${props.color};
    `}
`

export const StyledLine = styled.div`
    height: 3px;
    width: 2rem;

    ${respondTo.xl`
        height: 5px;
        width: 4rem;
    `}

    ${props => props.color && css`
        background: ${props.color}
    `}
`

export const StyedListContainer = styled.div`
    padding: 0 1rem;

    ${respondTo.xs`
        padding: 0 4rem;
    `}
`

export const StyledListIcon = styled.svg`
    height: 2rem;
    margin-right: 2rem;
    width: 2rem;

    ${respondTo.xs`
        height: 3rem;
        width: 3rem;
    `}

    ${props => props.color && css`
        fill: ${props.color};
    `}
`

export const StyledListIconContainer = styled.div`
    height: 2rem;
    margin-right: 2rem;
    width: 2rem;

    ${respondTo.xs`
        height: 3rem;
        width: 3rem;
    `}
`
