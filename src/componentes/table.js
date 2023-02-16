import React from "react";
import Row from "./row";

const Table = ({ tasks, checkTask, completedTask = false }) => {
  const TableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue) //filtramos cada tarea por su propiedad done
      .map((task) => <Row task={task} key={task.name} checkTask={checkTask} />);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <td>
            <h4 className="d-flex justify-content-center bg-lime-200 rounded-xl p-2 text-teal-800">Tareas</h4>
          </td>
        </tr>
      </thead>

      <tbody className="table-success">{TableRows(completedTask)}</tbody>
    </table>
  );
};

export default Table;
