import styled from "styled-components";

export const Title = styled.h1`
    margin: 10px;
    padding-top: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        text-align: center;
    }
`;