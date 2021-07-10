import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    color: ${({ theme }) => theme.colors.teal};
    outline-color: ${({ theme }) => theme.colors.alto};
    outline-width: thin;
`;

export default Input;