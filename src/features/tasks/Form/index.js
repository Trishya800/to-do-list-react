import { useState, useRef } from "react";
import { FormWrapper, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
        if (!contentTrimmed) {
            return;
        }
        addNewTask(contentTrimmed);
        setNewTaskContent("")
        inputRef.current.focus();
    }
    return (
        <FormWrapper
            onSubmit={onFormSubmit}
        >
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                required
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>
                Dodaj zadanie
            </FormButton>
        </FormWrapper>
    )
};

export default Form;