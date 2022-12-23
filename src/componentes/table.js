import React from "react";
import Row from "./row";

const Table = ({ tasks, checkTask, completedTask = false }) => {
  const TableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue) //filtramos cada tarea por su propiedad done
      .map((task) => <Row task={task} key={task.name} checkTask={checkTask} />);
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary table-hover ">
      <thead>
        <tr className="table-success">
          <td>
            <h4 className="d-flex justify-content-center ">Tareas</h4>
          </td>
        </tr>
      </thead>

      <tbody>{TableRows(completedTask)}</tbody>
    </table>
  );
};

export default Table;
