import styled, { css } from "styled-components";

export const OptionalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    @media (max-width: 790px){
        justify-content: center;
        margin-right: 0;
    }

    @media (max-width: 610px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    color: teal;
    border: none;
    transition: color 0.5s;
    background-color: transparent;

    @media (max-width: 790px){
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    ${({ disabled }) => disabled && css`
        color: rgb(203, 203, 203);
    `}
`;