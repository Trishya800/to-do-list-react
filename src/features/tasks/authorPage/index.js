import Container from "../../../common/Container";
import Section from "../../../common/Section";
import Header from "../../../common/Header";

export const AuthorPage = () => {
    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Patrycja Leśniak"
                body={
                    <>
                        Witaj świecie. To ja - <b>Patrycja</b>. Niepoprawna optymistka, marzycielka, miłośniczka kotów, psów. Zapalona czytelniczka literatury wszelakiej z upodobaniem do ksiąkowych cegieł. Wieczna poszukiwaczka <b>swojego</b> miejsca na ziemi.<br />
                        A jako, że ciągle nie wiem, <b>kim chcę zostać gdy dorosnę</b> pomyślałam, że chcę spróbować w programowanie. No więc jestemi postaram się wyciągnąć z tego kursu ile się da. Dla przyjemności uczę się hiszpańskiego, gram na pianinie, gotuję, strzelam fotki i przeprojektowuję głównie w głowie i na papierze ; mój dom aby pomieścił wszystkie książki jakie chcę przeczytać.
                    </>
                }
            />
        </Container>
    )
}