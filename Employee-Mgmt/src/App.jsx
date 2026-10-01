import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Header from './components/Other/Header'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


const AuthData = useContext(AuthContext)
const [userData,setUserData] = useContext(AuthContext);


const [user, setUser] = useState(null)
const [LoggedInUser, setLoggedInUser] = useState(null)

useEffect(() => {
const loggedInUser = localStorage.getItem("loggedinuser");
if(loggedInUser)
{
  const userDataa =JSON.parse(loggedInUser)
  console.log(userDataa);
  setUser(userDataa.role)
setLoggedInUser(userDataa.data)
  
}

  
}, [])


const handleLogin = (email,password)=>{
if(email == 'admin@me.com' && password == '123')
{
setUser('admin');
localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
}

else if(userData)
{
  let EmployeeData = userData.find((e)=>email == e.email && password == e.password)
if(EmployeeData)
{
setUser('Employee');
setLoggedInUser(EmployeeData)
  localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',data:EmployeeData}))
}

  
}
else
{
alert("Invalid Credentials");
}



}

useEffect(() => {
setLocalStorage();
getLocalStorage()

},)


  return (
<>

{!user  ?  <Login handleLogin = {handleLogin}/> : user == 'admin' ? <AdminDashboard changeUser={setUser} data={AuthData}/> : <EmployeeDashboard changeUser={setUser} data={LoggedInUser} /> } 

</>
       

      
       

  )
}

export default App