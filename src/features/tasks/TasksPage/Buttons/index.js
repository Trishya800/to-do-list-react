import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    setAllNotDone,
    deleteAllTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectIsEveryTaskNotDone,
    fetchExampleTasks,
} from "../../TasksPage/tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isEveryTaskNotDone = useSelector(selectIsEveryTaskNotDone)
    const { hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Wrapper >
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Zaznacz wszystkie
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllNotDone())}
                        disabled={isEveryTaskNotDone}
                    >
                        Odznacz wszystkie
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