import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5  w-full' >
        
<div className='rounded-xl py-6 px-8 w-[45%] bg-blue-400 ' >
    <h2 className='text-2xl' >{data.newTasks}</h2>
<h3 className='text-2xl font-medium ' >New Task</h3>
</div>

<div className='rounded-xl py-6 px-8 w-[45%] bg-green-400 ' >
    <h2 className='text-2xl' >{data.completedTasks}</h2>
<h3 className='text-2xl font-medium ' >Completed Task</h3>
</div>

<div className='rounded-xl py-6 px-8 w-[45%] bg-yellow-400 ' >
    <h2 className='text-2xl' >{data.activeTasks}</h2>
<h3 className='text-2xl font-medium ' >Accepted Task</h3>
</div>

<div className='rounded-xl py-6 px-8 w-[45%] bg-red-500 ' >
    <h2 className='text-2xl' >{data.failedTasks}</h2>
<h3 className='text-2xl font-medium ' >Failed Task</h3>
</div>

    </div>
  )
}

export default TaskListNumbers