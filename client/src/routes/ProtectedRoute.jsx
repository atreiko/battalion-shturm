import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, auth }) => {
  if (auth) {
    return <Navigate to='/' replace />
  } 
  return children
}

export default ProtectedRoute