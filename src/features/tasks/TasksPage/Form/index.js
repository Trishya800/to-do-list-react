import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FormWrapper, FormButton } from "./styled";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
        if (!contentTrimmed) {
            return;
        }

        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("")
        inputRef.current.focus();
    }
    return (
        <FormWrapper
            onSubmit={onFormSubmit}
        >
            <Input
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