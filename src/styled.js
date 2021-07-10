/* eslint-disable no-undef */
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName
}))`
&.${activeClassName} {
    font-weight: 900;
}
`;