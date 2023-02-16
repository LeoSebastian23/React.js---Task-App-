import React, { useState} from "react";

export const TaskCreator = ({ createTask }) => {
  const [newTask, setnewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Cancela el evento de enviarlo al backend
    createTask(newTask); // Pasamos la nueva tarea a la funcion de Crear.
    // localStorage.setItem("task", newTask); //Enviamos clave y valor al LocalStorage del navegador
    setnewTask("");
  };


  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="Ingrese su tarea"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
        className='form-control'
      />
      </div>
      <div className="col-3">
      <button className="btn btn-success">Guardar</button>
      </div>
      
    </form>
  );
};
