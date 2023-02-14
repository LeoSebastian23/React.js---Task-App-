import React from "react";

const Row = ({ task, checkTask }) => {
  return (
    <div className="card flex flex-col rounded-lg shadow-md w-full m-6 p-1 sm:w-50 items-center">
      <div class="text-dark p-2 ">
          {task.name}
      </div>
        <input
          type={"checkbox"}
          checked={task.done} // Muestra el valor por defecto.
          onChange={() => checkTask(task)}
        />
    </div>
  );
};

export default Row;
