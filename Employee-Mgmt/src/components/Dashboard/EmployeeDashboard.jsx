import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  
  return (
    <div className=' h-screen bg-[#1C1C1C] p-10' >
<h1>{props.id}</h1>

<Header changeUser={props.changeUser} data={props.data} />
<TaskListNumbers data={props.data} />  
<TaskList data={props.data} />

    </div>
  )
}

export default EmployeeDashboard