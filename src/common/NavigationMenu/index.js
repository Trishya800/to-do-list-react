import { List, StyledNavLink, Item } from "./styled";



export const NavigationMenu = () => {
    return (
        <>
        <List>
            <Item>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </Item>
        </List>
        </>
    )
};
