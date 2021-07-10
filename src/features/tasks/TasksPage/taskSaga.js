import { call, put, takeLatest, takeEvery, select } from "@redux-saga/core/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import {getExampleTasks} from "../TasksPage/getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage"

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
const tasks = yield select(selectTasks);
yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}