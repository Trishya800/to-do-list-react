import { useState, useRef } from "react";
import { FormContent, FormInput, FormButton } from "./styled";

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
        setNewTaskContent("");
    }
    return (
        <FormContent
            onSubmit={onFormSubmit}
        >
            <FormInput
                ref={inputRef}
                value={newTaskContent}
                required
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie
            </FormButton>
        </FormContent>
    )
};

export default Form;