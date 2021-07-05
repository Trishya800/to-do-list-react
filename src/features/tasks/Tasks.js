import { useState } from "react";
import Form from "../../features/tasks/Form";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../features/tasks/useTasks";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [selectAll, setSelectAll] = useState(false);
  const toggleSelectAll = () => {
    setSelectAll(selectAll => !selectAll);
  };


  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    setAllNotDone,
    addNewTask,
    deleteAllTasks,
  } = useTasks();

  return (
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              selectAll={selectAll}
              toggleSelectAll={toggleSelectAll}
              setAllDone={setAllDone}
              setAllNotDone={setAllNotDone}
              deleteAllTasks={deleteAllTasks}
            />
          }
        />
      </Container>
  );
};

export default Tasks;