import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className='h-full  w-[300px] flex-shrink-0 bg-green-400 rounded-xl' >

    <div className='flex text-sm  p-5 justify-between items-center ' >
        <h3 className= ' px-3 py-1 rounded bg-red-600'>{data.category}</h3>
        <h4 className='text-sm' >{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold' >{data.taskTitle}</h2>
    <p className=' px-3 mt-2 text-sm  ' >
        {data.taskDescription}
    </p>

<div className='mt-4' >
<button className=' py-1 px-1 w-full bg-green-900 text-sm' >Task Completed</button>
</div>

</div>



  )
}

export default CompleteTask