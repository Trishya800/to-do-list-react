import { Title } from "./styled.js";

const Header = ({ title }) => (
    <Title>
        <h1 className="header">{title}</h1>
    </Title>
);

export default Header;