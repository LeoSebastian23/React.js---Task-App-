import { TaskCreator } from "./componentes/taskCreator";
import React, { useState, useEffect } from "react";
import { Visibility } from "./componentes/visibility";
import Table from "./componentes/table";
import { Container } from "./componentes/container";

function App() {
  const [tasksList, setTasksList] = useState([]);

  //-------------------- CREAR TAREA ------------------------//

  function createTask(newTaskName) {
    if (!tasksList.find((task) => task.name === newTaskName)) {
      // Validacion
      setTasksList([...tasksList, { name: newTaskName, done: false }]); // Se crea un nuevo arreglo con los mismos valores del anterior
    } // Y se agrega la nueva tarea
  }

  useEffect(() => {
    const data = localStorage.getItem("task"); // BUSCAMOS EN EL LOCAL STORE
    if (data) {
      // SI HAY DATA --->
      setTasksList(JSON.parse(data)); // ACTUALIZAMOS EL ESTADO DE LA LISTA
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksList)); // ACTUALIZAMOS ESTADO Y CONVERTIMOS LA LISTA A JSON
  }, [tasksList]);

  const checkTask = (task) => {
    setTasksList(
      tasksList.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)) // SI T ES IGUAL AL PARAMETRO RECIBIDO ---> DEVUELVE NUEVO ARREGLO, T + NUEVO VALOR DE DONE
    );
  };

  const [completedTask, setCompletedTask] = useState(false);

  const CleanerTask = () => {
    setTasksList(tasksList.filter((task) => !task.done)); // ACTUALIZA EL ESTADO LIMPIANDO LAS TAREAS REALIZADAS.
    setCompletedTask(false); // DEVUELVE C/TAREA SI TASK.DONE = FALSO
  };

  //------------------------------------------------------------------------------------------//
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 vh-100">
      
      <Container>
        <h1 className=" bg-lime-50 rounded-md text-center text-teal-700 p-2 mb-5 "> GESTOR DE TAREAS</h1>
        <TaskCreator createTask={createTask} />
        <Table tasks={tasksList} checkTask={checkTask} />
        <Visibility
          setCompletedTask={setCompletedTask}
          CleanerTask={CleanerTask}
          isVisibili={completedTask}
        />

        {completedTask === true && (
          <Table
            tasks={tasksList}
            checkTask={checkTask}
            completedTask={completedTask}
          />
        )}
      </Container>
    </div>
    
  );
}
export default App;
