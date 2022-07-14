import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { AdminPage, SoldierPage, SoldiersPage } from './pages';
import ProtectedRoute from './routes/ProtectedRoute';
import routesConfig from './routes/routesConfig'

const App = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Layout />}>

        <Route
          id='admin'
          path='admin'
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        >
        </Route>

        {
          routesConfig.map(({ id, element, path, index }) => (
            
            <Route 
              index={index} 
              key={id} 
              path={path}
              element={element} 
            />
          ))
        }

      </Route>
    </Routes>
  )
}

export default App
