import { Wrapper } from "../../Button";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../Button";

import {
    selectHideDone,
    toggleHideDone,
    setAllDone,
    setAllNotDone,
    deleteAllTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectIsEveryTaskNotDone
} from "../../tasksSlice";

export const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isEveryTaskNotDone = useSelector(selectIsEveryTaskNotDone);
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
