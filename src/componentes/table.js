import React from "react";
import Row from "./row";

const Table = ({ tasks, checkTask, completedTask = false }) => {
  const TableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue) //filtramos cada tarea por su propiedad done
      .map((task) => <Row task={task} key={task.name} checkTask={checkTask} />);
  };

  return (
    <div className="bg-slate-600 ">

          <div>
            <h4 className="d-flex justify-content-center bg-slate-50 ">Tareas</h4>
          </div>

      <div className="flex flex-wrap justify-center">
        {TableRows(completedTask)}
      </div>

    </div>
  );
};

export default Table;
