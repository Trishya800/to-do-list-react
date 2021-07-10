import styled from "styled-components";

export const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border: none;
    transition: 0.5s filter;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.01);
    }

    &:active {
        filter: brightness(120%);
        transform: scale(1.01);
    }
`;