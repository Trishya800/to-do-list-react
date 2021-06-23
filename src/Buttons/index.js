import {OptionalButtons, Button} from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, selectAll, toggleSelectAll, deleteAllTasks }) => (

    <OptionalButtons > {
        tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    disabled={tasks.every(({ done }) => !done)} >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    onClick={toggleSelectAll}
                    disabled={tasks.every(({ done }) => done)} >
                    {selectAll ? "Odznacz" : "Zaznacz"} wszystkie
                </Button>

                <Button
                    onClick={deleteAllTasks}
                >
                    Usuń wszystkie
                </Button>
            </>
        )}
    </OptionalButtons>

);

export default Buttons;