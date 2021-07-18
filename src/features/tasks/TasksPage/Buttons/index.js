import { Wrapper } from "../../Button";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../Button";

import {
    selectHideDone,
    toggleHideDone,
    setAllDone,
    setAllUndone,
    deleteAllTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectIsEveryTaskUndone
} from "../../tasksSlice";

export const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isEveryTaskUndone = useSelector(selectIsEveryTaskUndone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper >
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
                        onClick={() => dispatch(setAllUndone())}
                        disabled={isEveryTaskUndone}
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
