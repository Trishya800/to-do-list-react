import { Wrapper, Header, SectionBody, Title } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => {
    return (
        <Wrapper>
            <Header>
                <Title>{title}</Title>
                {extraHeaderContent}
            </Header>

            <SectionBody>
                {body}
            </SectionBody>
        </Wrapper>
    );
};