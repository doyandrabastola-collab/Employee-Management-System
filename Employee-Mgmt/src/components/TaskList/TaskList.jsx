import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex flex-nowrap items-center justify-sta gap-5 mt-10 w-full p-5  ' >
  {data.tasks.map((elem,idx)=>{
if(elem.active)
{
    return <AcceptTask key={idx} data={elem} />
}
if(elem.newTask)
{
    return <NewTask key={idx} data={elem} />
}

if(elem.completed)
{
    return <CompleteTask key={idx} data={elem} />
}

if(elem.failed)
{
    return <FailedTask key={idx} data={elem} />
}

  })}












{/* <div className='h-full  w-[300px] flex-shrink-0 bg-blue-400 rounded-xl' >

    <div className='flex text-sm  p-5 justify-between items-center ' >
        <h3 className= ' px-3 py-1 rounded bg-red-600'>High</h3>
        <h4 className='text-sm' >20 Feb 2024</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold' >Make a youtube videos</h2>
    <p className=' px-3 mt-2 text-sm  ' >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nesciunt expedita enim. Iusto beatae, maiores, cupiditate saepe quod nemo placeat culpa ex, eius animi reiciendis? Provident excepturi aliquid porro repellat.
    </p>


</div> */}






        

    </div>
  )
}

export default TaskList