import React from 'react'

const NewTask = ({data}) => {
  return (
   <div className='h-full  w-[300px] flex-shrink-0 bg-yellow-400 rounded-xl' >

    <div className='flex text-sm  p-5 justify-between items-center ' >
        <h3 className= ' px-3 py-1 rounded bg-red-600'>{data.category}</h3>
        <h4 className='text-sm' >{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 px-3 text-2xl font-semibold' >{data.taskTitle}</h2>
    <p className=' px-3 mt-2 text-sm  ' >
             {data.taskDescription}
    </p>

   
<div className='my-5 mx-3' >
    <button className='bg-green-600  text-sm py-0.5 px-2' >Accept The Task</button>
</div>

</div>

  )
}

export default NewTask