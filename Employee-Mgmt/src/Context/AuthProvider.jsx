import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    

    const [userData, setUserData] = useState(null);


    useEffect(() => {
const {employees , admin} = getLocalStorage()
setUserData(employees)

    }, [])
    



  return (
    <div>
        
        <AuthContext.Provider value={[userData,setUserData]} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider