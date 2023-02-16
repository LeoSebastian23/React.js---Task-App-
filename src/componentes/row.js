import React from "react";

const Row = ({ task, checkTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between m-1 rounded-lg">
        {task.name}
        <input
          type={"checkbox"}
          checked={task.done} // Muestra el valor por defecto.
          onChange={() => checkTask(task)}
          className='form-check-input'
        ></input>
      </td>
    </tr>
  );
};

export default Row;
