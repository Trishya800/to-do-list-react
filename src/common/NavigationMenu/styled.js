import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    background-color: ${({ theme }) => theme.colors.teal};
    margin: auto;
    padding: 20px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Item = styled.li`
  margin-right: 10px;
  color: white;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
    color: white;
    text-decoration: none;

&.${activeClassName} {
    font-weight: 900;
}
`;