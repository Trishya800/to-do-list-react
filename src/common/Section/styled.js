import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    margin: 10px;
    box-shadow: 0 0 5px hsl(0, 0%, 86%);
    background-color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    border-bottom: 3px solid rgb(241 240 242);

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionBody = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    text-align: justify;
`;

export const Title = styled.h2`
    margin-left: 20px;

    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
`;