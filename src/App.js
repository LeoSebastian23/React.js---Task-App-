
import { TaskCreator } from "./componentes/taskCreator";
import React, { useState, useEffect } from "react";
import { Visibility } from "./componentes/visibility";
import Table from "./componentes/table";


function App() {
  const [tasksList, setTasksList] = useState([]);

  //-------------------- CREAR TAREA ------------------------//

  function createTask(newTaskName) {
    if (!tasksList.find((task) => task.name === newTaskName)) {
      // Validacion
      setTasksList([...tasksList, { name: newTaskName, done: false }]); // Se crea un nuevo arreglo con los mismos valores del anterior
    } // Y se agrega la nueva tarea
  }

  //------------------------------------------------------------------------------------------//

  useEffect(() => {
    const data = localStorage.getItem("task"); // BUSCAMOS EN EL LOCAL STORE
    if (data) {
      // SI HAY DATA --->
      setTasksList(JSON.parse(data)); // ACTUALIZAMOS EL ESTADO DE LA LISTA
    }
  }, []);

  //------------------------------------------------------------------------------------------//

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksList)); // ACTUALIZAMOS ESTADO Y CONVERTIMOS LA LISTA A JSON
  }, [tasksList]);

  //------------------------------------------------------------------------------------------//

  const checkTask = (task) => {
    setTasksList(
      tasksList.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)) // Si t es igual a task.name(parametro recibido) t sigue igual + cambio de done. Se devuelve nuevo arreglo.
    );
  };

  //------------------------------------------------------------------------------------------//

  const [completedTask, setCompletedTask] = useState(false);

  //------------------------------------------------------------------------------------------//

  const CleanerTask = () => {
    setTasksList(tasksList.filter((task) => !task.done)); // ACTUALIZA EL ESTADO LIMPIANDO LAS TAREAS REALIZADAS.
    setCompletedTask(false); // DEVUELVE C/TAREA SI TASK.DONE = FALSO
  };

  //------------------------------------------------------------------------------------------//
  return (
    <div className="App">
      <TaskCreator createTask={createTask} />
      <Table tasks={tasksList} checkTask={checkTask} />
      <Visibility
        setCompletedTask={setCompletedTask}
        CleanerTask={CleanerTask}
        isVisibili = {completedTask}
      />

      {completedTask === true && (
        <Table
          tasks={tasksList}
          checkTask={checkTask}
          completedTask={completedTask}
        />
      )}
    </div>
  );
}
export default App;
