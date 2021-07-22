import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    background-color: ${({ theme }) => theme.colors.teal};
    margin: auto;
    padding: 30px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Item = styled.li`
    margin-right: 20px;
    color: white;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
    color: white;
    text-decoration: none;

    &.${activeClassName} {
        font-weight: 900;
        transform: scale(1.05);
}
`;