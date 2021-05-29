import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className="buttons__button"
          disabled={tasks.every(({ done }) => !done)}>
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>

        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
      </button>

        <button className="buttons__button"
          disabled={tasks.every(task => !task.done)}
        >
          Odznacz wszystkie
      </button>

        <button class="buttons__button">
          Usuń wszystkie
      </button>
      </>
    )}
  </div >

);

export default Buttons;

