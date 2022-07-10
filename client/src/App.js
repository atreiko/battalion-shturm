import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { AuthContext } from './context/Auth/AuthContext';
import { AdminPage, SignInPage } from './pages';
import ProtectedRoute from './routes/ProtectedRoute';
import routesConfig from './routes/routesConfig'
import protectedRoutesConfig from './routes/protectedRoutesConfig'

const App = () => {
  const location = useLocation()
  const auth = useContext(AuthContext)
  const isAutorized = !!auth.user

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Layout />}>

        <Route
          id='signin-page'
          path='auth/signin' 
          element={
            <ProtectedRoute auth={isAutorized}>
              <SignInPage />
            </ProtectedRoute>
          }>
        </Route>
        <Route
          id='admin'
          path='admin'
          element={
            <ProtectedRoute auth={isAutorized}>
              <AdminPage />
            </ProtectedRoute>
          }
        >
        </Route>

        {/* {
          protectedRoutesConfig.map(({ id, path, element }) => (
            <Route
              id={id}
              path={path}
              element={
                <ProtectedRoute auth={isAutorized}>
                  {element}
                </ProtectedRoute>
              }
              key={id}
            >
            </Route>
          ))
        } */}

        {
          routesConfig.map(({ id, element, path, index }) => (
            
            <Route 
              index={index} 
              element={element} 
              key={id} 
              path={path}
            />
          ))
        }

      </Route>
    </Routes>
  )
}

export default App
