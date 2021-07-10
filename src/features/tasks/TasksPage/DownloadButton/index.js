import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../TasksPage/tasksSlice";
import { Button } from "../../Button";


export const DownloadButton = () => {
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();
    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};