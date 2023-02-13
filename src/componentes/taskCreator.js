import React, { useState } from "react";

export const TaskCreator = ({ createTask }) => {
  const [newTask, setnewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Cancela el evento de enviarlo al backend
    createTask(newTask); // Pasamos la nueva tarea a la funcion de Crear.
    // localStorage.setItem("task", newTask); //Enviamos clave y valor al LocalStorage del navegador
    setnewTask("");

    
  };
  return (
    <form onSubmit={handleSubmit} className="bg-slate-300 flex flex-col items-center">
      
        <textarea
          type="text"
          placeholder="Ingrese su tarea"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          className="caret-pink-500 w-50 m-1 resize-y rounded-md"
          rows="5"
        />
        {/* <label>
              <span class="text-gray-700">Selecciona el color</span>
              <input type="color" class="mt-1 block w-full rounded-md"/>
        </label> */}
  
      <div className="space-y-0.5">
        <button class="px-4 py-1 m-2 rounded-full bg-sky-500 hover:bg-sky-700 hover:text-white ">Guardar</button>
      </div>
    </form>
  );
};
