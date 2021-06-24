import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, selectAll, deleteAllTasks }) => (

    <Wrapper > {
        tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    disabled={tasks.every(({ done }) => !done)} >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    {selectAll ? "" : "Zaznacz wszystkie"}
                </Button>

                <Button
                    onClick={deleteAllTasks}
                >
                    Usuń wszystkie
                </Button>
            </>
        )}
    </Wrapper>

);

export default Buttons;