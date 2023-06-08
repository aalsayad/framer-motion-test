import React from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard'

function TaskContainer() {
    const [tasks, setTasks] = useState([
        {id: 0, title: "Finish Watermelon Juice", description: "its not cold anymore but you need to"},
        {id: 1, title: "Pay bill", description: "It's not worth 5BD but it is what it is"},
      ])

  return (
    <>
    <div>
    
    </div>
    <div className='flex flex-col gap-5'>
    
    {tasks.map((task)=>{
        return <TaskCard key={task.id} title={task.title} description={task.description}/>
    })}
    </div>
    </>
  )
}

export default TaskContainer