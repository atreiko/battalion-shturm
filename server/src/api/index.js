import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import AuthRoute from './auth'
import ValorsRoute from './valors'
import PhotosRoute from './photos'

export default () => {
  const router = Router()

  HomeRoute(router)
  AuthRoute(router)
  SoldiersRoute(router)
  ValorsRoute(router)
  PhotosRoute(router)
  
  return router
}
