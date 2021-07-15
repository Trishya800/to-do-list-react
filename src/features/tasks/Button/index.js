import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        justify-content: center;
        margin-right: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.teal};
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 5px;
    }

    &:hover {
        filter: brightness(120%);
        transition: color 0.5s;
        transform: scale(1.05);
    }
    
    &:disabled {
        color: ${({ theme }) => theme.colors.alto};
        cursor: none;
        filter: brightness(100%);
        transform: none;
    }
`;