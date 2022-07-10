import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import AuthRoute from './auth'
import ValorsRoute from './valors'

export default () => {
  const router = Router()

  HomeRoute(router)
  AuthRoute(router)
  SoldiersRoute(router)
  ValorsRoute(router)
  
  return router
}
