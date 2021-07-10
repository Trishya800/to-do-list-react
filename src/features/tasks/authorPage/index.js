import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Header from "../../../common/Header";

export const AuthorPage = () => {
    return (
        <Container>
            <Header title="o autorze" />
            <Section
                title="Patrycja Leśniak"
                body={
                    <>
                        <p>Witaj świecie. To ja - Patrycja Niepoprawna optymistka, marzycielka, miłośniczka kotów, psów.Zapalona czytelniczka literatury wszelakiej z upodobaniem do ksiąkowych cegieł. Wieczna poszukiwaczka <b>swojego</b> miejsca
                            na ziemi.
                        </p>
                    </>
                }
            />
        </Container>
    )
}