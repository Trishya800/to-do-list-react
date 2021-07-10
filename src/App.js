import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import { TasksPage } from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import { AuthorPage } from "./features/tasks/authorPage";

export const App = () => {
    return (
        <HashRouter basename="/to-do-list-react">
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>
                    </li>
                    <li>
                        <NavLink to="/autor">O autorze</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/zadania/:id">
                        <TaskPage />
                    </Route>
                    <Route path="/zadania">
                        <TasksPage />
                    </Route>
                    <Route path="/autor">
                        <AuthorPage />
                    </Route>
                    <Route path="/">
                        <Redirect to="/zadania" />
                    </Route>
                </Switch>
            </nav>
        </HashRouter>
    )
};
