import styled from "styled-components";

export const SectionContent = styled.section`
    display: grid;
    margin: 10px;
     box-shadow: 0 0 5px hsl(0, 0%, 86%);
    background-color: white;
`;

export const SectionHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    border-bottom: 3px solid rgb(241 240 242);

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionBody = styled.div`
    background-color: white;
`;

export const SectionTitle = styled.h2`
    margin-left: 20px;

    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
`;