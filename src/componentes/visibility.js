import React from 'react'

export const Visibility = ({setCompletedTask, CleanerTask,isVisibili}) => {

    const cleaner = () =>{
        CleanerTask()
    } 

  return (
    <div className='d-flex justify-content-between align-items-center bg-secondary text-white text-center p-2 border-secondary rounded-lg'>
        <div className='form-check form-switch'>

        <input
        className='form-check-input'
          checked={isVisibili}
          type="checkbox"
          onChange={(e) => setCompletedTask(e.target.checked)}
        />{" "}
        </div>
        <label class="fw-bolder ">Mostrar tareas realizadas</label>

        <button onClick={cleaner} className="btn btn-danger btn">Limpiar</button>
    </div>
  )
}
