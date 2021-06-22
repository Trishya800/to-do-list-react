import { SectionContent, SectionHeader, SectionBody, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContent>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {extraHeaderContent}
        </SectionHeader>

        <SectionBody>
            {body}
        </SectionBody>
    </SectionContent>
);

export default Section;