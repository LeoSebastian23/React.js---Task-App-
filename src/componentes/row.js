import React from "react";

const Row = ({ task, checkTask }) => {
  return (
      <div className="bg-amber-400 rounded-lg shadow-lg m-2 p-2 text-center ">
        <div class="text-slate-900 border-b-2 border-b-stone-900 p-1"> {task.name} </div>{" "}
        <input
          type={"checkbox"}
          checked={task.done} // Muestra el valor por defecto.
          onChange={() => checkTask(task)}
          className='form-check-input'
        />{" "}
      </div>
  );
};

export default Row;
