import styled, { css } from 'styled-components'
import respondTo from '../../../Breakpoints'
import { colors, shadows } from '../../../theme'

export const StyledSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
`

// export const StyledSelectedImage = styled.img`
//     border-radius: 36px;
//     box-shadow: ${shadows.buttonHover};
//     height: 30rem;
//     margin: 0 auto;
//     width: 30rem;

//     ${respondTo.xs`
//         height: 40rem;
//         width: 40rem;
//     `}

//     ${respondTo.sm`
//         height: 50rem;
//         width: 50rem;
//     `}

//     ${respondTo.xl`
//         height: 75rem;
//         width: 75rem;
//     `}
// `

export const StyledSelectedImageContainer = styled.div`
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
`

export const StyledSelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 34rem;
    justify-content: space-between;
    margin-bottom: 4rem;

    ${respondTo.xs`
        height: 38rem;
        margin-bottom: 6rem;
    `}

    ${respondTo.sm`
        margin-bottom: 8rem;
    `}

    ${respondTo.lg`
        height: 55rem;
        margin-bottom: 0;
    `}

    ${respondTo.xl`
        height: 68rem;
    `}
`

export const StyledSelectionImage = styled.img`
    border: 4px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.buttonHover};
    height: 6rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 6rem;

    ${respondTo.xs`
        height: 8rem;
        margin-left: 3rem;
        margin-right: 2rem;
        width: 8rem;
    `}

    ${respondTo.lg`
        height: 10rem;
        margin-left: 5rem;
        margin-right: 4rem;
        width: 10rem;
    `}
`

export const StyledSelectionItem = styled.div`
    align-items: center;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 36px;
    box-shadow: ${shadows.card};
    display: flex;
    height: 10rem;
    transition: all .3s ease;
    width: 30rem;

    &:hover {
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.yellow};

        ${props => props.active && css`
            border-left: 10px solid ${colors.yellow};
        `}
    }

    &:active,
    &:focus {
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.yellow};
        border-left: 10px solid ${colors.yellow};
    }

    ${respondTo.xs`
        height: 11rem;
        width: 40rem;
    `}

    ${respondTo.lg`
        height: 15rem;
        width: 50rem;
    `}

    ${respondTo.xl`
        height: 20rem;
        width: 65rem;
    `}

    ${props => props.active && css`
        cursor: pointer;
        box-shadow: ${shadows.buttonHover};
        border: 2px solid ${colors.yellow};
        border-left: 10px solid ${colors.yellow};
    `}
`

export const StyledTestimonialContainer = styled.div`
    background: ${colors.white};
    border: 2px solid ${colors.yellow};
    border-radius: 36px;
    margin: 0 auto;
    padding: 3rem;
    position: relative;
    width: 28rem;

    ${respondTo.xs`
        padding: 3rem;
        width: 38rem;
    `}

    ${respondTo.sm`
        padding: 4rem;
        width: 60rem;
    `}

    ${respondTo.xl`
        width: 90rem;
    `}
`
