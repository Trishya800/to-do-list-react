import styled, { css } from "styled-components"

export const OptionalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        justify-content: center;
        margin-right: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        flex-direction: column;
        margin-right: 0px;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.buttonsColor};
    border: none;
    transition: color 0.5s;
    background-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 5px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.buttonsColorHover};
    }

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.primaryColor};
    `}
`;