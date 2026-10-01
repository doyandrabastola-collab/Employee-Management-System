import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-3 h-130 ' >
<div className='bg-red-400  py-5 px-4  flex justify-between mt-3 ' >
    <h2 className='w-1/5 ' >Employee Name</h2>
    <h3  className='w-1/5  ' >New Task</h3>
    <h5  className='w-1/5  ' >Active Task</h5>
       <h5  className='w-1/5  ' >Completed  </h5>
    <h5  className='w-1/5  ' >Failed</h5>
</div>

<div className=' h-110 overflow-auto mt-2' >
{

    userData.map((elem,idx)=>{
        return <div key={idx} className='border border-emerald-400 py-5 px-4  flex justify-between mt-3 ' >
    <p  className='w-1/5 text-white '>{elem.firstname}</p>
    <p   className='w-1/5 text-blue-500 ' >{elem.newTasks}</p>
    <p  className='w-1/5  text-yellow-500' >{elem.activeTasks}</p>
       <p   className='w-1/5 text-green-400 ' >{elem.completedTasks}</p>
    <p   className='w-1/5 text-red-500 ' >{elem.failedTasks}</p>
</div>
    })
}
</div>
{/* <div className='bg-yellow-400  py-5 px-4 flex justify-between mt-3' >
    <h2 >Prashant</h2>
    <h3>Make a UI Design</h3>
    <h5>Status</h5>
</div> 

<div className='bg-green-400  py-5 px-4 flex justify-between mt-3 ' >
    <h2 >Prashant</h2>
    <h3>Make a UI Design</h3>
    <h5>Status</h5>
</div>

<div className='bg-blue-400  py-5 px-4 flex justify-between mt-3' >
    <h2 >Prashant</h2>
    <h3>Make a UI Design</h3>
    <h5>Status</h5>
</div> */}


    </div>
  )
}

export default AllTask