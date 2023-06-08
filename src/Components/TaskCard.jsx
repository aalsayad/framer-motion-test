import React from 'react'

function TaskCard({title, description}) {
  return (
    <>
    <div className="p-7 bg-[#ffffff05] rounded-lg">
        <h3>{title}</h3>
        <p className='text-sm opacity-70 mt-2'>{description}</p>
    </div>
    </>
  )
}

export default TaskCard