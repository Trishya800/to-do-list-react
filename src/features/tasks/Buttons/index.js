import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, setAllNotDone, selectAll, deleteAllTasks }) => (

    <Wrapper > {
        tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    disabled={tasks.every(({ done }) => !done)} 
                    >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    {selectAll ? "Odznacz" : "Zaznacz wszystkie"}
                </Button>
                <Button
                    onClick={setAllNotDone}
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {selectAll ? "" : "Odznacz wszystkie"}
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