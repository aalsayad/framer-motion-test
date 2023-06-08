import './App.css'
import { useState } from 'react'
import TaskContainer from './Components/TaskContainer'

function App() {


  return (
    <>
    <div className="flex justify-center w-full h-[100dvh] py-10">
    <div className="w-[90%] max-w-[1120px]">
        <div className="flex items-center gap-10 cursor-pointer border-b-2 border-[#ffffff10] mb-9">
          <div className="p-3 opacity-25">Overview</div>
          <div className="p-3 border-b-2 border-b-[#e0d31b]">Tasks</div>
        </div>
        
        <TaskContainer/>
      </div>
    </div>



    </>
  )
}

export default App
