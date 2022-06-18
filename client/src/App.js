import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import routesConfig from './routes/routesConfig'

const App = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Layout />}>

        {
          routesConfig.map(({id, element, path, index}) => (
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
