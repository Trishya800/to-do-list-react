import styled from "styled-components";

export const FormContent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    margin: 20px;

    @media (max-width: 610px) {
        grid-template-columns: 1fr;
    }
`;

export const FormInput = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    color: hsl(0, 0%, 60%);
    outline-color: rgb(65, 65, 65);
    outline-width: thin;
`;

export const FormButton = styled.button`
    background: hsl(180, 100%, 25%);
    color: white;
    padding: 10px;
    border: none;

    &:hover {
        background: hsl(180, 100%, 30%);
        transform: scale(1.05);
        transition: 0.5s;
    }

    &:active {
        background: hsl(180, 100%, 50%);
        transform: scale(1.01);
        transition: 0.5s;
    }
`;