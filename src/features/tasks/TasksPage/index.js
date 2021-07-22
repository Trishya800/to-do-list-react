import { Form } from "../TasksPage/Form";
import { TaskList } from "./TaskList";
import { Buttons } from "../TasksPage/Buttons";
import { Section } from "../../../common/Section";
import { Header } from "../../../common/Header";
import { Search } from "./Search";
import { DownloadButton } from "./DownloadButton";
import { Wrapper } from "../Button";

export const TasksPage = () => {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Wrapper>
            <DownloadButton />
          </Wrapper>
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
};