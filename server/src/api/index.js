import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import AuthRoute from './auth'

export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  AuthRoute(router)
  
  return router
}
