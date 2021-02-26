import styled, { css } from 'styled-components'
import respondTo from '../../../Breakpoints'
import { colors } from '../../../theme'

export const StyledContactForm = styled.form`
    box-sizing: border-box;
    background: ${colors.grey};
    border-radius: 36px;
    margin: 0 auto;
    padding: 5rem 4rem;
    width: 30rem;

    ${respondTo.xs`
        width: 40rem;
    `}

    ${respondTo.sm`
        padding: 5rem 6rem;
        width: 60rem;
    `}

    ${respondTo.md`
        width: 80rem;
    `}

    ${respondTo.xl`
        width: 110rem;
    `}
`

export const StyledInput = styled.input`
    background: ${colors.grey};
    border: none;
    border-bottom: 2px solid ${colors.white};
    color: ${colors.white};
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: regular;
    height: 4rem;
    outline: none;
    padding: 1rem 0;
    transition: all .3s ease;
    width: 22rem;

    &:hover {
        border-bottom: 2px solid ${colors.yellow};
    }

    &:active,
    &:focus {
        border-bottom: 2px solid ${colors.yellow};
    }

    ${respondTo.xs`
        width: 32rem;
    `}

    ${respondTo.sm`
        font-size: 1.5rem;
        width: 22rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
        line-height: 20px;
        width: 32rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 25px;
        width: 47rem;
    `}

    ${props => props.full && css`
        width: 100%;

        ${respondTo.xs`
            width: 100%;
        `}

        ${respondTo.sm`
            width: 100%;
        `}

        ${respondTo.xl`
            width: 100%;
        `}
    `}
`

export const StyledLabel = styled.label`
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: regular;
    margin: 0;
    padding: 0;

    ${respondTo.sm`
        font-size: 1.5rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
        line-height: 20px;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 25px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.bold && css`
        font-weight: bold;
    `}

    ${props => css`
        color: ${props.color}
    `}
`
