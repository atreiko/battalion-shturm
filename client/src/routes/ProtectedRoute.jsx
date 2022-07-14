import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/Auth/AuthContext'

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const auth = useContext(AuthContext)
  const isAutorized = !!auth.user

  if (!isAutorized) {
    return <Navigate to='/' state={{from: location.pathname}} />
  } 
  return children
}

export default ProtectedRoute