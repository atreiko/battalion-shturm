import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

// import React, { createContext } from 'react'

// export const AuthContext = createContext({
//   isLoaded: false,
//   user: null,
//   token: null,
//   setUser: () => {},
//   setToken: () => {},
//   logOut: () => {},
// });