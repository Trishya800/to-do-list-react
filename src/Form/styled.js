import styled from "styled-components";

export const FormContent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const FormInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    color: teal;
    outline-color: ${({ theme }) => theme.colors.primaryColor};
    outline-width: thin;
`;

export const FormButton = styled.button`
    background: ${({ theme }) => theme.colors.buttonsColor};
    color: white;
    padding: 10px;
    border: none;

    &:hover {
        background: ${({ theme }) => theme.colors.buttonsColorHover};
        transform: scale(1.05);
        transition: 0.5s;
    }

    &:active {
        background: ${({ theme }) => theme.colors.buttonsColorActive};
        transform: scale(1.01);
        transition: 0.5s;
    }
`;