import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'

export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  
  return router
}
