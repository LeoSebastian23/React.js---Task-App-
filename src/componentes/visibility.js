import React from 'react'

export const Visibility = ({setCompletedTask, CleanerTask,isVisibili}) => {

    const cleaner = () =>{
        CleanerTask()
    } 

  return (
    <div>
        <input
          checked={isVisibili}
          type="checkbox"
          onChange={(e) => setCompletedTask(e.target.checked)}
        />{" "}
        <label>Mostrar tareas realizadas </label>

        <button onClick={cleaner}>Limpiar</button>
    </div>
  )
}
