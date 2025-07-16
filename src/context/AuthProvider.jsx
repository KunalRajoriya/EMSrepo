import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localStorage';
export const Authcontext = createContext();
const AuthProvider = ({children}) => {

const [UserData, setUserData] = useState(null)

useEffect(() => {
  const{employees,admin}= getLocalStorage();
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
