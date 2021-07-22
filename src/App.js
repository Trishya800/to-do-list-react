
import { HashRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import { TasksPage } from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import { AuthorPage } from "./features/AuthorPage";
import { Navigation } from "./common/Navigation";

export const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="./features/AuthorPage">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    );
};