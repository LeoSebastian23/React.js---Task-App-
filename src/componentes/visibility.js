import React from 'react'

export const Visibility = ({setCompletedTask, CleanerTask,isVisibili}) => {

    const cleaner = () =>{
        CleanerTask()
    } 

  return (
    <div className='bg-gray-700 col-md-6 pb-4 rounded-lg flex flex-col justify-around items-center justify-items-center'>
        <div className='form-check form-switch '>
        <input
         className='form-check-input'
          checked={isVisibili}
          type="checkbox"
          onChange={(e) => setCompletedTask(e.target.checked)}
        />{" "}
        </div>
        <label class="text-yellow-50 font-medium">Mostrar tareas realizadas</label>

        <button onClick={cleaner} className="btn btn-danger btn">Limpiar</button>
    </div>
  )
}
