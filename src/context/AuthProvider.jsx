import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const Authcontext = createContext();
const AuthProvider = ({children}) => {

const [UserData, setUserData] = useState(null)

useEffect(() => {
  setLocalStorage()
  const{employees,admin}= getLocalStorage()
  setUserData({employees,admin})

  
}, [])


  return (
    <div>
      <Authcontext.Provider value={UserData}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}


export default AuthProvider
