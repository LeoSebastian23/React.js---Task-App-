import React from "react";
import Row from "./row";

const Table = ({ tasks, checkTask, completedTask = false }) => {
  const TableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue) //filtramos cada tarea por su propiedad done
      .map((task) => <Row task={task} key={task.name} checkTask={checkTask} />);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h2>Tareas</h2>
          </td>
        </tr>
      </thead>

      <tbody>{TableRows(completedTask)}</tbody>
    </table>
  );
};

export default Table;
