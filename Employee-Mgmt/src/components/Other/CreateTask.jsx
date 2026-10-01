import React from 'react'
import { useState } from 'react'
import FailedTask from '../TaskList/FailedTask'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = ({data}) => {

      const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [description, setDescription] = useState('')
  const [Date, setDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')  
  const [Category, setCategory] = useState('')
  
  function onsubmitHandler(e)
  {
    e.preventDefault();

    const taskObj = {
      taskTitle: taskTitle,
      taskDescription: description,
      taskDate: Date,
      category: Category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }



    const data = [...userData];

    data.forEach(function(elem){
      if(assignedTo === elem.firstname)
      {
        elem.tasks.push(taskObj);
        elem.newTasks = elem.newTasks + 1;
        console.log(elem);
      }

      // console.log(elem.firstname);

    })
    setUserData(data);
    console.log(data);

console.log("tasked created")
settaskTitle('')
setDescription('')
setDate('')
setAssignedTo('')
setCategory('')
  }

  return (
    <div>

 <div>

            <form
            onSubmit={(e)=>{
onsubmitHandler(e);
            }}  
            className=' mt-5 flex flex-wrap w-full h-80 bg-[#1C1C1C]  justify-between items-start' action="">
                <div className='  px-6    py-4  w-1/5' >
                    <h3>Task Title </h3>
<input  
onChange={(e)=>{
settaskTitle(e.target.value);

}}
value={taskTitle}
className=' outline-none w-5/2 border border-gray-400 bg-[#313131] py-1 px-3 rounded ' placeholder='Make a UI Design'  type="text" />

<h3 className='mt-3' >Date</h3>
<input
onChange={(e)=>{
setDate(e.target.value);

}}
value={Date}
className=' outline-none  w-5/2 border border-gray-400 bg-[#313131] px-2 py-1' type="date" />

<h3 className='mt-3' >Assigned to </h3>
<input
onChange={(e)=>{
setAssignedTo(e.target.value);

}}
value={assignedTo}
className= ' outline-none  w-5/2 border border-gray-400 bg-[#313131] py-1 px-3 rounded '  placeholder='Employee Name' type="text" />

<h3 className='mt-3' >Category</h3>
<input 
onChange={(e)=>{
setCategory(e.target.value);

}}
value={Category}
className=' outline-none  w-5/2 border border-gray-400 bg-[#313131] py-1 px-3 rounded ' placeholder='design , dev etc'  type="text" />

                </div>



<div className='  flex flex-col w-1/2' >


<h3 className='mt-3'  >Description</h3>
<textarea
onChange={(e)=>{
setDescription(e.target.value);

}}
value={description}
className= ' outline-none  border border-gray-400 rounded  h-45 w-5/6 border-1 bg-[#313131] ' name="" cols="30" rows="10"  ></textarea>
<button className=' active:scale-95 bg-green-500 rounded h-11 mt-5 w-5/6 border-none' >Create Task</button>
</div>

            </form>


        </div>

    </div>
  )
}

export default CreateTask