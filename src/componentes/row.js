import React from "react";

const Row = ({ task, checkTask }) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type={"checkbox"}
          checked={task.done} // Muestra el valor por defecto.
          onChange={() => checkTask(task)}
        ></input>
      </td>
    </tr>
  );
};

export default Row;
