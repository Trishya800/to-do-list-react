import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, setAllNotDone, deleteAllTasks } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone, done } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Wrapper > {
            tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                        disabled={tasks.every(({ done }) => !done)}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        {done ? "" : "Zaznacz wszystkie"}
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllNotDone())}
                        disabled={tasks.every(({ done }) => !done)}
                    >
                        {done ? "" : "Odznacz wszystkie"}
                    </Button>

                    <Button
                        onClick={() => dispatch(deleteAllTasks())}
                    >
                        Usuń wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;