import styled from "styled-components";

export const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    text-decoration: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.teal};
    border: 1px solid ${({ theme }) => theme.colors.teal};

    line-height: 15px;
    padding: 10px;
    display: inline-block;
    font-weight: 600;
    overflow: hidden;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.colors.teal};
        color: ${({ theme }) => theme.colors.white};
        border-bottom: 1px solid ${({ theme }) => theme.colors.teal};
    }

    &:before {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 40px;
        display: block;
        position: absolute;
        top: 0;
        left: -70px;
        transform: skewX(-45deg) translateX(0px);
        transition: none;
    }

    &:hover:before {
        transform: skewX(-45deg) translateX(800px);
        transition: all 0.6s ease-in;
    }

`;