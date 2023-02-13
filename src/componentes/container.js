import React from 'react'

export const Container = ({children}) => {
  return (
    <div className="container p-4">
        <div className='flex flex-col'>
            {children} 
        </div>
    </div> 
  )
}
