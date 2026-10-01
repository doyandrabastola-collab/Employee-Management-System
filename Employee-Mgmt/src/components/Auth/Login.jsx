import React from 'react'
import { useState } from 'react';


const Login = ({handleLogin}) => {

// console.log(handleLogin)

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const submitHandler = (e) =>{
    e.preventDefault();
handleLogin(email,password);

console.log("Email is : " , email);
console.log("Password is : " , password);

setEmail("");
setPassword("");


}

  return (
  <div className="flex h-screen w-screen items-center justify-center">

<div className='border-2 border-emerald-600  ' >
<form 
onSubmit={(e)=>{
submitHandler(e);
}}  className='flex flex-col p-20 items-center justify-center '  action="">

<input
value={email}
 onChange={(e)=>{
setEmail(e.target.value);
}} 
required className=' placeholder:text-gray-400  bg-transparent border-2 outline-none border-emerald-600 rounded-full text-xl py-3 px-4 ' type="email" placeholder='Enter your email' 
/>


<input
value={password}
 onChange={(e)=>{
setPassword(e.target.value);
}} 
required className=' mt-4 placeholder:text-gray-400  bg-transparent border-2 outline-none border-emerald-600 rounded-full text-xl py-3 px-4 ' type="password" placeholder='Enter password' name="" id=""
 />
<button className='  w-60 border-none mt-4 placeholder:text-white  border-2 outline-none bg-emerald-600 rounded-full text-xl py-2 px-3 '  >Log in</button>




</form>

</div>


  </div>
)
}

export default Login;