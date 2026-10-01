import React from 'react'
import { useState } from 'react'

const Header = (props) => {
// const [username, setusername] = useState('')
// if(!data)
// {
//   setusername("Hello Admin")
// }
// else{
//   setusername(data?.firstname)
// }

function userLogOut()
{
  localStorage.setItem('loggedinuser' , '')
  props.changeUser('')

  
  // window.location.reload()
}
  
  return (
    <div className='flex justify-between items-end' >

        <h1 className='text-2xl  ' >Hello <br /> <span className='text-3xl font-semibold ' >    </span>  👋 </h1>
        <button onClick={userLogOut}  className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-2xl ' >Log Out</button>
    </div>
  )
}

export default Header