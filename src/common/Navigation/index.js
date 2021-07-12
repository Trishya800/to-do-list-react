import { List, StyledNavLink, Item } from "./styled";

export const Navigation = () => {
    return (
        <>
            <nav>
                <List>
                    <Item>
                        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to="/autor">O autorze</StyledNavLink>
                    </Item>
                </List>
            </nav>
        </>
    );
};
