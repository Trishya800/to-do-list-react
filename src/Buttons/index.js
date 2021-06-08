import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div className="buttons" > {
        tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => !done)} >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className="buttons__button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)} >
                    {hideDone ? "Odznacz" : "Zaznacz"} wszystkie
                </button>

                <button class="buttons__button">
                    Usuń wszystkie
                </button>
            </>
        )}
    </div>

);

export default Buttons;