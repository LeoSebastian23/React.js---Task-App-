import React from "react";
import Row from "./row";

const Table = ({ tasks, checkTask, completedTask = false }) => {
  const TableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue) //filtramos cada tarea por su propiedad done
      .map((task) => <Row task={task} key={task.name} checkTask={checkTask} />);
  };

  return (
    <div className="col-md-6 pb-2 bg-slate-800 rounded-lg ">
          <div className="">
            <h3 className="text-center text-slate-100 rounded-lg py-1 ">LISTA DE TAREAS</h3>
          </div>
      <div className="flex flex-wrap justify-center">
        {TableRows(completedTask)}
      </div>

    </div>
  );
};

export default Table;
